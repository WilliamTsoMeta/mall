import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiParam } from '@nestjs/swagger';
import { SkuService } from './sku.service';
import { CreateSkuDto } from './dto/create-sku.dto';
import { UpdateSkuDto } from './dto/update-sku.dto';

@Controller('sku')
export class SkuController {
  constructor(private readonly skuService: SkuService) {}

  @Post()
  create(@Body() createSkuDto: CreateSkuDto) {
    return this.skuService.create(createSkuDto);
  }

  @Get()
  findAll() {
    return this.skuService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: false, type: String })
  findOne(@Param('id') id = 0) {
    return this.skuService.findOne(id);
  }

  @Get('code/:code')
  @ApiParam({ name: 'code', required: false, type: String })
  findOneByCode(@Param('code') code) {
    return this.skuService.findByCode(code);
  }

  @Get('tags/:ids')
  findTagRelated(@Param('ids') ids: Array<number>) {
    return this.skuService.findTagRelated(ids);
  }

  // @Get()
  // index(): string {
  //   return 'Admin page';
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkuDto: UpdateSkuDto) {
    return this.skuService.update(+id, updateSkuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skuService.remove(+id);
  }
}
