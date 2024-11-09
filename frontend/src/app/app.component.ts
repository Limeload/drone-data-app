import { Component, OnInit } from '@angular/core';
import { DatasetsService } from './services/datasets.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit {
  title = 'frontend';
  datasetFiles: string[] = [];
  datasetData: any = {};
  loading: boolean = true;
  filename: any;
  query: string = '';
  response: string = '';

  constructor(
    private _datasetsService: DatasetsService
  ) {}

  ngOnInit() {
  this.getDatasets();
}

getDatasets(){
  this._datasetsService.getDatasets().subscribe((response: any) => {
    this.datasetFiles = response.datasets as string[];
    this.loading = false;
  });
}

getDataset(filename: string){
  this.loading = true;
  this._datasetsService.getDataset(filename).subscribe(data => {
    this.datasetData[filename] = data;
    this.loading = false;
  });
}

sendQuery() {
  this._datasetsService.sendQuery(this.query)
    .subscribe({
      next: (data: any) => {
        this.response = data.response;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });

}
}


