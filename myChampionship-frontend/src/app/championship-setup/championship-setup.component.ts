import { Component } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-championship-setup',
  standalone: true,
  imports: [],
  templateUrl: './championship-setup.component.html',
  styleUrl: './championship-setup.component.css'
})
export class ChampionshipSetupComponent {
  teams: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTeams().subscribe((data: any) => {
      this.teams = data;
    });
  }

  startChampionship() {
    this.apiService.startChampionship({ teams: this.teams }).subscribe();
  }
}
