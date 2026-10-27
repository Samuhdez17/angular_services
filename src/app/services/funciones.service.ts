import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable()
export class FuncionesService {
    apiFunciones = environment.urlFunciones

    constructor(
        private _http: HttpClient,
    ) {}

    getFunciones(): Observable<any> {
        try {
            let url = this.apiFunciones
            let request = 'api/plantilla/funciones'

            return this._http.get(url + request)
        } catch (error) {
            console.error('Error al obtener las funciones:', error)
            throw error
        }
    }

    getPlantilla(funcion: string): Promise<Empleado[]> {
        try {
            let url = this.apiFunciones
            let request = 'api/plantilla/plantillafuncion/' + funcion

            return firstValueFrom(this._http.get<Empleado[]>(url + request))
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    getPlantillas(funciones: Array<string>): Promise<Empleado[]> {
        let contenido = ''

        for (let funcion of funciones)
            contenido += 'funcion=' + funcion + '&'

        contenido = contenido.substring(0, contenido.length - 1)
        
        let url = this.apiFunciones
        let request = 'api/plantilla/plantillafunciones?' + contenido
        
        console.log('peticion: ' + url + request)
        return firstValueFrom(this._http.get<Empleado[]>(url + request))
    }
}