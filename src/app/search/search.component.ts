import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  /** Based on the screen size, switch from standard to one column per row */
  panelOpenState = false;

  constructor(private breakpointObserver: BreakpointObserver) {}
}
