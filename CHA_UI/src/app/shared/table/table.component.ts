import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { TableModel } from './table.model';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
    @Input() tableModel: TableModel;
    @Output() onLazyLoad: EventEmitter<any> = new EventEmitter<any>();
    @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() selectAllChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(private changeDetector: ChangeDetectorRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.changeDetector.markForCheck();
    }

    onLazyLoading(event) {
        this.onLazyLoad.emit(event);
    }

    onSelectionChange(event) {
        this.selectionChange.emit(event);
    }

    onSelectAllChange(event) {
        this.selectAllChange.emit(event);
    }
}
