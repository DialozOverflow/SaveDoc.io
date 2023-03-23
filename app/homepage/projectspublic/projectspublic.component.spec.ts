import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectspublicComponent } from './projectspublic.component';

describe('ProjectspublicComponent', () => {
  let component: ProjectspublicComponent;
  let fixture: ComponentFixture<ProjectspublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectspublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectspublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
