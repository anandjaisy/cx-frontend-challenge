import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import {HttpInterceptorService} from "./http-interceptor.service";
import { provideStore } from '@ngrx/store';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {userReducer} from "../shared/+state/user/user.reducer";
import {UserEffects} from "../shared/+state/user/user.effects";
import {provideEffects} from "@ngrx/effects";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(), {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true
    },
    provideStore({
      user: userReducer // Provide the userReducer directly under the user key
    }),
    provideEffects(UserEffects),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    })]
};
