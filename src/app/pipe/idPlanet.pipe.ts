import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'idPlanet'
})

export class IdPlanetPipe implements PipeTransform {
  transform(url: string): any {

    const urlArr = url.split('/')
    const index = urlArr.length - 2
    // console.log(urlArr[index])
    return urlArr[index]

  }
}
