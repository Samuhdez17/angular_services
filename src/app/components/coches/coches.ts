import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { CochesService } from '../../services/coches.service';

@Component({
  selector: 'app-coches',
  standalone: false,
  styleUrl: './coches.css',
  templateUrl: './coches.html',
})

export class Coches implements OnInit {
  coches!: Array<Coche>

  constructor(
    private _cdr: ChangeDetectorRef,
    private _cochesService: CochesService,
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.coches = await this._cochesService.getCoches()
      this._cdr.detectChanges()

    } catch (error) {
      console.log(error);
    }
  }
}
