import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,map } from "rxjs";
import { Orden } from "../models/orden";
 //Esto es el Service
@Injectable({providedIn:'root'})
export class OrdenService{

    private apiUrl= 'https://jsonplaceholder.typicode.com/posts'

    constructor(private http: HttpClient){}

    obtenerOrdenes(): Observable<Orden[]> {
        return this.http.get<any[]>(this.apiUrl).pipe(

            map(publicaciones => publicaciones.map(publicacion=> ({

                id: publicacion.id,
                userId: publicacion.userId,
                title: publicacion.title,
                body: publicacion.body,

                precio: publicacion.id * 10000,
                cantidad: (publicacion.id % 5) +1, //DaTOS PRUEBA
                stock: publicacion.id % 8

            })))

        );
    }

}










