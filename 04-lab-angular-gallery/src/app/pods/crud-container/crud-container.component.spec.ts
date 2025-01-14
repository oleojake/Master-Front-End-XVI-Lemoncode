import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudContainerComponent } from './crud-container.component';

describe('CrudContainerComponent', () => {
  let component: CrudContainerComponent;
  let fixture: ComponentFixture<CrudContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
