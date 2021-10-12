import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintopheaderComponent } from './admintopheader.component';

describe('AdmintopheaderComponent', () => {
  let component: AdmintopheaderComponent;
  let fixture: ComponentFixture<AdmintopheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintopheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintopheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
