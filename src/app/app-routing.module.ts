import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';

const routes: Routes = [
  {path:'',component:DashbordComponent},
  {path:'category',component:CategoriesComponent},

  {path:"post",component:AllPostComponent},
  {path:"post/new",component:NewPostComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
