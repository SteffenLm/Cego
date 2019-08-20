import { Subject } from 'rxjs';

export class MainService {

  private menuClicked = new Subject<null>();
  public menuClicked$ = this.menuClicked.asObservable();

  constructor() { }

  public clickMenu(): void {
    this.menuClicked.next();
  }
}
