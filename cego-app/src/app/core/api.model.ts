import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export abstract class Api {

    constructor(private http: HttpClient) { }

    public postRequest<T>(url: string, body: T): Observable<T> {
        return this.http.post<T>(`${environment.apiBackendUrl}/${url}`, body);
    }

    public getRequest<T>(url: string): Observable<T> {
        return this.http.get<T>(`${environment.apiBackendUrl}/${url}`);
    }    

    public putRequest<T>(url: string, body: T): Observable<T> {
        return this.http.put<T>(`${environment.apiBackendUrl}/${url}`, body);
    }

    public deleteRequest<T>(url: string): Observable<T> {
        return this.http.delete<T>(`${environment.apiBackendUrl}/${url}`);
    }

}