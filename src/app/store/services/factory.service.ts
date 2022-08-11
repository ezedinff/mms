import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeaponService } from './weapon.service';

@Injectable({ providedIn: 'root' })
export class FactoryService {
  constructor(private weaponService: WeaponService) {}
  executeMethod(name: string, args: any): Observable<any> {
    const [target, methodName] = name.split('|');
    const targetInstance = this.getTarget(target);
    const method = (
      targetInstance[methodName] as (args: any) => Observable<any>
    ).bind(targetInstance);
    if (typeof method !== 'function') {
      throw new Error(`Method ${name} is not defined`);
    }
    return method.call(targetInstance, args);
  }
  getTarget(name: string): any {
    if (name === 'weapon') {
      return this.weaponService;
    }
    throw new Error(`Target ${name} is not defined`);
  }
}
