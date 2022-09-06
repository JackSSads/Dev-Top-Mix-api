import { Body, Controller, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { GestorService } from './gestor.service';
import { GestorDTO } from './dto/gestor.dto';


@Controller('manager')
export class GestorController {
  constructor(private readonly gestorService: GestorService) {};

  @Post('create')
  async create(@Body() data: GestorDTO) {
    return await this.gestorService.create(data);
  };

  @Get('findAll')
  async findAll() {
      return await this.gestorService.findAll();
  };

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
      return await this.gestorService.findOne(id);
  };

  @Put('update/:id')
  async update(@Param('id') id: string,@Body() data: GestorDTO) {
    return await this.gestorService.update(id, data);
  };

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.gestorService.delete(id);
  };
};