import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

EntityRepository(User);
export class UserRepository extends Repository<User> {
  async postUser(user: UserDto): Promise<User> {
    const {
      address,
      email,
      name,
      product_name,
      product_quantity,
      product_value,
      pushitem,
    } = user;
    const data = this.create();

    data.address = address ? address : data.address;
    data.email = email ? email : data.email;
    data.name = name ? name : data.name;
    data.product_name = product_name ? product_name : data.product_name;
    data.product_quantity = product_quantity
      ? product_quantity
      : data.product_quantity;
    data.product_value = product_value ? product_value : data.product_value;
    data.pushitem = pushitem ? pushitem : data.pushitem;

    try {
      await this.save(data);
      return data;
    } catch (error) {
      throw new Error('Não foi possível salvar os dados no banco');
    }
  }

  async getUser(user: UserDto): Promise<User[]> {
    return this.find(user);
  }
}
