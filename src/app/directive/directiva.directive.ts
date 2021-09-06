import { Directive, Input, Output,EventEmitter, HostListener } from '@angular/core';
import { ImageValidator } from '../models/helpers/image-validator';
import { FileItem } from '../models/file-item';


@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective extends ImageValidator{


  @Input()files: FileItem[] =[];
  @Output()mouseOver: EventEmitter<boolean> = new EventEmitter();


  @HostListener('dragover',['$event'])
  onDragEnter(event:any){
    this.preventAndStop(event);
    this.mouseOver.emit(true);
  }
  @HostListener('dragleave',['$event'])
  onDragLeave(){    
    this.mouseOver.emit(false);
  }

  @HostListener('drop',['$event'])
  onDrop(event: any){    
    const dataTransfer = this.getDataTranfer(event);
    if(!dataTransfer){
      return ;
    }
    this.preventAndStop(event);
    this.extracFiles(dataTransfer.files);    
    this.mouseOver.emit(false);
  }

private getDataTranfer(event:any){
  return event.dataTransfer
        ? event.dataTransfer:
        event.originalEvent.dataTransfer ;

}

private extracFiles(files: FileList):void{
  for(const poperty in Object.getOwnPropertyNames(files)){
    const tempFile = files[poperty];
    if(this.canBeUpload(tempFile)){
      const newFile = new FileItem(tempFile);
      this.files.push(newFile);

    }
  }
}

private canBeUpload(file:File):boolean  {
  if(
    !this.checkDropped(file.name,this.files)
     && this.validateType(file.type)){
      return true;
  }else{
  return false;
  }
}
private preventAndStop(event:any):void {
  event.preventDefault();
  event.stopPropagation();
}

}
