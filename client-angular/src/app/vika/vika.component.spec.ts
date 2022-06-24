import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VikaComponent } from './vika.component';

describe('VikaComponent', () => {
  let component: VikaComponent;
  let fixture: ComponentFixture<VikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
