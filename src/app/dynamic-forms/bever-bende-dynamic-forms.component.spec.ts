import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverBendeDynamicFormsComponent } from './bever-bende-dynamic-forms.component';

describe('DynamicFormsComponent', () => {
  let component: BeverBendeDynamicFormsComponent;
  let fixture: ComponentFixture<BeverBendeDynamicFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeverBendeDynamicFormsComponent]
    });
    fixture = TestBed.createComponent(BeverBendeDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
