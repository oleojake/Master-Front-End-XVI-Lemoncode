import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateSceneComponent } from './rotate-scene.component';

describe('RotateSceneComponent', () => {
  let component: RotateSceneComponent;
  let fixture: ComponentFixture<RotateSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotateSceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotateSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
