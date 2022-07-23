import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGalaxyFormComponent } from './add-galaxy-form.component';

describe('AddGalaxyFormComponent', () => {
  let component: AddGalaxyFormComponent;
  let fixture: ComponentFixture<AddGalaxyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGalaxyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalaxyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
