import { Component } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-conta',
  imports: [LayoutComponent, ModalComponent],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent {

}
