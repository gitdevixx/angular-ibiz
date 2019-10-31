import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
// Third party libraries
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Root routing module
import { AppRoutingModule } from './app-routing.module';
// Root components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/pageNotFound/pageNotFound.component'
// Store
import { reducers, effects } from './shared/store';
// Sub Modules
import { MainModule } from './main/main.module'
import { TestModule } from './test/test.module';
import { VixxModule } from './vixx/vixx.module';
import { KjhMdModule } from './kjh-md/kjh-md.module';
// Environment
import { environment } from '../environments/environment'

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // 가장 최근에 변화한 state 변경을 25개까지 보여준다
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(effects),
    /**
     * Sub Modules
     */
    FormsModule,
    MainModule,
    TestModule,
    VixxModule,
    KjhMdModule,
    /**
     * App Routing Module
     */
    AppRoutingModule,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
