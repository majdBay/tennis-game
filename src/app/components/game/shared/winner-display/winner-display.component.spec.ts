import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerDisplayComponent } from './winner-display.component';

describe('WinnerDisplayComponent', () => {
  let component: WinnerDisplayComponent;
  let fixture: ComponentFixture<WinnerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
