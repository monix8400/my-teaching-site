import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'wp',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './wp-class.component.html',
  styleUrl: './wp-class.component.scss'
})
export class WpClassComponent {
  timetableLink = "https://www.cs.ubbcluj.ro/files/orar/2022-2/disc/MLG5015.html";
  syllabus="https://www.cs.ubbcluj.ro/files/curricula/2022/syllabus/IG_sem4_MLG5015_de_sanda_2022_6761.pdf";
}
