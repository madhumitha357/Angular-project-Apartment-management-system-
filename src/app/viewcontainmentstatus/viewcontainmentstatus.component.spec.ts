import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontainmentstatusComponent } from './viewcontainmentstatus.component';

describe('ViewcontainmentstatusComponent', () => {
  let component: ViewcontainmentstatusComponent;
  let fixture: ComponentFixture<ViewcontainmentstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcontainmentstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontainmentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
