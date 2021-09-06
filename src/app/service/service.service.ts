import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileItem } from '../models/file-item';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable()

export class ServiceService {
  private MEDIA_STRAGE_PARTH = 'imagen';
  constructor(private readonly storage: AngularFireStorage) { }

 uploadImage(images: FileItem[] ){
    for(const item of images){
      item.uploadibg = true;
      const filePAth = this.generateFileName(item.name);
      const fileRef = this.storage.ref(filePAth);
      const tarea = this.storage.upload(filePAth, item.file);
      
      
      
      item.uploadPercent = tarea.percentageChanges();
      tarea.snapshotChanges().pipe(
        finalize(()=>{          
                item.dowlandURL= fileRef.getDownloadURL();     
                fileRef.getDownloadURL().toPromise().then(e=>console.log(e));                              
                item.uploadibg = false;
              })
            ).subscribe()
    }
  }

  private generateFileName(name: string): string{
    return `${this.MEDIA_STRAGE_PARTH}/${new Date().getTime()}_${name}`
  }
  urlImage: Observable<string>;
  public carga(e){
    const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath   = `carga/${file.name}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath,file);
      task.snapshotChanges().pipe(
        finalize(()=>this.urlImage = ref.getDownloadURL()))
        .subscribe() 
  }
}
