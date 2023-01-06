import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  public titulo: string='';
  public precio: string='';
  public descripcion: string='';
  public img1: string='';
  public img2: string='';
  public img3: string='';
  public fotos: object = {};

  constructor(private router: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {
    this.router.queryParams.subscribe(parametros =>{
      this.precio = parametros['precio'] || 'Sin precio';
      this.descripcion = parametros['descripcion'] || 'Sin descripcion';
      this.img1 = parametros['img1'] || 'Sin foto';
      this.img2 = parametros['img2'] || 'Sin foto';
      this.img3 = parametros['img3'] || 'Sin foto';
    });

    this.router.params.subscribe(parametros =>{
      this.titulo = parametros['titulo'] || 'Sin titulo';
    });

    this.fotos = this.route.getCurrentNavigation()?.extras.state as Object;
  }

}
