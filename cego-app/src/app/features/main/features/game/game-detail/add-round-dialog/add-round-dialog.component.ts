import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from 'src/app/features/main/shared/models/player.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-round-dialog',
  templateUrl: './add-round-dialog.component.html',
  styleUrls: ['./add-round-dialog.component.scss']
})
export class AddRoundDialogComponent implements OnInit {

  public isDoingRequest = false;

  constructor(@Inject(MAT_DIALOG_DATA) public players: Player[], private http: HttpClient) { }

  public ngOnInit(): void {

  }

  public onAddRoundToGame(): void {
    this.isDoingRequest = true;
  }

}
