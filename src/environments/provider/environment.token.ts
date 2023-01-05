import { InjectionToken } from '@angular/core';
import { EnvironmentInterface } from '../model/environment.interface';

export const ENVIRONMENT: InjectionToken<EnvironmentInterface> = new InjectionToken<EnvironmentInterface>(
  'ENVIRONMENT'
);
