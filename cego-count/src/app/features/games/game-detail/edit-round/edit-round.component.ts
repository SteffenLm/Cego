import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../dialogdata.model';
import { AddRoundComponent } from '../add-round/add-round.component';
import { Round } from '../../shared/round.model';

@Component({
  selector: 'app-edit-round',
  templateUrl: './edit-round.component.html',
  styles: []
})
export class EditRoundComponent implements OnInit {

  public roundForm: FormGroup;
  public isCalculatingTable = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public componentData: DialogData,
    public dialogRef: MatDialogRef<AddRoundComponent, RoundDialogDTO>,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const sign: string = this.componentData.round.value < 0 ? '-' : '+';
    const value: number = Math.abs(this.componentData.round.value);
    this.roundForm = this.formBuilder.group({
      player: [this.componentData.round.player, Validators.required],
      value: [value, [Validators.required, Validators.min(1)]],
      sign: [sign, [Validators.required]]
    });
  }

  public onUpdateRoundToGame(): void {
    this.isCalculatingTable = true;
    const roundDialogDTO = new RoundDialogDTO();
    roundDialogDTO.action = 'update';
    const round = this.componentData.round;
    round.player = this.roundForm.controls.player.value;
    round.value = parseInt((this.roundForm.controls.sign.value + this.roundForm.controls.value.value), 10);
    this.dialogRef.close(roundDialogDTO);
  }

  public onDeleteGame(): void {
    const roundDialogDTO = new RoundDialogDTO();
    roundDialogDTO.action = 'delete';
    roundDialogDTO.round = this.componentData.round;
    this.dialogRef.close(roundDialogDTO);
  }

}

export class RoundDialogDTO {
  public action: 'update' | 'add' | 'delete';
  public round: Round;
}
