import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagaManagerHomepage } from './homepage';

describe('Homepage', () => {
  let component: SagaManagerHomepage;
  let fixture: ComponentFixture<SagaManagerHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SagaManagerHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SagaManagerHomepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
