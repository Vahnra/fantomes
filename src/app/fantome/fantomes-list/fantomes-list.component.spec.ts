import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantomesListComponent } from './fantomes-list.component';

describe('FantomesListComponent', () => {
  let component: FantomesListComponent;
  let fixture: ComponentFixture<FantomesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantomesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FantomesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
