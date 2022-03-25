import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateGameComponent } from '../../create-game/components/create-game/create-game.component';
import { Dialog } from '../model/dialog.enum';
import { GameDialogModule } from '../game-dialog.module';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { filter, take, takeUntil, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CreateGameActions } from '../../create-game/components/create-game/create-game.actions';

@Injectable()
export class GameDialogService {
  constructor(
    private readonly matDialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    private readonly store: Store
  ) {
    this.addGlobalDialogStyles();
  }

  public openDialog(dialog: Dialog): void {
    if (this.dialogIsNotOpen(dialog)) {
      this.closeExistingDialogs();
      this.openNewDialog(dialog);
    }
  }

  private openNewDialog(dialog: Dialog) {
    const dialogRef = this.matDialog.open(CreateGameComponent, {
      id: dialog,
      disableClose: true,
    });

    dialogRef
      .backdropClick()
      .pipe(takeUntil(dialogRef.afterClosed()))
      .subscribe(() => {
        this.store.dispatch(CreateGameActions.backdropClicked());
      });

    dialogRef
      .keydownEvents()
      .pipe(
        filter((keyboardEvent) => keyboardEvent.code === 'Escape'),
        takeUntil(dialogRef.afterClosed())
      )
      .subscribe(() => {
        this.store.dispatch(CreateGameActions.escapeKeyPressed());
      });
  }

  public closeDialog(dialog: Dialog): void {
    this.matDialog.getDialogById(dialog)?.close();
  }

  private dialogIsNotOpen(dialog: Dialog): boolean {
    return !this.matDialog.getDialogById(dialog);
  }

  private closeExistingDialogs(): void {
    this.matDialog.closeAll();
  }

  private addGlobalDialogStyles(): void {
    const dialogIdSelector = Object.values(Dialog)
      .map((dialogId) => `#${dialogId}`)
      .join(',');
    const style = `${dialogIdSelector} {padding: 0;}`;
    const tag = this.document.createElement('style');
    tag.innerText = style;
    this.document.querySelector('head')?.appendChild(tag);
  }
}
