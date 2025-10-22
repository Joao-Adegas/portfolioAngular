import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPerfil } from './asset-perfil';

describe('AssetPerfil', () => {
  let component: AssetPerfil;
  let fixture: ComponentFixture<AssetPerfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetPerfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetPerfil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
