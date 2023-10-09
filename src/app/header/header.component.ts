import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isCollapsed: Boolean = true;
  userName: any;
  constructor(
    private router: Router) { 
      this.userName = localStorage.getItem('userName');
    }
  ngOnInit() {
  }

  /**
   * Purpose: logout
   */
  logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['login']);
  }
}
