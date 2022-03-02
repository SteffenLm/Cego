import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-round',
  templateUrl: './delete-round.component.html',
  styles: []
})
export class DeleteRoundComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: string,
    public dialogRef: MatDialogRef<DeleteRoundComponent>) { }

  ngOnInit(): void {
  }

}
