import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkuserComponent } from './okuser.component';

describe('OkuserComponent', () => {
  let component: OkuserComponent;
  let fixture: ComponentFixture<OkuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
