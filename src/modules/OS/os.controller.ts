import { Body, Controller, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { OsService } from './os.service';
import { OsDTO } from './dto/os.dto';


@Controller('os')
export class OsController {
  constructor(private readonly osService: OsService) {};

  @Post('create')
  async create(@Body() data: OsDTO) {
    return await this.osService.create(data);
  };

  @Get('findAll')
  async findAll() {
      return await this.osService.findAll();
  };

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
      return await this.osService.findOne(id);
  };

  @Put('update/:id')
  async update(@Param('id') id: string,@Body() data: OsDTO) {
    return await this.osService.update(id, data);
  };

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.osService.delete(id);
  };
};