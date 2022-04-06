import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {

    //url per oauth: https://developer.spotify.com/console/get-search-item/
   //Ottengo il modulo HttpClient
   constructor(private http: HttpClient) { }
  
   searchTrack(query: string) {
     const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
     const headers = new HttpHeaders({
       Authorization:
         'Bearer BQC04w7Wwfp7rY_2xiTk6lK9dHvahQla8EABdhJvYWZ_1NTKNMth5ojmLzNExg-yHz5znPB7i7oQ4Alw4-2h52ZQbfF3v1QHo8UJOMFLFwsDUR-XOoLH9WaLGrCjvm9hmzTsP3P4UTAhUyCCJsgNW52BTMSUtBA'
     });
  
     let obsTracks = this.http.get(url, { headers });
     return obsTracks;
  //Ritorno un observable ai componenti che richiedono il servizio
   }
  
   getTrack(id: string) {
     const url = `https://api.spotify.com/v1/tracks/${id}`;
     const headers = new HttpHeaders({
       Authorization:
         'Bearer BQC04w7Wwfp7rY_2xiTk6lK9dHvahQla8EABdhJvYWZ_1NTKNMth5ojmLzNExg-yHz5znPB7i7oQ4Alw4-2h52ZQbfF3v1QHo8UJOMFLFwsDUR-XOoLH9WaLGrCjvm9hmzTsP3P4UTAhUyCCJsgNW52BTMSUtBA'
     });
     
     return this.http.get(url, { headers });
   }
   getArtist(id: string) {
     const url = `https://api.spotify.com/v1/artists/${id}`;
     const headers = new HttpHeaders({
       Authorization:
         'Bearer BQC04w7Wwfp7rY_2xiTk6lK9dHvahQla8EABdhJvYWZ_1NTKNMth5ojmLzNExg-yHz5znPB7i7oQ4Alw4-2h52ZQbfF3v1QHo8UJOMFLFwsDUR-XOoLH9WaLGrCjvm9hmzTsP3P4UTAhUyCCJsgNW52BTMSUtBA  '
     });
     
     return this.http.get(url, { headers });
   }
   getAlbums(id: string) {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC04w7Wwfp7rY_2xiTk6lK9dHvahQla8EABdhJvYWZ_1NTKNMth5ojmLzNExg-yHz5znPB7i7oQ4Alw4-2h52ZQbfF3v1QHo8UJOMFLFwsDUR-XOoLH9WaLGrCjvm9hmzTsP3P4UTAhUyCCJsgNW52BTMSUtBA  '
    });
    
    return this.http.get(url, { headers });
  }


}
