import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarksideComponent } from './darkside.component';

describe('DarksideComponent', () => {
  let component: DarksideComponent;
  let fixture: ComponentFixture<DarksideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarksideComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarksideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
