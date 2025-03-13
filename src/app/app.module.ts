import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoconcursoComponent } from './pages/painel/novoconcurso/novoconcurso.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,NovoconcursoComponent,BrowserModule,FormsModule,BrowserAnimationsModule
  ],

})
export class AppModule { }
