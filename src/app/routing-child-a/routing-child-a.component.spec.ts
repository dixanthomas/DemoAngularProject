import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChildAComponent } from './routing-child-a.component';

describe('RoutingChildAComponent', () => {
  let component: RoutingChildAComponent;
  let fixture: ComponentFixture<RoutingChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingChildAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
