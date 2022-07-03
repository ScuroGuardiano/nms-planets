import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingOverlayWrapperComponent } from './loading-overlay-wrapper.component';

describe('LoadingOverlayWrapperComponent', () => {
  let component: LoadingOverlayWrapperComponent;
  let fixture: ComponentFixture<LoadingOverlayWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingOverlayWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingOverlayWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
