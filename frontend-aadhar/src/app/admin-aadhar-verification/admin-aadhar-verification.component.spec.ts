import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAadharVerificationComponent } from './admin-aadhar-verification.component';

describe('AdminAadharVerificationComponent', () => {
  let component: AdminAadharVerificationComponent;
  let fixture: ComponentFixture<AdminAadharVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAadharVerificationComponent]
    });
    fixture = TestBed.createComponent(AdminAadharVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
