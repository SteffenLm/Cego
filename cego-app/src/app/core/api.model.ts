import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

export abstract class Api {

    constructor(private http: HttpClient) { }

    protected postRequest<T, U>(url: string, body: T): Observable<U> {
        return this.http.post<U>(`${environment.apiBackendUrl}${url}`, body);
    }

    protected getRequest<T>(url: string): Observable<T> {
        return this.http.get<T>(`${environment.apiBackendUrl}${url}`);
    }

    protected putRequest<T, U>(url: string, body: T): Observable<U> {
        return this.http.put<U>(`${environment.apiBackendUrl}${url}`, body);
    }

    protected deleteRequest<T>(url: string): Observable<T> {
        return this.http.delete<T>(`${environment.apiBackendUrl}${url}`);
    }
}
