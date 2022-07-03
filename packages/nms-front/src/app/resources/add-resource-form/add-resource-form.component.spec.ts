import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceFormComponent } from './add-resource-form.component';

describe('AddResourceFormComponent', () => {
  let component: AddResourceFormComponent;
  let fixture: ComponentFixture<AddResourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResourceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
