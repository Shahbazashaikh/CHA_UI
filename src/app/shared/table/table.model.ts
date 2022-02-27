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
    responsiveLayout: string = 'scroll';
    resizableColumns: boolean = true;
    export: boolean = true;
    filter: boolean = true;
    globalFilterFields: string[] = [];
    isSelection: boolean;
    selectAll: boolean;
    selectedData: any[] = [];
    emptyMessage: string = 'No Records Found';
    showCurrentPageReport: boolean = true;
    currentPageReportTemplate: string = 'Showing {first} to {last} of {totalRecords} entries';
    rowsPerPageOptions: string[] = ['10', '25', '50'];
}

export interface ColumnDef {
    field: string;
    header: string;
    sortable: boolean;
    exportHeader?: string;
    filterType?: string;
    isFrozen?: boolean;
    isEditAllowed?: boolean;
    isDeleteAllowed?: boolean;
}