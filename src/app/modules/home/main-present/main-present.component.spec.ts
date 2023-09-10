import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPresentComponent } from './main-present.component';

describe('MainPresentComponent', () => {
  let component: MainPresentComponent;
  let fixture: ComponentFixture<MainPresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPresentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
