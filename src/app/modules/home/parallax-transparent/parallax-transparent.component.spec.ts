import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxTransparentComponent } from './parallax-transparent.component';

describe('ParallaxTransparentComponent', () => {
  let component: ParallaxTransparentComponent;
  let fixture: ComponentFixture<ParallaxTransparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxTransparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxTransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
