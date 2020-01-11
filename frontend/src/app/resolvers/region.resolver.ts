import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Resolve} from '@angular/router';
import {RegionService} from '../services/region.service';

@Injectable({
  providedIn: 'root'
})
export class RegionResolver implements Resolve<Observable<any>> {

  constructor(private regionService: RegionService) {
  }

  resolve() {
    return this.regionService.getRegion();
  }
}
