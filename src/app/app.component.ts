import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ref:AngularFireStorageReference;
  task:any
  id:any
  uploadProgress:Number;
  downloadURL:string
  number:BigInteger
  constructor(private afStorage: AngularFireStorage){


  }
  
  upload(event) {
    const randomId = Math.random().toString(36).substring(2);
    this.id=randomId
  this.ref = this.afStorage.ref(randomId);
  this.task = this.ref.put(event.target.files[0]);
  this.uploadProgress = this.task.percentageChanges();
 
} 

getImage(){
  
  this.ref = this.afStorage.ref(this.id);
  this.ref.getDownloadURL().subscribe(res=>{
    this.downloadURL=res
    console.log(this.downloadURL)
  })
}
  
}
