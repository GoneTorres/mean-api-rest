import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
public url: string;

  constructor() {
    this.url = Global.url;
   }

   makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string)
   {
     return new Promise(
       (resolve, reject) => {
         const formData: any = new FormData();
         const request = new XMLHttpRequest();

         for (let i = 0; i < files.length; i++) {
           formData.append(name, files[i], files[i].name);
         }

         request.onreadystatechange = () => {
           if (request.readyState === 4) {
             if (request.status === 200) {
               resolve(JSON.parse(request.response));
             }

             else {
               reject(request.response);
             }
           }
         };
         request.open('POST', url, true);
         request.send(formData);
       }
     );
   }
}
