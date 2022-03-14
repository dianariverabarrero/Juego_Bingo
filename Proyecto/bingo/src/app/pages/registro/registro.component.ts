import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.models';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  usuario: UsuarioModel

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    
   }
  
   onSubmit(form: NgForm){
    
    if (form.invalid) { return }
    
    this.authService.login(this.usuario).subscribe(
      res =>{
        this.router.navigate(['/home'])
      }
    )
    
    
    console.log('Form enviado')
     console.log(this.usuario)
     console.log(form);
   }

}
