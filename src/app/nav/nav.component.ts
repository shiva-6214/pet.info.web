import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  per : number;

  ShowSpinner : boolean = true;
  ShowSpinnerin : boolean = false;
  isDarkTheme: boolean = false;
  icon : boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public loaderService: LoaderService, private snackBar : MatSnackBar) {}


  ngOnInit() {

    setTimeout(() => {
      this.ShowSpinner = false;

      this.ShowSpinnerin = true;

      setTimeout(() => {
        this.ShowSpinnerin = false;
      }, 4000);

      let snackBarRef =  this.snackBar.open('Data retrieved!', 'Dismiss' , {duration: 4000});

        snackBarRef.afterDismissed().subscribe(() => {
          console.log('Snackbar was dismissed');
        });

        snackBarRef.onAction().subscribe(() => {
          console.log('Snackbar was triggered');
        });

    }, 3000);

    let snackBarRef =  this.snackBar.open('Retrieving Data from the server...', 'Dismiss' , {duration: 4000});

      snackBarRef.afterDismissed().subscribe(() => {
        console.log('Snackbar was dismissed');
      });

      snackBarRef.onAction().subscribe(() => {
        console.log('Snackbar was triggered');
      });

    
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;

  }
  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme?"Dark":"Light");
  }

  //snackbar

  
}
