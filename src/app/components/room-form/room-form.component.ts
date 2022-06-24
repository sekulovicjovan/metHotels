import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {
  @Output() myOnSubmit: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

onSubmit(idInput : HTMLInputElement, titleInput : HTMLInputElement, priceInput : HTMLInputElement){
const room :Room = {
id: +idInput.value,
title:titleInput.value,
img: 'assets/img/room.jpg',
price: +priceInput.value
}

this.myOnSubmit.emit(room);
}

}
