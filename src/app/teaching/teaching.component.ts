import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'teaching',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    NgOptimizedImage,
    MatSidenavModule
  ],
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.scss'
})
export class TeachingComponent {

}
