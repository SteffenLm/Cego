import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogData } from '../dialogdata.model';
import { Round } from '../../../model/round.model';

@Component({
  selector: 'app-add-round',
  templateUrl: './add-round.component.html',
  styles: [],
})
export class AddRoundComponent implements OnInit {
  public isCalculatingTable = false;
  public roundForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public componentData: DialogData,
    public dialogRef: MatDialogRef<AddRoundComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.roundForm = this.formBuilder.group({
      player: ['', Validators.required],
      value: ['10', [Validators.required, Validators.min(1)]],
      sign: ['', [Validators.required]],
    });
  }

  public onAddRoundToGame(): void {
    this.isCalculatingTable = true;
    const newRound = new Round();
    newRound.created = new Date();
    newRound.player = this.roundForm.controls.player.value;
    newRound.value = parseInt(
      this.roundForm.controls.sign.value + this.roundForm.controls.value.value,
      10
    );
    this.dialogRef.close(newRound);
  }
}
