import { Injectable, NgModule } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(
        public router: Router,
        private readonly snack: MatSnackBar,
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
            headers: request.headers.set('Content-Type', 'application/json')
        });
        return next.handle(request).pipe(
            tap(
                (response: HttpEvent<any>) => {
                    console.log(response);
                },
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                       this.snack.open(err.error.errorMessage || err.message, 'Dismiss', { duration: 6000 });
                    }
                }
            )
        );
    }
}

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true
        }
    ]
})
export class RequestInterceptorModule { }