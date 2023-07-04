# Project Name

This project is a Node.js application for fetching and displaying store data from GetStoresByAccountId stored procedure in database.

## API Documentation

- Endpoint: `/api/stores/:AccountId`
- Method: GET
- Parameters:
- `:AccountId`: The account ID for retrieving stores
- Response Format:
- Status Code: 200 (OK) or 404 (Not Found)
- Body: An array of store objects with the following properties:
- `id`: Store ID
- `name`: Store name
- `is_active`: Store activation status
- `address`: Store address
- `locality`: Store locality
- `region`: Store region
- `postalcode`: Store postal code
