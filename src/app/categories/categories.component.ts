import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  constructor(private firestore:AngularFirestore){}

  onSubmit(formdata:any){
    const categorydata={
        category:formdata.value.category
    }

    this.firestore.collection('categories').add(categorydata).then(docRef=>{
      console.log(docRef)
    }).catch(err=>{
      console.log(err)
    })
  }

}
