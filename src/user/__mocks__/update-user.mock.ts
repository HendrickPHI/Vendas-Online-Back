import { UpdatePasswordDTO } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDTO = {
  lastPassword: 'abc',
  newPassword: 'nova senha',
};

export const updatePasswordInvalidMock: UpdatePasswordDTO = {
  lastPassword: 'adada',
  newPassword: 'nova',
};
