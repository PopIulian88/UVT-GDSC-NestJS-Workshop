import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user-entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {} // Ce ete asta???
  // Ce ete asta???
  create(user) {
    const newUser = this.userRepo.create(user);

    return this.userRepo.save(newUser);
  }

  getUser({ id }) {
    return this.userRepo.findOneBy({ id });
  }
  updateUser({ id }, user) {
    return this.userRepo.update(id, user);
  }

  deleteUser({ id }) {
    return this.userRepo.delete(id);
  }
}
