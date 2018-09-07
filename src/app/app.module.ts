import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HelloComponent } from './hello/hello.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonMembershipComponent } from './button-membership/button-membership.component';
import { ButtonMapComponent } from './button-map/button-map.component';
import { ButtonBookRoomComponent } from './button-book-room/button-book-room.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HelloComponent,
    MenuComponent,
    ButtonMembershipComponent,
    ButtonMapComponent,
    ButtonBookRoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
