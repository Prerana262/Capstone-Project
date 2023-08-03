import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAadharApproveComponent } from './admin-aadhar-approve.component';

describe('AdminAadharApproveComponent', () => {
  let component: AdminAadharApproveComponent;
  let fixture: ComponentFixture<AdminAadharApproveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAadharApproveComponent]
    });
    fixture = TestBed.createComponent(AdminAadharApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
