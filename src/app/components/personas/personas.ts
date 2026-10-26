import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-personas',
  standalone: false,
  styleUrl: './personas.css',
  templateUrl: './personas.html',
})

export class Personas implements OnInit{
  personas!: Array<Persona>

  constructor(
    private _cdr: ChangeDetectorRef,
    private _personasService: PersonasService,
  ) {

  }

  async ngOnInit() {
    this._personasService.getPersonasOservable().subscribe((res) => {
      this.personas = res
      this._cdr.detectChanges()
      console.log(this.personas);
    })
  }
}
