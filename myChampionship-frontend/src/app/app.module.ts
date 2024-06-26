import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ChampionshipResultsComponent } from './championship-results/championship-results.component';
import { ChampionshipSetupComponent } from './championship-setup/championship-setup.component';
import { ApiService } from './api.service';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    ChampionshipResultsComponent,
    ChampionshipSetupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    ApiService
  ]
})
export class AppModule { }