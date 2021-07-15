import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechideasComponent } from './techideas.component';

describe('TechideasComponent', () => {
  let component: TechideasComponent;
  let fixture: ComponentFixture<TechideasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechideasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
