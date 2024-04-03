import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
public stars:number=0;
public ratingUrl:string=''

catch(value:any){
  this.ratingUrl=value
}
}
