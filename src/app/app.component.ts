import { Component } from '@angular/core';
import { FirebaseStorageService } from './firebase-storage.service';
import { FileItem } from './models/file-item';
import { ServiceService } from './service/service.service';
//import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ServiceService]

})
export class AppComponent {
files: FileItem[] =[];
isOverDrop =false;
carga  = '';
  constructor (
    private firebaseStorage: FirebaseStorageService,
    private readonly  service: ServiceService
  ) {}



  load(e):void{
    this.carga = e;
    
    
   }

   guarda():void{      
    this.service.carga(this.carga);
    }
  // onUpload(): void{
  //   this.service.uploadImage(this.files)   
   
  //  }

  // public archivoForm = new FormGroup({
  //   archivo: new FormControl(null, Validators.required),
  // });
  // public mensajeArchivo = 'No hay un archivo seleccionado';
  // public datosFormulario = new FormData();
  // public nombreArchivo = '';
  // public URLPublica = '';
  // public porcentaje = 0;
  // public finalizado = false;

  // //Evento que se gatilla cuando el input de tipo archivo cambia
  // public cambioArchivo(event) {
  //   if (event.target.files.length > 0) {
  //     for (let i = 0; i < event.target.files.length; i++) {
  //       this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
  //       this.nombreArchivo = event.target.files[i].name;
  //       this.datosFormulario.delete('archivo');
  //       this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
  //     }
  //   } else {
  //     this.mensajeArchivo = 'No hay un archivo seleccionado';
  //   }
  // }
 

  // //Sube el archivo a Cloud Storage
  // public subirArchivo() {
  //   let archivo = this.datosFormulario.get('archivo');
  //   let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
  //   let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

  //   //Cambia el porcentaje
  //   tarea.percentageChanges().subscribe((porcentaje) => {
  //     this.porcentaje = Math.round(porcentaje);
  //     if (this.porcentaje == 100) {
  //       this.finalizado = true;
  //     }
  //   });

  //   referencia.getDownloadURL().subscribe((URL) => {
  //     this.URLPublica = URL;
  //   });
  // }



}