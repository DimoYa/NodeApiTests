import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HandlerInterceptorService implements HttpInterceptor {

  constructor(public toastService: ToastrService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((success) => {
      if (success instanceof HttpResponse) {
        if (success.url.endsWith('signin') ||
            success.url.endsWith('signup') ||
            success.url.includes('create') ||
            success.url.includes('delete')) {

            this.toastService.success('Success', 'Success');
        }
      }

    }), catchError((err) => {
      this.toastService.error(err.error.message)
      throw err;
    })
    )
  }
}


