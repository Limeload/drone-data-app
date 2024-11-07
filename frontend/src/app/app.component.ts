import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/apiservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit {
  title = 'frontend';
  newData: any;

  constructor(private _dataservice:DataService) { }

  ngOnInit() {
	this.getData();
}

getData(){
  this._dataservice.getData().subscribe((res: any)=>{
  	this.newData=res;
})
}
}
