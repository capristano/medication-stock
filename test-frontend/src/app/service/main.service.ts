import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
    private apiUrl;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.api_url;
    }

    getApiUrl() {
        return this.apiUrl;
    }

    getHeaders(): { headers: HttpHeaders } {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,PATCH,DELETE',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, ' +
            'Access-Control-Allow-Credentials, Access-Control-Allow-Headers, ' +
            'Access-Control-Allow-Methods, Access-Control-Allow-Origin',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json'
        });

        return { headers };
    }

    /**
     * GET request
     * @param path: Path of endpoint
     */
    get(path): Observable<any> {
        const url = this.getApiUrl() + path;
        return this.http.get(url, this.getHeaders());
    }

    /**
     * POST request
     * @param path: Path of endpoint
     * @param params: JSON object relative to endpoint
     */
    post(path: string, params: Object): Observable<any> {
        const url = this.getApiUrl() + path;
        return this.http.post(url, params, this.getHeaders());
    }

    /**
     * PUT request
     * @param path: Path of endpoint
     * @param params: JSON object relative to endpoint
     */
    put(path: string, params: Object): Observable<any> {
        const url = this.getApiUrl() + path;
        return this.http.put(url, params, this.getHeaders());
    }

    /**
     * DELETE request
     * @param path: Path of endpoint
     */
    delete(path: string): Observable<any> {
        const url = this.getApiUrl() + path;
        return this.http.delete(url, this.getHeaders());
    }

}
