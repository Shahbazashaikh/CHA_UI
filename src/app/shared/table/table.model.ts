export class TableModel {
    columns: ColumnDef[] = [];
    data: any[] = [];
    dataKey: string;
    reorderableColumns: boolean = true;
    lazy: boolean = false;
    paginator: boolean = true;
    loading: boolean = false;
    rows: number;
    totalRecords: number;
    virtualScroll: boolean;
    virtualRowHeight: number;
    scrollable: boolean;
    scrollHeight: string;
    scrollDirection: string;
    sortMode: string = 'single';
    rowGroupMode: string;
    groupRowsBy: string;
    responsiveLayout: string = 'stack';
    resizableColumns: boolean = true;
    export: boolean = true;
    filter: boolean = true;
    globalFilterFields: string[] = [];
    isSelection: boolean;
    selectAll: boolean;
    selectedData: any[] = [];
    emptyMessage: string = 'No Records Found';
}

export interface ColumnDef {
    field: string;
    header: string;
    sortable: boolean;
    exportHeader: string;
    filterType: string;
    isFrozen: boolean;
}