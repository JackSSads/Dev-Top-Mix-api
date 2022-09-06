import { Body, Controller, Param, Get, Post, Patch } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteUpdateDTO } from './dto/cliente-.update.dto';
import { ClienteDTO } from './dto/cliente.dto';


@Controller('client')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('create')
  async create(@Body() data: ClienteDTO) {
    return await this.clienteService.create(data);
  }

  @Get('findAll')
  async findAll() {
      return await this.clienteService.findAll()
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
      return await this.clienteService.findOne(id)
  }

  @Patch('update')
  async update(@Param('id') id: string, data: ClienteUpdateDTO) {
    return await this.clienteService.update(id, data);
  }
}