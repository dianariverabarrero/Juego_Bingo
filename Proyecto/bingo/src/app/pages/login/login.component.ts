import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.models';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel
  constructor( /*private authService: AuthService, private router:Router*/) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }



  //Accion boton LOGIN - envia datos al servicio LOGIN
  /*loginComp(form: NgForm){
    if (form.invalid) { return }
    console.log(this.usuario);
    this.authService.login(this.usuario).subscribe(
      res=>{  
        this.router.navigate(['/login'])
      },
      err=>console.log(err)
    )
    }*/
}
