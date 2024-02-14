import "@angular/compiler";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppBrowserModule } from './app/app.browser.module';
if (environment.production) {
    enableProdMode();
}
export { AppServerModule } from './app/app.server.module';
export { renderModule } from '@angular/platform-server';

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic().bootstrapModule(AppBrowserModule)
    .catch(err => console.error(err));
});