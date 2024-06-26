import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChampionshipResultsComponent } from './championship-results/championship-results.component';
import { ChampionshipSetupComponent } from './championship-setup/championship-setup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'results', component: ChampionshipResultsComponent },
    { path: 'setup', component: ChampionshipSetupComponent },
];
