import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Router} from "@angular/router";

@Component({
  selector: 'all-classes',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    ToolbarComponent,
    MatToolbarModule
  ],
  templateUrl: './all-classes.component.html',
  styleUrl: './all-classes.component.scss'
})
export class AllClassesComponent {

  constructor(private router: Router){
  }

  goTo(url:string) {
    this.router.navigateByUrl(url);
  }

}
