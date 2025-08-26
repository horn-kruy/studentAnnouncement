import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// 1. Change the import from { App } to { AppComponent }
import { AppComponent } from './app/app';

// 2. Change the component being bootstrapped from App to AppComponent
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
