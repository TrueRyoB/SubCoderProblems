import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemItem } from './problem-item';

describe('ProblemItem', () => {
  let component: ProblemItem;
  let fixture: ComponentFixture<ProblemItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
