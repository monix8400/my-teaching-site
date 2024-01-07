import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'awd',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './awd-class.component.html',
  styleUrl: './awd-class.component.scss'
})
export class AwdClassComponent {

}
