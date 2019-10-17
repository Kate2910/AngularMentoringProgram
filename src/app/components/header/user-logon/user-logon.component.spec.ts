import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogonComponent } from './user-logon.component';

describe('UserLogonComponent', () => {
  let component: UserLogonComponent;
  let fixture: ComponentFixture<UserLogonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
