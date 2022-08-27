import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormCellComponent } from './edit-form-cell.component';

describe('EditFormCellComponent', () => {
  let component: EditFormCellComponent;
  let fixture: ComponentFixture<EditFormCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
