import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../service/albums.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-photos',
  imports: [NgFor],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css',
  standalone: true
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number = -1;
  photos: any[]=[];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.params['id']);
    this.albumsService.getAlbumPhotos(this.albumId).subscribe(allPhotos => {
      this.photos=allPhotos;
    });
  }

  backToAlbum() {
    this.router.navigate([`/albums/${this.albumId}`])
  }
}
