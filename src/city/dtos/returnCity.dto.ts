import { ReturnStateDto } from '../../state/dtos/returnState.dto';
import { CityEntity } from '../entities/city.entity';

export class ReturnCityDto {
  name: string;
  states?: ReturnCityDto;

  constructor(city: CityEntity) {
    this.name = city.name;
    this.states = city.state ? new ReturnStateDto(city.state) : undefined;
  }
}
