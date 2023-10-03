import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YathzeeDynamicFormsComponent } from './yathzee-dynamic-forms.component';

describe('YathzeeDynamicFormsComponent', () => {
  let component: YathzeeDynamicFormsComponent;
  let fixture: ComponentFixture<YathzeeDynamicFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YathzeeDynamicFormsComponent]
    });
    fixture = TestBed.createComponent(YathzeeDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
