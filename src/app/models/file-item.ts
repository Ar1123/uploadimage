import { Observable } from "rxjs";

export class FileItem{

    public name: string;
    public uploadibg: boolean;
    public uploadPercent: Observable<number>;
    public dowlandURL: Observable<string>;

    constructor(public file: File = file){
           this.name  = file.name; 
           this.uploadibg = false;
    }
}