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
  imgsrc:any='https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'

  onTitleChanged($event:any){

 const title=$event.target.value
 let permlink=title.replaceAll(' ','-')
   this.permalink=permlink

  }

  showPreview($event:any){

    const reader= new FileReader()
    reader.onload=(e)=>{
    this.imgsrc=e.target?.result
    console.log(e)
    }
     reader.readAsDataURL($event.target.files[0])

  }

}

