import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeaderComponent } from './header/header.component';
import { MovieImageComponent } from './movie-image/movie-image.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    HeaderComponent,
    MovieImageComponent,
    MovieDescriptionComponent,
    MovieInfoComponent,
    SearchBarComponent,
    MovieInfoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
