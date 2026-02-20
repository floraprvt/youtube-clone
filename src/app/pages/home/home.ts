import { Component, inject, signal } from '@angular/core';
import { Video } from '../../services/video';
import { FormField } from '@angular/forms/signals';
import { RouterLink } from "@angular/router";
import { VideoData } from '../../types/video';

@Component({
  selector: 'app-home',
  imports: [FormField, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private videoService = inject(Video);

  searchQuery = signal<string>('');

  videos = signal<VideoData[]>([]);

  onSearch() {
    this.videoService.fetchVideos(this.searchQuery()).subscribe((data) => {
      this.videos.set(data.items);
    })
  }

  onAdd(video: VideoData) {
    this.videoService.addVideoToPlaylist(video);
    this.videoService.emitPlaylistChange(this.videos());
  }
}
