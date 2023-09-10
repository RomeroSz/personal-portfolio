import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAndSkillsComponent } from './avatar-and-skills.component';

describe('AvatarAndSkillsComponent', () => {
  let component: AvatarAndSkillsComponent;
  let fixture: ComponentFixture<AvatarAndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarAndSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
