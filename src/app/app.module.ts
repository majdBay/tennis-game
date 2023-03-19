import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ScoreDisplayComponent } from './components/game/shared/score-display/score-display.component';
import { WinnerDisplayComponent } from './components/game/shared/winner-display/winner-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScoreDisplayComponent,
    WinnerDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
