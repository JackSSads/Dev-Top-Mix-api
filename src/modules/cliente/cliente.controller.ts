import { Body, Controller, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDTO } from './dto/cliente.dto';


@Controller()
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {};

  @Post()
  async create(@Body() data: ClienteDTO) {
    return await this.clienteService.create(data);
  };

  @Get()
  async findAll() {
      return await this.clienteService.findAll();
  };

  @Get('/:id')
  async findOne(@Param('id') id: string) {
      return await this.clienteService.findOne(id);
  };

  @Put('/:id')
  async update(@Param('id') id: string,@Body() data: ClienteDTO) {
    return await this.clienteService.update(id, data);
  };

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.clienteService.delete(id);
  };
};