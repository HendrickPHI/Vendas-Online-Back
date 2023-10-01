import { stateMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  createdAt: new Date(),
  id: 6543543,
  name: 'Nome da cidade',
  stateId: stateMock.id,
  updateAt: new Date(),
};
