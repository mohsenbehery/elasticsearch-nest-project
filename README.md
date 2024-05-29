# Elasticsearch NestJS Project

This project is a NestJS application that interacts with an Elasticsearch index to retrieve various e-commerce data insights.

## Features

1. **Retrieve Daily Revenue by Date**:

   - Endpoint: `/elasticsearch/revenue?date={MM/DD/YYYY}`
   - Description: Returns the total revenue for a given date.

2. **Retrieve Customer with Most Orders on a Specific Day**:

   - Endpoint: `/elasticsearch/customerOrders?date={MM/DD/YYYY}`
   - Description: Returns the customer who placed the most orders on a specific date.

3. **Retrieve Product with Most Orders on a Specific Day**:
   - Endpoint: `/elasticsearch/stockOrders?date={MM/DD/YYYY}`
   - Description: Returns the product that was ordered the most on a specific date, along with the number of orders.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohsenbehery/elasticsearch-nest-project
   cd elasticsearch-nest-project
   ```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

<hr>

## Benefits

1. Insightful Analytics: By providing daily revenue figures and identifying top customers and products, this application helps businesses understand their sales trends and customer behavior.
2. Efficiency: Utilizing Elasticsearch's powerful search and aggregation features ensures that the application can handle large datasets and deliver quick results.
3. Flexibility: The application can be easily extended to include additional features or adapt to different data formats and requirements.

## Use Cases

1. Sales Monitoring: Businesses can use this application to monitor their daily sales performance and make informed decisions based on revenue data.
2. Customer Engagement: By identifying the most active customers, businesses can tailor their marketing and engagement strategies to boost customer loyalty.
3. Inventory Management: Knowing which products are ordered the most can help businesses manage their inventory more effectively, ensuring that popular items are always in stock.

<hr>

<h1>Overall, this project provides a robust foundation for any e-commerce platform looking to leverage Elasticsearch for insightful data analysis and enhanced business intelligence.</h1>
