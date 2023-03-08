import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  clear1 = '';
  clear2=""

  permalink?:string;

  onTitleChanged($event:any){

 const title=$event.target.value
 let permlink=title.replaceAll(' ','-')
   this.permalink=permlink

  }

}

