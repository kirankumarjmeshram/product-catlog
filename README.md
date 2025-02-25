
# Product Catalog Application

This project is a store-level product catalog customization system using ElasticSearch for data storage, React with React Bootstrap for the frontend, and Node.js with Express for the backend.

## Tech Stack

* **Frontend:** React.js, React Bootstrap
* **Backend:** Node.js, Express.js
* **Database:** ElasticSearch
* **Deployment:** Local Desktop Setup
* **API Requests:** All endpoints use `GET` requests

## Features

* Store-level product catalog management
* Product listing and detail pages
* Search and filter functionality
* High-performance data retrieval using ElasticSearch
* RESTful API for product management

## Setup Guide

### Prerequisites

* Node.js (Latest LTS version)
* ElasticSearch (Running on your local desktop)
* React.js

### Installing and Running ElasticSearch Locally

1. **Download ElasticSearch:**
   * Visit [ElasticSearch Download Page](https://www.elastic.co/downloads/elasticsearch) and download the latest version for your OS.
2. **Extract and Configure:**
   * Extract the downloaded file to your preferred location.
   * Navigate to the `config/elasticsearch.yml` file and ensure the following settings:
     ```yaml
     network.host: localhost
     http.port: 9200
     ```
3. **Start ElasticSearch:**
   * Open a terminal in the extracted folder and run:
     ```sh
     ./bin/elasticsearch
     ```
   * On Windows (Run as administrator):
     ```sh
     bin\elasticsearch.bat
     ```
4. **Verify ElasticSearch is Running:**
   * Open a browser and go to: [http://localhost:9200](http://localhost:9200/)
   * You should see a JSON response confirming ElasticSearch is active.

### Seeding Data into ElasticSearch

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/kirankumarjmeshram/product-catlog.git
   cd product-catlog/backend
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Create an `.env` File:**
   ```sh
   PORT=5000
   ELASTICSEARCH_URL=http://localhost:9200
   ```
4. **Run Data Seeding Script:**
   ```sh
   cd ../elasticsearch
   node seedData.js
   ```

### Setting Up the Backend

1. **Start the Backend Server:**
   ```sh
   npm start
   ```

### Setting Up the Frontend

1. **Navigate to the Frontend Folder:**
   ```sh
   cd ../frontend
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Start the React App:**
   ```sh
   npm start
   ```
4. **Access the App:**
   * Open your browser and go to [http://localhost:3000](http://localhost:3000/)

## API Endpoints

### Products API

| Method | Endpoint                        | Description                  |
| ------ | ------------------------------- | ---------------------------- |
| GET    | `/api/products`               | Get all products             |
| GET    | `/api/products/:storeId`      | Get all products for a store |
| GET    | `/api/products/:storeId/:sku` | Get product details by SKU   |

### ElasticSearch API

| Method | Endpoint                                    | Description         |
| ------ | ------------------------------------------- | ------------------- |
| GET    | `http://localhost:9200/products/_search`  | Search products     |
| GET    | `http://localhost:9200/products/_doc/:id` | Get a product by ID |

## Notes

* Ensure ElasticSearch is running before starting the backend.
* The frontend fetches products dynamically from the backend.
* Modify `.env` settings as per your setup.

## License

This project is open-source. No specific license is applied.
