import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupWorldComponent } from './cup-world.component';

describe('CupWorldComponent', () => {
  let component: CupWorldComponent;
  let fixture: ComponentFixture<CupWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
