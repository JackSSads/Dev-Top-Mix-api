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

  @Get('findOne/:email')
  async findOne(@Param('email') email: string) {
      return await this.colaboradorService.findOne(email);
  };

  @Put('update/:email')
  async update(@Param('email') email: string,@Body() data: ColaboradorDTO) {
    return await this.colaboradorService.update(email, data);
  };

  @Delete('delete/:email')
  async delete(@Param('email') email: string) {
    return await this.colaboradorService.delete(email);
  };
};