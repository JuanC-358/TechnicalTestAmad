import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, MatMenuModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(
    private readonly router: Router
  ) { }
  newRecord(): void {
    this.router.navigate(['create']);
  }
  seeRecord(): void {
    this.router.navigate(['read']);
  }
}
