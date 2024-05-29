import { Injectable, Inject } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class ElasticsearchService {
  constructor(
    @Inject('ELASTICSEARCH_CLIENT') private readonly client: Client,
  ) {}

  async createIndex(index: string) {
    await this.client.indices.create({
      index,
    });
  }

  async search() {
    const result = await this.client.get({
      index: 'ecommerce_data',
      id: 'UK5aw48BS_NsrYYYZIOD',
    });
    return result;
  }
  async getDailyRevenue(date: string) {
    try {
      const result = await this.client.search({
        index: 'ecommerce_data',
        body: {
          query: {
            range: {
              InvoiceDate: {
                gte: `${date} 00:00`, // Start of the day
                lt: `${date} 23:59`, // End of the day
              },
            },
          },
          aggs: {
            total_revenue: {
              sum: { field: 'UnitPrice' },
            },
          },
        },
      });
      const totalRevenue = result.aggregations.total_revenue;
      return totalRevenue;
    } catch (error) {
      console.error('Error retrieving daily revenue:', error);
      throw error;
    }
  }

  async getCustomerWithMostOrders(date: string) {
    try {
      const result = await this.client.search({
        index: 'ecommerce_data',
        body: {
          query: {
            range: {
              InvoiceDate: {
                gte: `${date} 00:00`,
                lt: `${date} 23:59`,
              },
            },
          },
          aggs: {
            customersWithMostOrders: {
              terms: {
                field: 'CustomerID',
                size: 1,
              },
            },
          },
        },
      });
      console.log(result);
      const topCustomer =
        result.aggregations.customersWithMostOrders['buckets'][0];
      return topCustomer;
    } catch (error) {
      console.error('Error retrieving customer with most orders:', error);
      throw error;
    }
  }

  async getStockWithMostOrders(date: string) {
    try {
      const result = await this.client.search({
        index: 'ecommerce_data',
        body: {
          query: {
            range: {
              InvoiceDate: {
                gte: `${date} 00:00`,
                lt: `${date} 23:59`,
              },
            },
          },
          aggs: {
            stock_with_most_orders: {
              terms: {
                field: 'StockCode',
                size: 1,
              },
            },
          },
        },
      });
      console.log(result);
      const topStock = result.aggregations.stock_with_most_orders['buckets'][0];
      return topStock;
    } catch (error) {
      console.error('Error retrieving stock with most orders:', error);
      throw error;
    }
  }
}
