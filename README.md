# Backend system
This backend system is running on PORT 5000 unless you defined on environment variable.

## Prerequisite
- Make sure you have node js installed.
- Make sure you have postgreSQL installed.
- Create `.env` file on root project. See `.env-example` file for variable that you must be set on your `.env` file.

## How to run
- Clone this repo by typing `git clone https://github.com/mrdzick/recommender-system-using-haversine.git` on your terminal.
- Pointing it to branch named `back-end` by typing `git checkout origin/back-end` on your terminal.
- Run `npm install` to install all dependencies.
- Run `npm run migrate` to run database migrations.
- Run `npm run build` to build this app.
- Run `npm run start` to run this app.
- You're ready to access all endpoints.

## List endpoints
Notes: Fill the `$PORT` that you've been set on .env file or just fill it with 5000 (default PORT).
- GET `http://localhost:$PORT/sellers`: Get all sellers (waste bank).

  Response:

      {
        "status": "success",
        "message": "Berhasil mendapatkan data waste bank!",
        "data": [
            {
                "id": string,
                "companyName": string,
                "province": string,
                "city": string,
                "latitude": number,
                "longitude": number
            }
        ]
      }

- GET `http://localhost:$PORT/sellers/$SELLER_ID`: Get detail seller. Replace $SELLER_ID with the `id` of seller that you want to see.

  Response:

      {
        "status": "success",
        "message": "Berhasil mendapatkan data detail seller!",
        "data": {
            "id": string,
            "companyName": string,
            "province": string,
            "city": string,
            "latitude": number,
            "longitude": number,
            "wasteInventories": [
                {
                    "id": number,
                    "name": string
                }
            ]
        }
      }

- GET `http://localhost:$PORT/buyers`: Get all buyers.

  Response:

      {
        "status": "success",
        "message": "Berhasil mendapatkan data buyer!",
        "data": [
            {
                "id": string,
                "companyName": string,
                "province": string,
                "city": string,
                "latitude": number,
                "longitude": number
            }
        ]
      }

- `http://localhost:$PORT/recommender-sellers?latbuyer=$LATITUDE_BUYER&longbuyer=$LONGITUDE_BUYER`: Get all recommended sellers (waste bank) that sorted from closest to the most far distance from buyer.
Fill `$LATITUDE_BUYER` with the value of buyer's latitude and fill `$LONGITUDE_BUYER` with the value of buyer's longitude.

  Response:

      {
        "status": "success",
        "message": "Berhasil mendapatkan data rekomendasi seller!",
        "data": [
            {
              "sellerId": string,
              "companyName": string,
              "city": string,
              "latitude": number,
              "longitude": number,
              "distance": number
            }
        ]
      }

- GET `http://localhost:$PORT/wastes`: Get all wastes.

  Response:

      {
        "status": "success",
        "message": "Berhasil mendapatkan data limbah!",
        "data": [
            {
                "id": number,
                "name": string
            }
        ]
      }

- POST `http://localhost:$PORT/wastes`: Create a waste.

  Request Body:

      {
        "name": string
      }

  Response:

      {
        "status": "success",
        "message": "Berhasil membuat data limbah!"
      }

- DELETE `http://localhost:$PORT/wastes/$WASTE_ID`. Delete a waste. Replace $WASTE_ID with the `id` of waste that you want to delete.

  Response:

      {
        "status": "success",
        "message": "Berhasil menghapus data limbah!"
      }

- POST `http://localhost:$PORT/sellers/$SELLER_ID/waste-inventories`: Create a waste inside waste inventory seller. Replace $SELLER_ID with `id` of seller that you want to add its waste inventory.

  Request Body:

      {
        "wasteId": number
      }

- DELETE `http://localhost:$PORT/sellers/$SELLER_ID/waste-inventories/$WASTE_ID`: Remove a waste from seller inventory. Replace $SELLER_ID with `id` of seller and $WASTE_ID with `id` of waste that you want to removed from its seller.

  Response:

      {
        "status": "success",
        "message": "Berhasil menghapus data inventory limbah!"
      }
