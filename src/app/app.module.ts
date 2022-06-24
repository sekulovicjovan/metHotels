import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomComponent } from './components/room/room.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { FormsModule } from '@angular/forms';
import { PipePipe } from './helpers/pipe.pipe';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomFormComponent,
    PipePipe,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
