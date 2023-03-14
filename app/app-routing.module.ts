import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from './addblog/addblog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'add', component: AddblogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ReadmoreComponent },
  { path: 'list', component: ListComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
