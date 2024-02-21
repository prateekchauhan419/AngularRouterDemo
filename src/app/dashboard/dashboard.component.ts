import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  dataObject:any;

constructor(private router:Router){
  let nav: Navigation|null = this.router.getCurrentNavigation();
debugger;
console.log(nav);
    if (nav?.extras && nav.extras.state && nav.extras.state) {
      this.dataObject = nav.extras.state['dataObject'] ;

    }
}

ngOnInit(): void {
  
}
}
