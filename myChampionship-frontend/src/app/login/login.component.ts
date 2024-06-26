import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private services: ApiService
  ) {
    this.services.postLogin('teste', 'testedasda').subscribe((response:any)=>{
      debugger
    })
  }
}
