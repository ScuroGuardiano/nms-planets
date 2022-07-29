import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyListComponent } from './galaxy-list.component';

describe('GalaxyListComponent', () => {
  let component: GalaxyListComponent;
  let fixture: ComponentFixture<GalaxyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaxyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
