import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivimentsContent } from './achiviments-content';

describe('AchivimentsContent', () => {
  let component: AchivimentsContent;
  let fixture: ComponentFixture<AchivimentsContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchivimentsContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivimentsContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
