import { Body, Controller, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { GestorService } from './gestor.service';
import { GestorDTO } from './dto/gestor.dto';


@Controller('manager')
export class GestorController {
  constructor(private readonly gestorService: GestorService) {};

  @Post()
  async create(@Body() data: GestorDTO) {
    return await this.gestorService.create(data);
  };

  @Get()
  async findAll() {
      return await this.gestorService.findAll();
  };

  @Get(':email')
  async findOne(@Param('email') email: string) {
      return await this.gestorService.findOne(email);
  };

  @Put(':email')
  async update(@Param('email') email: string,@Body() data: GestorDTO) {
    return await this.gestorService.update(email, data);
  };

  @Delete(':email')
  async delete(@Param('email') email: string) {
    return await this.gestorService.delete(email);
  };
};