import { Body, Controller, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { ColaboradorService } from './colaborador.service';
import { ColaboradorDTO } from './dto/colaborador.dto';


@Controller('collaborator')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {};

  @Post('create')
  async create(@Body() data: ColaboradorDTO) {
    return await this.colaboradorService.create(data);
  };

  @Get('findAll')
  async findAll() {
      return await this.colaboradorService.findAll();
  };

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
      return await this.colaboradorService.findOne(id);
  };

  @Put('update/:id')
  async update(@Param('id') id: string,@Body() data: ColaboradorDTO) {
    return await this.colaboradorService.update(id, data);
  };

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.colaboradorService.delete(id);
  };
};