import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Agrega estos módulos
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule,BUCKET } from '@angular/fire/storage';
import { environment } from '../environments/environment';
//Formularios
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DirectivaDirective } from './directive/directiva.directive';
import { CargaComponent } from './pages/carga/carga.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaDirective,
    
    CargaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: BUCKET, useValue: 'gs://subir-imagen-8c9ef.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }