import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateContainerComponent } from './rotate-container.component';

describe('RotateContainerComponent', () => {
  let component: RotateContainerComponent;
  let fixture: ComponentFixture<RotateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotateContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
