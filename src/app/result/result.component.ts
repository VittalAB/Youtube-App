import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DownloadService } from 'services/download.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  mp4FileExists : boolean = false;
  response : any;


  constructor(private http: HttpClient, private dService: DownloadService) {
    this.checkForMP4File();
  }


  set res(res : any){
    this.response = res;
  }


  checkForMP4File() {

    this.mp4FileExists = this.dService.downloadStatus;
    
    try {
      setTimeout(() => {
        this.checkForMP4File();
      }, 1000); 
      } catch (error) {    
      }
  }


}


