import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignStyleComponent } from './design-style.component';

describe('DesignStyleComponent', () => {
  let component: DesignStyleComponent;
  let fixture: ComponentFixture<DesignStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignStyleComponent]
    });
    fixture = TestBed.createComponent(DesignStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
