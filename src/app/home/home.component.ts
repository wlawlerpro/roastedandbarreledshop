import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title = 'Welcome to Roasted and Barreled Shop';
	mainMenu = true;
	name = 'Wes Lawler'; 
	address= 'wes.lawler2@gmail.com';
	phone ='502 938 5281' 
  
 

 
      
  constructor(  ) { }

  ngOnInit() {
  
  }

}
