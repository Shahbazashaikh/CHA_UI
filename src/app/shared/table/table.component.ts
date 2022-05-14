import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { TableModel } from './table.model';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
    @Input() tableModel: TableModel;
    @Input() expandable: boolean;
    @Input() expandableTableModel: TableModel;
    @Output() onLazyLoad: EventEmitter<any> = new EventEmitter<any>();
    @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() selectAllChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() exportClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() rowEditClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() rowDeleteClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {

    }

    onLazyLoading(event: any) {
        this.onLazyLoad.emit(event);
    }

    onSelectionChange(event: any) {
        this.selectionChange.emit(event);
    }

    onSelectAllChange(event: any) {
        this.selectAllChange.emit(event);
    }

    onExportClick(exportType: string) {
        this.exportClick.emit(exportType);
    }

    onRowEditClick(rowData: any) {
        this.rowEditClick.emit(rowData);
    }

    onRowDeleteClick(rowData: any) {
        this.rowDeleteClick.emit(rowData);
    }
}
