import { Body, Controller, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDTO } from './dto/cliente.dto';


@Controller('client')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {};

  @Post('create')
  async create(@Body() data: ClienteDTO) {
    return await this.clienteService.create(data);
  };

  @Get('findAll')
  async findAll() {
      return await this.clienteService.findAll();
  };

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
      return await this.clienteService.findOne(id);
  };

  @Put('update/:id')
  async update(@Param('id') id: string,@Body() data: ClienteDTO) {
    return await this.clienteService.update(id, data);
  };

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.clienteService.delete(id);
  };
};