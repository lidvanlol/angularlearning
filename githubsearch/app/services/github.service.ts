import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'b512e25c36edcebb6245';
    private client_secret='1992f87d70743f1a96ebf3af95e2ef7b08507918';

    constructor(private _http:Http){
        console.log('Github Service Ready...');
        this.username = 'lidvanlol';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }

    updateUser(username:string){
        this.username = username;
    }
}