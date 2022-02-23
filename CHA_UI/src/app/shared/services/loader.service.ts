import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { DataStorageKeys } from '../../models';

@Injectable()
export class LoaderService {

    constructor(private dataStorage: DataStorageService) { }

    showLoader() {
        this.dataStorage.add({ key: DataStorageKeys.ShowLoader, value: true });
    }

    hideLoader() {
        this.dataStorage.add({ key: DataStorageKeys.ShowLoader, value: false });
    }
}
