import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataStorageModel } from '../../models';

/*
    This class is responsible for storing data locally in key value pair.
    Also, this class notifies all the subscriber who are subscribed to the given key.
    It implements onDestroy interface which will destroy the subscription which this class holds.
*/
@Injectable()
export class DataStorageService implements OnDestroy {
    private dataSubject$: Subject<DataStorageModel> = new Subject<DataStorageModel>();
    private dataStorage: DataStorageModel[] = [];

    constructor() { }

    /* 
        This method adds the given input to a local variable @dataStorage.
        Before adding to this variable it checks if the value already exists.
        If value exists then this method removes the old value and add the new one.
        After this it calls the @notifySubscriber method to nofify all the subscriber.
    */
    add(data: DataStorageModel) {
        if (this.exists(data.key)) {
            const index = this.dataStorage.findIndex(s => s.key == data.key);
            this.dataStorage = this.dataStorage.splice(index, 1);
        }
        this.dataStorage.push(data);
        this.notifySubscriber(data);
    }

    /* 
        This method will return the @DataStorageModel response for a given key.
    */
    get(key: string): DataStorageModel {
        return this.dataStorage.find(s => s.key == key) || { key: '', value: '' };
    }

    /* 
        This method returns a subscription for a given key with a defined callback method with appropriate response.
    */
    subscribe(key: string, subscribe: (response: DataStorageModel) => void): Subscription {
        return this.dataSubject$.subscribe({
            next: (response: DataStorageModel) => {
                if (response.key == key) {
                    return subscribe(response);
                }
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    }

    /* 
        This method checks if the given key exists in the local variable @dataStorage
    */
    exists(key: string): boolean {
        const index = this.dataStorage.findIndex(s => s.key == key);
        return index > -1;
    }

    /* 
        This method will remove the existing values from the @dataStorage variable and will unsubscribe to @dataSubject$.
    */
    ngOnDestroy(): void {
        this.dataStorage = [];
        if (this.dataSubject$)
            this.dataSubject$.unsubscribe();
    }

    /* 
        This method will notify all the subscriber with the given response.
    */
    private notifySubscriber(data: DataStorageModel) {
        this.dataSubject$.next(data);
    }
}
