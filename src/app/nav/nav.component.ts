import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  ShowSpinner : boolean = true;
  isDarkTheme: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public loaderService: LoaderService) {}

  ngOnInit() {

    setTimeout(() => {
      this.ShowSpinner = false;
      this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
    }, 2000);
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme?"Dark":"Light");
  }

}
