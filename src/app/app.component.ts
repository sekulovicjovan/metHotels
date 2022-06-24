import { Component } from '@angular/core';
import { Room } from './models/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  price: number;
  rooms: Room[] = [
    {id : 1, title : 'Soba 1', img : 'assets/img/room.jpg', price : 50},
    {id : 2, title : 'Soba 2', img : 'assets/img/room.jpg', price : 150},
    {id : 3, title : 'Soba 3', img : 'assets/img/room.jpg', price : 250}
  ]
  addRoom(room: Room){
    this.rooms.push(room);
  }
shuffleArray(){

    let currentIndex = this.rooms.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.rooms[currentIndex], this.rooms[randomIndex]] = [
        this.rooms[randomIndex], this.rooms[currentIndex]];
    }



}

}
