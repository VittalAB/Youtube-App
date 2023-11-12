import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  downloadComplete: boolean = false;

  constructor() { }

  set downloadStatus(status: boolean) {
    this.downloadComplete = status;
  }

  get downloadStatus() {
    return this.downloadComplete;
  }
}
