import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Coche } from '../models/coche';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CochesService {
    apiCoches = environment.urlCoches

    constructor(
        private _http: HttpClient,
    ) {}

    async getCoches(): Promise<Coche[]> {
        let url = this.apiCoches
        
        return firstValueFrom(this._http.get<Coche[]>(url))
    }
}