import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventzDisplayComponent } from './eventz-display.component';

describe('EventzDisplayComponent', () => {
  let component: EventzDisplayComponent;
  let fixture: ComponentFixture<EventzDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventzDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventzDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
