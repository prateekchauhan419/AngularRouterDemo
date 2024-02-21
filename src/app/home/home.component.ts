import { Component, OnInit } from '@angular/core';
import {Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private router:Router){

  }

ngOnInit(): void {

}

goToDashboard(){
  let route = 'dashboard';
  this.router.navigate([route], { state: { dataObject: "comming from home" } });
}

}
