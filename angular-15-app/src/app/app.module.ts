import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonCardComponent} from "./pokemon-card/pokemon-card.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
