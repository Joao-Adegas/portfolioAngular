import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsContent } from './skills-content';

describe('SkillsContent', () => {
  let component: SkillsContent;
  let fixture: ComponentFixture<SkillsContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
