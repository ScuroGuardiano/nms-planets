import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyRowComponent } from './galaxy-row.component';

describe('GalaxyRowComponent', () => {
  let component: GalaxyRowComponent;
  let fixture: ComponentFixture<GalaxyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaxyRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
