import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export abstract class Api {

    constructor(private http: HttpClient) { }

    public postRequest<T, U>(url: string, body: T): Observable<U> {
        return this.http.post<U>(`${environment.apiBackendUrl}/${url}`, body);
    }

    public getRequest<T, U>(url: string): Observable<U> {
        return this.http.get<U>(`${environment.apiBackendUrl}/${url}`);
    }    

    public putRequest<T, U>(url: string, body: T): Observable<U> {
        return this.http.put<U>(`${environment.apiBackendUrl}/${url}`, body);
    }

    public deleteRequest<T, U>(url: string): Observable<U> {
        return this.http.delete<U>(`${environment.apiBackendUrl}/${url}`);
    }

}