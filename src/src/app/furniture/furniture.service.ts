import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../models/furniture';
import { Observable } from 'rxjs';

const createFurniture = 'http://localhost:5000/furniture/create';
const allFurnitures = 'http://localhost:5000/furniture/all';
const furnitureDetails = 'http://localhost:5000/furniture/details/';
const deleteFurniture = 'http://localhost:5000/furniture/delete/';
const userFurniture = 'http://localhost:5000/furniture/user';


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  createFurniture(data) {
    return this.http.post(createFurniture, data);
  }

  getAllFurniture(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(allFurnitures);
  }

  getFurniture(id): Observable<Furniture> {
    return this.http.get<Furniture>(`${furnitureDetails}${id}`);
  }

  getUserFurniture(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(userFurniture);
  }

  deleteFurniture(id) {
    return this.http.delete(`${deleteFurniture}${id}`);
  }
}
