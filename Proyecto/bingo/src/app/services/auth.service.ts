import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  url= '/';
  constructor(private http: HttpClient, private router:Router) { }

  login(usuario:Usuario){
    return this.http.post(this.url, usuario)
  }

  
}

//interface que consultan los components
export interface Usuario{
  _id?:string;
  mail?:string;
  password?:string;
}