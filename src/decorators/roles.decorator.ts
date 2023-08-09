import { UserType } from 'src/user/enum/user-type.enum';
import { SetMetadata } from '@nestjs/common/decorators/core';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserType[]) => SetMetadata(ROLES_KEY, roles);
