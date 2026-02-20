import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-video',
  imports: [YouTubePlayerModule],
  templateUrl: './video.html',
  styleUrl: './video.css',
})
export class Video implements OnInit {
  private route = inject(ActivatedRoute);

  videoId: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('id')!;
    });
  }
}
