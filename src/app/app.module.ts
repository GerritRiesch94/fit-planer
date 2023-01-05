import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSwitchComponent } from './navbar/language-switch/language-switch.component';
import { MatMenuModule } from '@angular/material/menu';
import { AthleteComponent } from './athlete/athlete.component';
import { AppRoutingModule } from './app-routing.module';
import { AthleteOverviewComponent } from './athlete/athlete-overview/athlete-overview.component';
import { AthleteCreationComponent } from './athlete/athlete-creation/athlete-creation.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AthleteOverviewOptionsComponent } from './athlete/athlete-overview/athlete-overview-options/athlete-overview-options.component';
import { RoutingMenuComponent } from './navbar/routing-menu/routing-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { environment } from '../environments/environment';
import { ENVIRONMENT } from '../environments/provider/environment.token';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguageSwitchComponent,
    AthleteComponent,
    AthleteOverviewComponent,
    AthleteCreationComponent,
    AthleteOverviewOptionsComponent,
    RoutingMenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient] },
      defaultLanguage: 'en-US',
    }),
    HttpClientModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDividerModule,
  ],
  providers: [{ provide: ENVIRONMENT, useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
