import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'awd',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './awd-class.component.html',
  styleUrl: './awd-class.component.scss'
})
export class AwdClassComponent {
  timetableLink = "https://www.cs.ubbcluj.ro/files/orar/2023-1/disc/MME8120.html";
  syllabus="https://www.cs.ubbcluj.ro/files/curricula/2023/syllabus/BD_sem3_MME8120_en_sanda_2023_8353.pdf";
}
