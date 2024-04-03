import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

public url:string=''
 @Input() public inputStars:number=0; 

@Output() public ratingEvent: EventEmitter<any>=new EventEmitter();

rating1(){
  this.ratingEvent.emit('/assets/1star.jpg')
}
rating2(){
  this.ratingEvent.emit('/assets/2star.jpg')
}
rating3(){
  this.ratingEvent.emit('/assets/3star.jpg')
}
rating4(){
  this.ratingEvent.emit('/assets/4star.jpg')
}
rating5(){
  this.ratingEvent.emit('/assets/5star.jpg')
}

}
