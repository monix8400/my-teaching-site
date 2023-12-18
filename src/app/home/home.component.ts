import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {NewsComponent} from "../news/news.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    NewsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
