// src/elasticsearch/elasticsearch.controller.ts

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { ElasticsearchService } from './elastice.service';

@Controller('elasticsearch')
export class ElasticsearchController {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  @Post('index/:index')
  async createIndex(@Param('index') index: string) {
    await this.elasticsearchService.createIndex(index);
  }

  @Get('/search')
  async search(@Param('index') index: string, @Body() query: any) {
    return this.elasticsearchService.search();
  }
  @Get('revenue')
  async getDailyRevenue(@Query('date') date: string) {
    if (!date) {
      throw new BadRequestException('Date parameter is required');
    }

    const dateRegex = /^\d{2}\/\d{2}\/\d{4}/;
    if (!date.match(dateRegex)) {
      throw new BadRequestException(
        'Invalid date format. Date must be in YYYY-MM-DD format',
      );
    }

    const totalRevenue = await this.elasticsearchService.getDailyRevenue(date);

    return totalRevenue;
  }
  @Get('customerOrders')
  async getCustomerID(@Query('date') date: string) {
    if (!date) {
      throw new BadRequestException('Date parameter is required');
    }

    const dateRegex = /^\d{2}\/\d{2}\/\d{4}/;
    if (!date.match(dateRegex)) {
      throw new BadRequestException(
        'Invalid date format. Date must be in YYYY-MM-DD format',
      );
    }

    const CustomerData =
      await this.elasticsearchService.getCustomerWithMostOrders(date);

    return CustomerData;
  }
  @Get('stockOrders')
  async getStockOrders(@Query('date') date: string) {
    if (!date) {
      throw new BadRequestException('Date parameter is required');
    }

    const dateRegex = /^\d{2}\/\d{2}\/\d{4}/;
    if (!date.match(dateRegex)) {
      throw new BadRequestException(
        'Invalid date format. Date must be in YYYY-MM-DD format',
      );
    }

    const CustomerData =
      await this.elasticsearchService.getStockWithMostOrders(date);

    return CustomerData;
  }
}
