import { CanActivateFn } from '@angular/router';

export const validatePermissionUserGuard: CanActivateFn = (route, state) => {
  return true;
};
