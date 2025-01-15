# My SQL CRUD App

This project is a simple CRUD (Create, Read, Update, Delete) application built with JavaScript using Node.js and Express. It connects to a SQL database and provides endpoints for managing items.

## Project Structure

```
my-sql-crud-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers
│   │   └── crudController.js # Contains CRUD operation methods
│   ├── routes
│   │   └── crudRoutes.js     # Defines routes for CRUD operations
│   └── db
│       └── connection.js      # Database connection setup
├── package.json               # NPM configuration file
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/yourusername/my-sql-crud-app.git
   cd my-sql-crud-app
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your database connection string and other necessary variables:

   ```
   DB_CONNECTION_STRING=jdbc:sqlserver://yoururl.com:1433
   DB_USER=xxx
   DB_PASSWORD=xxx
   DB_NAME=xxx
   DB_HOST=xx
   DB_PORT=1433
   DB_TRUST_SERVER_CERTIFICATE=false
   DB_AUTHENTICATION=SqlPassword
   DB_ENCRYPT=false
   API_KEY=yourAPIkey
   PORT=port
   ```

4. **Run the application:**
   ```
   npm start
   ```

## Usage

The application provides the following CRUD operations:

- **Create Item:** `POST /api/items`
- **Read Item:** `GET /api/items/:id`
- **Update Item:** `PUT /api/items/:id`
- **Delete Item:** `DELETE /api/items/:id`

## Examples

### Create Item

```bash
curl -X POST http://localhost:3000/api/items -d '{"name": "Item Name"}' -H "Content-Type: application/json"
```

### Read Item

```bash
curl http://localhost:3000/api/items/1
```

### Update Item

```bash
curl -X PUT http://localhost:3000/api/items/1 -d '{"name": "Updated Item Name"}' -H "Content-Type: application/json"
```

### Delete Item

```bash
curl -X DELETE http://localhost:3000/api/items/1
```

## License

This project is licensed under the MIT License.
