import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProfile } from './ad-profile';

describe('AdProfile', () => {
  let component: AdProfile;
  let fixture: ComponentFixture<AdProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
