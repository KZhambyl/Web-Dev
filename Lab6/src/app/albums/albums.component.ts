import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { AlbumsService } from '../service/albums.service';
import { Router, RouterLink } from '@angular/router';
import { Album } from '../models';
import { signal } from '@angular/core';

@Component({
  selector: 'app-albums',
  imports: [NgFor,RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
  standalone: true
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  // albums = signal<Array<Album>>([]);

  constructor(
      private albumsService: AlbumsService,
      private router: Router
    ) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(allAlbums => {
      this.albums = allAlbums;
    });

    // this.albumsService.getAlbums().subscribe(allAlbums => {
    //   this.albums.set(allAlbums);
    // });
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  viewAlbum(id: number) {
    this.router.navigate([`/albums/${id}`]);
  }
}
