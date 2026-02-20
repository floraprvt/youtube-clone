import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { UserData } from '../../types/auth';
import { Video } from '../../services/video';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  private authService = inject(AuthService);
  private videoService = inject(Video);

  user: UserData = { email: '', password: '' };
  playlist: any[] = []

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.playlist = this.videoService.getPlaylist();
  }

  onDelete(videoId: string) {
    this.videoService.deleteVideoFromPlaylist(videoId);
  }
}
