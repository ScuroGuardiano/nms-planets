import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceRowComponent } from './resource-row.component';

describe('ResourceRowComponent', () => {
  let component: ResourceRowComponent;
  let fixture: ComponentFixture<ResourceRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
