import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.remove('d-none');
  }

  closeMobileNavbar() {
    document.getElementById('mobileNavbarContent').classList.add('d-none');
  }

  openHome() { 
    this.closeMobileNavbar();
  }

  openAbout() { 
    this.closeMobileNavbar();
  }

  openProjects() {
    this.closeMobileNavbar();
  }
}

