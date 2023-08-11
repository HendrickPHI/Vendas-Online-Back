import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { authorizationToLoginPayload } from '../utils/base-64-converter';

export const UserId = createParamDecorator((__, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;
  const LoginPayload = authorizationToLoginPayload(authorization);

  return LoginPayload?.id;
});
