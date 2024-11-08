import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatasetsService {

  constructor(private http: HttpClient) {}

  getDatasets(){
    return this.http.get('http://127.0.0.1:5000/api/datasets');
  }

  getDataset(filename: string){
    return this.http.get(`http://127.0.0.1:5000/api/dataset/${filename}`);
  }
}
