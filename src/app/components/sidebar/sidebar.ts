import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Video } from '../../services/video';
import { UserData } from '../../types/auth';
import { VideoData } from '../../types/video';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  private authService = inject(AuthService);
  private videoService = inject(Video);

  constructor() {
    this.videoService.changePlaylistEmitted.subscribe(() => {
      this.playlist = this.videoService.getPlaylist();
    })
  }

  user: UserData = { email: '', password: '' };
  playlist: VideoData[] = []

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.playlist = this.videoService.getPlaylist();
  }

  onDelete(videoId: string) {
    this.videoService.deleteVideoFromPlaylist(videoId);
    this.playlist = this.videoService.getPlaylist();
  }
}
