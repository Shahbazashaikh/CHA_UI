export class TableModel {
    columns: ColumnDef[] = [];
    data: any[] = [];
    dataKey?: string;
    reorderableColumns?: boolean;
    lazy?: boolean;
    paginator?: boolean;
    loading?: boolean;
    rows?: number;
    totalRecords?: number;
    virtualScroll?: boolean;
    virtualRowHeight?: number;
    scrollable?: boolean;
    scrollHeight?: string;
    scrollDirection?: string;
    sortMode?: string;
    rowGroupMode?: string;
    groupRowsBy?: string;
    responsiveLayout?: string;
    resizableColumns?: boolean;
    export?: boolean;
    filter?: boolean;
    globalFilterFields?: string[] = [];
    isSelection?: boolean;
    selectAll?: boolean;
    selectedData: any[] = [];
    emptyMessage?: string;
}

export interface ColumnDef {
    field: string;
    header: string;
    sortable?: boolean;
    exportHeader?: string;
    filterType?: string;
    isFrozen?: boolean;
}