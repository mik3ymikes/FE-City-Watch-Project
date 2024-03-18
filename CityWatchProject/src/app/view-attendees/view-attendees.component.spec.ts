import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendeesComponent } from './view-attendees.component';

describe('ViewAttendeesComponent', () => {
  let component: ViewAttendeesComponent;
  let fixture: ComponentFixture<ViewAttendeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAttendeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
