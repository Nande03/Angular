import { Component } from '@angular/core';
import { ServeUService } from '../Services/serve-u.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  title = 'Products';
  newData:any;
  constructor(private _apiService: ServeUService) {}

  ngOnInit(){
    this._apiService.getData().subscribe(res=>{
      this.newData=res;
    })
  }

}
