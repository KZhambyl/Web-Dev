import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import routes from './app/routes';

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  
    provideHttpClient(),    
  ],
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
