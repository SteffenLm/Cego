import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RootMaterialModule } from '../../modules/root-material.module';
import { ToolbarActions } from './toolbar.actions';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let mockStore: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [RootMaterialModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.inject(MockStore);
    dispatchSpy = spyOn(mockStore, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the home button gets clicked', () => {
    beforeEach(() => {
      component.onHomeClick();
    });
    it('should dispatch the home clicked actions', () => {
      expect(dispatchSpy).toHaveBeenCalledWith(ToolbarActions.homeClicked());
    });
  });

  describe('when the settings button gets clicked', () => {
    beforeEach(() => {
      component.onSettingsClick();
    });
    it('should dispatch the home clicked actions', () => {
      expect(dispatchSpy).toHaveBeenCalledWith(
        ToolbarActions.settingsClicked()
      );
    });
  });
});
