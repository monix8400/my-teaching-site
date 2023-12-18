import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Router} from "@angular/router";

@Component({
  selector: 'toolbar',
  standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule
    ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  title = 'Șoaita Monica';

  constructor(private router: Router){
  }

  goTo(url:string) {
    this.router.navigateByUrl(url);
  }
}
