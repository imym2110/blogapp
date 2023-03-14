import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent {
  blogdetails:any[]=[];
  public addblogform: FormGroup;
  name: any = "";
  email: any = "";
  description: any = "";
  id: any

  constructor(private detail: FormBuilder) {
    this.addblogform = this.detail.group({
      name: '',
      email: '',
      description: ''
    });
  }
   setValue() {}
  onSubmit(): void {
    console.log('Your details have been submitted', this.addblogform.value);
    this.blogdetails.push(this.addblogform.value)
    console.log('this.blogdetails',this.blogdetails)
    this.addblogform.reset();
  }

  remove(id: any) {
    let index = this.blogdetails.findIndex(e => e.id === id);
      this.blogdetails.splice(index,1);
  }
}
