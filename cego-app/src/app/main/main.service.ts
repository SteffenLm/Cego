import { Subject } from 'rxjs';

export class MainService {

  private menuClicked = new Subject<null>();
  public menuClicked$ = this.menuClicked.asObservable();

  private loadingIndicator = new Subject<boolean>();
  public loadingIndicator$ = this.loadingIndicator.asObservable();

  constructor() { }

  public clickMenu(): void {
    this.menuClicked.next();
  }

  public startLoading(): void {
    this.loadingIndicator.next(true);
  }

  public endLoading(): void {
    this.loadingIndicator.next(false);
  }
}
