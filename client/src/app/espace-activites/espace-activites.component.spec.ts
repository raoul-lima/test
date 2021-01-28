import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceActivitesComponent } from './espace-activites.component';

describe('EspaceActivitesComponent', () => {
  let component: EspaceActivitesComponent;
  let fixture: ComponentFixture<EspaceActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceActivitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
