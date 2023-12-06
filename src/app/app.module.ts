import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BaniereComponent } from './baniere/baniere.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ComptageComponent } from './comptage/comptage.component';
import { ClassificationComponent } from './classification/classification.component';
import { GalerieComponent } from './galerie/galerie.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BaniereComponent,
    PresentationComponent,
    ComptageComponent,
    ClassificationComponent,
    GalerieComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
