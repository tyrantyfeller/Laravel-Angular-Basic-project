import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipResultsComponent } from './championship-results.component';

describe('ChampionshipResultsComponent', () => {
  let component: ChampionshipResultsComponent;
  let fixture: ComponentFixture<ChampionshipResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionshipResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionshipResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
