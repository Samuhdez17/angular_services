import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";
import { Global } from "../global";

import { environment } from "../../environments/environment";

@Injectable()
export class PersonasService {
    apiPersonas = environment.urlPersonas

    constructor(
        private _http: HttpClient
    ) {

    }

    getPersonasOservable(): Observable<any> {
        let url = this.apiPersonas
        let request = 'api/personas'

        return this._http.get(url + request)
    }

    getPersonasPromesa(): Promise<any> {
        let url = this.apiPersonas
        let request = 'api/personas'

        let promise = new Promise((resolve, reject) => {
            this._http.get(url + request).subscribe((res) => {
                resolve(res)
            })
        })

        return promise
    }

    async getPeersonasAsync(): Promise<Persona[]> {
        let url = this.apiPersonas
        let request = 'api/personas'

        return firstValueFrom(this._http.get<Persona[]>(url + request))
    }
}