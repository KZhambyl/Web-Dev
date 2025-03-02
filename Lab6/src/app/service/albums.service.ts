import { inject, Injectable } from '@angular/core';
import { AlbumsComponent } from '../albums/albums.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, Photo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  http = inject(HttpClient);

  constructor() { }


  // getAlbums(): Observable<Album[]> {
  //   return this.http.get<Array<Album[]>>(this.apiUrl)
  // }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl)
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  updateAlbum(id: number, album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${id}`, album)
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAlbumPhotos(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/photos`);
  }
}
