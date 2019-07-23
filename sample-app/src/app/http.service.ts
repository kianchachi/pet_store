import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient) {}

    getAll(){
    return this._http.get('/pets')

 }

    getOne(id){
      return this._http.get(`/pets/${id}`)

    }

    create(prod){
      return this._http.post('/pets', prod)

    }

    
    update(id, prod){

      return this._http.put(`/pets/${id}`, prod )

    }

    delete(id){

      return this._http.delete(`/pets/${id}`)

    }


}





