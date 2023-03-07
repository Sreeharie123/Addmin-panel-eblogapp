import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoriesService) {}

  categoryArray?:any

  ngOnInit(): void {
    this.categoryService.logdata().subscribe((data) => {
      this.categoryArray=data
      console.log(this.categoryArray)

    });
  }

  onSubmit(formdata: any) {
    const categorydata: Category = {
      category: formdata.value.category,
    };
    this.categoryService.saveData(categorydata, formdata);
  }
}
















// const subCategorydata = {
//   subCategory: 'subCategory1',
// };

// this.firestore.collection('categories').add(categorydata).then((docRef) => {
//   console.log(docRef);

//   // this.firestore.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategorydata)
//     this.firestore.collection('categories').doc(docRef.id).collection('subcategories').add(subCategorydata).then(docref1=>{
//       console.log(docref1)
//     //  this.firestore.doc(`categories/${docRef.id}/subcategories/${docref1.id}`).collection("subsubcategory ").add(subCategorydata ).then(docref2=>{
//     //   console.log(docref2)
//     // })
//     this.firestore.collection('categories').doc(docRef.id).collection('subcategories').doc(docref1.id).collection('subsubcategories').add(subCategorydata).then((docRef2)=>{
//       console.log("Second level subcategory saved successfully")
//     })
//     // this.firestore.doc(`categories/${docRef.id}/subcategories/${docref1.id}/subsubcategory`).collection("subsubcategory ").add(subCategorydata ).then(docref2=>{
//     //   console.log(docref2)
//     // })

//     });

//   }).catch((err) => {
//     console.log(err);
//   });
