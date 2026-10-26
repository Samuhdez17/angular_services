import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comics',
  standalone: false,
  styleUrl: './comics.css',
  templateUrl: './comics.html',
})

export class Comics implements OnInit {
  comics!: Array<Comic>

  constructor(
    private _cdr: ChangeDetectorRef,
    private _comicService: ComicsService
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.comics = await this._comicService.getComics()
    this._cdr.detectChanges()
  }
}
