import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'pdfmake-wrapper';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto:string = '', columna: string = ''): any[] {
    // console.log(arreglo);
    // console.log(texto);

    if (texto === '') {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }
    texto = texto.toLocaleLowerCase();
    
    return arreglo.filter( 
      data => data.nombre.toLowerCase().includes( texto )
    );
  }

}
