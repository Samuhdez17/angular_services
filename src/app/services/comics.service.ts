import { Injectable } from "@angular/core"
import { Comic } from "../models/comic"

@Injectable()
export class ComicsService {
    async getComics(): Promise<Array<Comic>> {
        let path = './assets/comics.json'
        let respuesta = await fetch(path)
        let data = await respuesta.json()
        let comics: Array<Comic> = []

        for (let c of data) {
            let comic = new Comic(c.titulo, c.imagen, c.descripcion)
            comics.push(comic)
        }
        console.log(comics)

        return comics
    }
}