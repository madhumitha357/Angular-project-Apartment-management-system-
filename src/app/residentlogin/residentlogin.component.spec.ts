import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentloginComponent } from './residentlogin.component';

describe('ResidentloginComponent', () => {
  let component: ResidentloginComponent;
  let fixture: ComponentFixture<ResidentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
