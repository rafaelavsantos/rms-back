import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) { }

    async create(createUserDto: CreateUserDto) {
        return await this.userRepository.create(createUserDto);
    }

    async findAll() {
        return await this.userRepository.findAll();
    }

    async findOne(id: string): Promise<UserEntity> {
        const userExists = await this.userRepository.findOne(id);

        if(!userExists) {
            throw new NotFoundException('User not found!');
        }

        return userExists;
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        return await this.userRepository.update(id, updateUserDto);
    }

    async remove(id: string) {
        return await this.userRepository.remove(id);
    }
}
