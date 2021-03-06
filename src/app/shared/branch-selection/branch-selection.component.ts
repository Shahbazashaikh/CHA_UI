import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchSelectionModel } from './branch-selection.model';
import { DataStorageService } from '../services';
import { DataStorageKeys } from '../../models';

@Component({
    selector: 'app-branch-selection',
    templateUrl: './branch-selection.component.html',
    styleUrls: ['./branch-selection.component.scss']
})
export class BranchSelectionComponent implements OnInit {
    model: BranchSelectionModel = new BranchSelectionModel();
    currentYear: number = 0;

    constructor(private router: Router,
        private dataStorage: DataStorageService) { }

    ngOnInit(): void {
        this.currentYear = new Date().getFullYear();
        this.model.branches = [
            'Thane Branch',
            'Belapur CBD Branch'
        ];
        this.model.financialYears = [
            '2021 - 2022',
            '2020 - 2021',
            '2019 - 2020'
        ];
    }

    onNextClick() {
        if (!this.isValid())
            return;
        this.dataStorage.add({ key: DataStorageKeys.ShowMenu, value: true });
        this.router.navigateByUrl('dashboard');
    }

    isValid(): boolean {
        return this.model.selectedBranch != '' && this.model.selectedfinancialYear != '';
    }
}
