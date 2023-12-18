import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {GoogleMapsModule} from "@angular/google-maps";

@Component({
  selector: 'contact',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    NgOptimizedImage,
    GoogleMapsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email:string = `maria.soaita@stud.ubbcluj.ro`;
  address:string= 'Campus 406, Teodor Mihali Street, No.58-60, Cluj Napoca, Romania';
}
