import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

    constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>) { }

    onConfirmClick() {
        this.dialogRef.close(true);
    }
}