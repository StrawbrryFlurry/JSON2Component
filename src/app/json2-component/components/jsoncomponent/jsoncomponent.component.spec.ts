import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONComponentComponent } from './jsoncomponent.component';

describe('JSONComponentComponent', () => {
  let component: JSONComponentComponent;
  let fixture: ComponentFixture<JSONComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
