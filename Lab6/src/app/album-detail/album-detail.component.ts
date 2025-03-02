import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AlbumsService } from '../service/albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
  standalone: true
})
export class AlbumDetailComponent implements OnInit {
  album: any = {};
  albumId: number = -1;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.params['id']);
    // this.album = this.albumsService.getAlbumById(this.albumId);
    this.albumsService.getAlbumById(this.albumId).subscribe(currentAlbum => {
      this.album=currentAlbum;
    });
  }

  updateAlbum() {
    this.albumsService.updateAlbum(this.albumId, this.album).subscribe(() => {
      this.router.navigate([`/albums/${this.albumId}`]);
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }

  viewPhotos() {
    this.router.navigate([`/albums/${this.albumId}/photos`]);
  }
}
