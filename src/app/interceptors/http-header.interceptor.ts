import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-host' : 'rawg-video-games-database.p.rapidapi.com',
                'x-rapidapi-key':'564c1e43c3mshfcd8d5cf848cf71p1f6a84jsnf809b2a19e4b'
            },
            setParams: {
               key: '9930d3b29d7842259b77721e2bafd77f',
            }
        })
        return next.handle(req)
    }
}
