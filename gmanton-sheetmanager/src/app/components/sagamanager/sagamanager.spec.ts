import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sagamanager } from './sagamanager';

describe('Sagamanager', () => {
  let component: Sagamanager;
  let fixture: ComponentFixture<Sagamanager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sagamanager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sagamanager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
