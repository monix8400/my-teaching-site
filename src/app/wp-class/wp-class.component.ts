import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'wp',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './wp-class.component.html',
  styleUrl: './wp-class.component.scss'
})
export class WpClassComponent {

}
