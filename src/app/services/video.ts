import { inject, Injectable } from '@angular/core';
import { API_KEY } from '../../environment.js'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable({
  providedIn: 'root',
})
export class Video {
  private http = inject(HttpClient);

  fetchVideos(query: string): Observable<any> {
    // console.log(query);
    
    return this.http.get(`${BASE_URL}?part=snippet&q=${query}&type=video&key=${API_KEY}`);
  }

}
