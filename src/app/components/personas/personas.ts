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

  async ngOnInit(): Promise<void> { //EL PROMISE VOID SOLO VA CON EL TERCER CASO
    /*
    this._personasService.getPersonasOservable().subscribe({
      next: (res: ) => {
        this.personas = res
        this._cdr.detectChanges()
      }, error: (error) => {
        console.log(error);
      }
    })

    this._personasService.getPersonasPromesa().then((res) => {
      this.personas = res
      this._cdr.detectChanges()
      console.log(this.personas);
    }). catch((error) => {
      console.log(error);
    })
    */

    try {
      this.personas = await this._personasService.getPeersonasAsync()
      this._cdr.detectChanges()
      
    } catch (error) {
      console.log(error);
    }
  }
}
