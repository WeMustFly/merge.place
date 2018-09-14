import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HelloComponent } from './pages/hello/hello.component';
import { MenuComponent } from './common/menu/menu.component';
import { ButtonMembershipComponent } from './common/buttons/button-membership/button-membership.component';
import { ButtonMapComponent } from './common/buttons/button-map/button-map.component';
import { ButtonBookRoomComponent } from './common/buttons/button-book-room/button-book-room.component';
import { BookingComponent } from './pages/booking/booking.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HelloComponent,
        MenuComponent,
        ButtonMembershipComponent,
        ButtonMapComponent,
        ButtonBookRoomComponent,
        BookingComponent
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
