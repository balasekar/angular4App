import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean;


  constructor(private dataService: DataService) {
    console.log('Constructor ran....');
   }

  ngOnInit() {
    console.log('On ng Init ....');
    this.name='John Doe';
    this.age=30;
    this.email='bala@gmail.com'
    this.address = {
      street: '50 Main St',
      city:'Rakoon',
      state:'MA'
    }
    this.hobbies=['write code', 'watch movies'];
    this.hello=1;
    this.dataService.getPosts().subscribe((posts)=> {
      console.log( posts);
      this.posts=posts;
    })
  }

  onClick(){
    console.log('Hello ...');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  toggleIsEdit(){
    this.isEdit = !this.isEdit;
  }

  deleteHobby(hobby){
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
}

interface Address {
    street:string,
    city:string,
    state:string
}

interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}