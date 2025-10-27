import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelContents } from './painel-contents';

describe('PainelContents', () => {
  let component: PainelContents;
  let fixture: ComponentFixture<PainelContents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelContents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelContents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
