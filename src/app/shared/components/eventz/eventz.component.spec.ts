import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventzComponent } from './eventz.component';

describe('EventzComponent', () => {
  let component: EventzComponent;
  let fixture: ComponentFixture<EventzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
