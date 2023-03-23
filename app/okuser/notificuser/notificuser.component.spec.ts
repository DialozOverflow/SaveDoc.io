import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificuserComponent } from './notificuser.component';

describe('NotificuserComponent', () => {
  let component: NotificuserComponent;
  let fixture: ComponentFixture<NotificuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
