import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowresidentsComponent } from './showresidents.component';

describe('ShowresidentsComponent', () => {
  let component: ShowresidentsComponent;
  let fixture: ComponentFixture<ShowresidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowresidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowresidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
