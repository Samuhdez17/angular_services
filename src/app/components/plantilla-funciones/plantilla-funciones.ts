import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { FuncionesService } from '../../services/funciones.service';
import { stat } from 'fs';

@Component({
  selector: 'app-plantilla-funciones',
  standalone: false,
  styleUrl: './plantilla-funciones.css',
  templateUrl: './plantilla-funciones.html',
})

export class PlantillaFunciones implements OnInit {
  funciones!: Array<string>
  plantilla!: Array<Empleado>

  @ViewChild('funcionBox') funcion!: ElementRef
  status: boolean = false

  constructor(
    private _cdr: ChangeDetectorRef,
    private _funcionesService: FuncionesService,
  ) {

  }

  async ngOnInit() {
    this._funcionesService.getFunciones().subscribe({
      next: (res: string[]) => {
        this.funciones = res
        this._cdr.detectChanges()

      }, error: (error) => {
        console.log(error);
      }
    })
  }

  async cargarPlantilla(): Promise<void> {
    try {
      this.plantilla = await this._funcionesService.getPlantilla(this.funcion.nativeElement.value)
      this.status = true
      this._cdr.detectChanges()

    } catch (error) {
      console.log(error);
    }
  }
}
