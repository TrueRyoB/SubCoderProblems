import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemCatalog } from './problem-catalog';

describe('ProblemCatalog', () => {
  let component: ProblemCatalog;
  let fixture: ComponentFixture<ProblemCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
