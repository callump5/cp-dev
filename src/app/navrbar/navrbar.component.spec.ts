import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavrbarComponent } from './navrbar.component';

describe('NavrbarComponent', () => {
  let component: NavrbarComponent;
  let fixture: ComponentFixture<NavrbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavrbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavrbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
