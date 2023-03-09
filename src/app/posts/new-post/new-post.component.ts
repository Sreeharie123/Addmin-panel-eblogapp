import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  clear1 = '';
  clear2 = '';

  postForm?: any;

  constructor(
    private categoryService: CategoriesService,
    private fb: FormBuilder
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      permalink: ['', Validators.required],
      except: ['', [Validators.required, Validators.minLength(50)]],
      categories: ['', Validators.required],
      postimg: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  categories?: any[];

  ngOnInit(): void {
    this.categoryService.logdata().subscribe((value) => {
      this.categories = value;
    });
  }

  get fc(){

    return this.postForm.controls

  }

  permalink?: string;
  imgsrc: any =
    'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
  selectedImg: any;

  onTitleChanged($event: any) {
    const title = $event.target.value;
    let permlink = title.replaceAll(' ', '-');
    this.permalink = permlink;
  }

  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgsrc = e.target?.result;
      console.log(e);
    };
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }
}
