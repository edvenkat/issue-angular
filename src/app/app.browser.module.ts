import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppModule } from './app.module';

@NgModule({
  imports: [
     BrowserModule.withServerTransition({
          appId: 'serverApp'
    }),
    AppRoutingModule,
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppModule,
  ],
  bootstrap: [AppComponent],
  
})
export class AppBrowserModule { }
