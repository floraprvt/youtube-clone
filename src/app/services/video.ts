import { inject, Injectable } from '@angular/core';
import { API_KEY } from '../../environment.js'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.js';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable({
  providedIn: 'root',
})
export class Video {
  private http = inject(HttpClient);

  private authService = inject(AuthService);

  fetchVideos(query: string): Observable<any> {
    return this.http.get(`${BASE_URL}?part=snippet&q=${query}&type=video&key=${API_KEY}`);
  }

  addVideoToPlaylist(video: any) {
    const user = this.authService.getUser();

    const storagePlaylist = localStorage.getItem(user.email);
    const playlist = storagePlaylist ? JSON.parse(storagePlaylist) : [];

    playlist.push(video);
    localStorage.setItem(user.email, JSON.stringify(playlist));
  }
}
