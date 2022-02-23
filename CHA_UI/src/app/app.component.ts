import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from './shared/services';
import { DataStorageModel, DataStorageKeys } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'CHA_UI';
  isLoaderVisible: boolean = false;
  isNavigationVisible: boolean = false;
  dataStorageLoaderSubscription: Subscription;
  dataStorageNavigationSubscription: Subscription;


  constructor(private dataStorage: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageLoaderSubscription = this.dataStorage.subscribe(DataStorageKeys.ShowLoader, (response: DataStorageModel) => {
      if (response) {
        this.isLoaderVisible = response.value;
      }
    });
    this.dataStorageNavigationSubscription = this.dataStorage.subscribe(DataStorageKeys.ShowMenu, (response: DataStorageModel) => {
      if (response) {
        this.isNavigationVisible = response.value;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.dataStorageLoaderSubscription) {
      this.dataStorageLoaderSubscription.unsubscribe();
    }
    if (this.dataStorageNavigationSubscription) {
      this.dataStorageNavigationSubscription.unsubscribe();
    }
  }
}
