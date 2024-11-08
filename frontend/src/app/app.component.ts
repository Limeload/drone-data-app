import { Component, OnInit } from '@angular/core';
import { DatasetsService } from './services/datasets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit {
  title = 'frontend';
  datasetFiles: string[] = [];
  datasetData: any = {};
  loading: boolean = true;
  filename: any;

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
}


