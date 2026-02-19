import { Component, inject, OnInit } from '@angular/core';
import { Video } from '../../services/video';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private videoService = inject(Video);

  videos: any[] = [];

  ngOnInit(): void {
    this.videoService.fetchVideos().subscribe((data) => {
      console.log(data);
      this.videos = data.items;
    })
  }
}
