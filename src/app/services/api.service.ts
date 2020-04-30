import { Injectable } from '@angular/core';
/*api service to return data from the url source*/
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }
    /*GET Episode from source*/
    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes');
    }
    /*GET a Episode by ID from source*/
    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }
    /*GET character from source*/
    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters');
    }
    /*GET character by ID from source*/
    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    /*GET quotes reletad to episodes from source*/
    getQuotes() {
        return this.http.get('https://www.breakingbadapi.com/api/quotes');
    }
    /*GET quotes by ID reletad to episodes from source*/
    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }
    /*GET number of deaths reletad to a character from source*/
    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/deaths');
    }
    getDeath(id) {
        return this.http.get('https://www.breakingbadapi.com/api/deaths');
    }

}