import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipSetupComponent } from './championship-setup.component';

describe('ChampionshipSetupComponent', () => {
  let component: ChampionshipSetupComponent;
  let fixture: ComponentFixture<ChampionshipSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionshipSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionshipSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
