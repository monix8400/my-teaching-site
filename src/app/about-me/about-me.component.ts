import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  redirect(url:string) {
    window.location.href = url;
  }
}
