import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSceneComponent } from './dashboard-scene.component';

describe('DashboardSceneComponent', () => {
  let component: DashboardSceneComponent;
  let fixture: ComponentFixture<DashboardSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
