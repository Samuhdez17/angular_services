import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { FuncionesService } from '../../services/funciones.service';

@Component({
  selector: 'app-plantilla-funciones',
  standalone: false,
  styleUrl: './plantilla-funciones-multiple.css',
  templateUrl: './plantilla-funciones-multiple.html',
})

export class PlantillaFuncionesMultiple implements OnInit {
  funciones!: Array<string>
  plantilla!: Array<Empleado>
  funcionesSeceionadas!: Array<string>

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

  async mostrarPlantilla(): Promise<void> {
    let aux = []
    this.funcionesSeceionadas = []

    for (let opcion of this.funcion.nativeElement.selectedOptions) {
      if (opcion.selected) {
        aux.push(opcion.value)
        this.funcionesSeceionadas.push(opcion.value)
      }
    }

    try {
      this.plantilla = await this._funcionesService.getPlantillas(aux)
      this.status = true
      this._cdr.detectChanges()

      console.log('Plantilla cargada:', this.plantilla)
    } catch (error) {
      console.error('Error al cargar la plantilla:', error)
    }
  }
}
