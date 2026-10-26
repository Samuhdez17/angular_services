import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PersonasService {
    constructor(
        private _http: HttpClient
    ) {

    }

    getPersonasOservable(): Observable<any> {
        let url = 'https://servicioapipersonasmvcpgs.azurewebsites.net/'
        let request = 'api/personas'

        return this._http.get(url + request)
    }
}