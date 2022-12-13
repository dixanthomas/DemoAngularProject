import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChildBComponent } from './routing-child-b.component';

describe('RoutingChildBComponent', () => {
  let component: RoutingChildBComponent;
  let fixture: ComponentFixture<RoutingChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingChildBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
