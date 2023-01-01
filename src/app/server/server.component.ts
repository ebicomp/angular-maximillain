import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
changeStatusOfButton() {
this.allowNewServer = !this.allowNewServer;
}
  allowNewServer = false;

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 10000);
  }

}
