import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAlertComponent } from './comments-alert.component';

describe('CommentsAlertComponent', () => {
  let component: CommentsAlertComponent;
  let fixture: ComponentFixture<CommentsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
