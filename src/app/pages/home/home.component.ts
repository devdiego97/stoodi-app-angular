import { Component } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [LayoutComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
