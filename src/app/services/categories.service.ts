import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  saveData(data: any, formdata: any) {
    this.firestore
      .collection('categories')
      .add(data)
      .then((docRef) => {
        this.toastr.success('Data insert Successfully ..!');
        formdata.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logdata() {
    return this.firestore
      .collection('categories')
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }
}
