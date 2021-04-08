import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards : boolean = true;
  sp : boolean = true

  ngOnInit() {
    setTimeout(() => {
      this.cards = true;
      this.sp = false;
    }, 5000);
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
