import { FileItem } from '../file-item';
export class ImageValidator{

    private acceptType =['image/jpeg', 'image/png'];


    validateType(fileType:string):boolean{
        return fileType === '' || fileType === undefined
        ?false
        :this.acceptType.includes(fileType);
    }


    checkDropped(filename:string, files: FileItem[]){
        for (const file of files) {
            if(file.name === filename)            {
                return true;
            }

        }
        return false;
    }
}