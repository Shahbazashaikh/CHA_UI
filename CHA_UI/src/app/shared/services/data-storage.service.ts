import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { DataStorageModel } from '../../models';

@Injectable()
export class DataStorage {
    private dataSubject$: Subject<DataStorageModel> = new Subject<DataStorageModel>();
    private dataStorage: DataStorageModel[] = [];
    private test:Observable<any>;

    constructor() { }

    add(data: DataStorageModel) {
        const index = this.dataStorage.findIndex(s => s.key == data.key);
        if (index > -1) {
            this.dataStorage = this.dataStorage.splice(index, 1);
        }
        this.dataStorage.push(data);
        this.dataSubject$.next(data);
    }

    onDestroy() {
        if (this.dataSubject$)
            this.dataSubject$.unsubscribe();
    }
}
