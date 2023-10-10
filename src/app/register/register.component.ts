import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nama = 'Albert Chrishansen';
  nim = '212102386';

  constructor(private renderer: Renderer2){
    this.renderer.addClass(document.body, "register-page");
  }

  ngOnInit(): void{

  }
}
