import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-painellayout',
  imports: [RouterLink],
  templateUrl: './painellayout.component.html',
  styleUrl: './painellayout.component.css'
})
export class PainellayoutComponent {

  onMenu:boolean=false
  handleMenuOpen=()=>{
    this.onMenu=true
  }
  handleMenuClose=()=>{
    this.onMenu=false
  }

}
