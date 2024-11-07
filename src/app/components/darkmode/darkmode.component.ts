import { Component } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css'],
})
export class DarkmodeComponent {
  isdark = false;

  togglebackground() {
    this.isdark = !this.isdark;
    document.documentElement.classList.toggle('dark', this.isdark);
  }
}
