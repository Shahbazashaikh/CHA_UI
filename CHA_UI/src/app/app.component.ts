import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CHA_UI';
  isLoaderVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isNavigationVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.isLoaderVisible$ = this.loaderService.isLoaderVisible();
    this.isNavigationVisible$ = this.loaderService.isNavigationVisible();
  }
}
