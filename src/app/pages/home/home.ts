import { Component, inject, signal } from '@angular/core';
import { Video } from '../../services/video';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-home',
  imports: [FormField],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private videoService = inject(Video);

  searchQuery = signal<string>('');

  videos = signal<any[]>([]);

  onSearch() {
    this.videoService.fetchVideos(this.searchQuery()).subscribe((data) => {
      console.log(data);
      this.videos.set(data.items);
    })
  }

  onAdd(video: any) {
    this.videoService.addVideoToPlaylist(video);
  }
}
