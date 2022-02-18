import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
    private _mobileQueryListener: () => void;
    mobileQuery: MediaQueryList;
    fillerNav:string[]=[];

    constructor(private changeDetector: ChangeDetectorRef,
        private media: MediaMatcher) { }

    ngOnInit(): void {
        this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => this.changeDetector.detectChanges();
        this.mobileQuery.addListener(() => { });
        this.fillerNav.push('Menu1');
        this.fillerNav.push('Menu2');
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
