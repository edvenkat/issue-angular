import 'zone.js';
import '@angular/platform-server/init';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}


export { AppServerModule as default} from './app/app.server.module';
export { renderModule } from '@angular/platform-server';