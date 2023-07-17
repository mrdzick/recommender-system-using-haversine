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
- `http://localhost:$PORT/sellers`: Get all sellers (waste bank).

  Response:

      {
        "status": "success",
        "message": "Berhasil mendapatkan data waste bank!",
        "data": [
            {
                "id": "seller-0589e8cf-2adb-4ad5-a813",
                "companyName": "CV Company Name",
                "province": "JAWA BARAT",
                "city": "KABUPATEN BANDUNG",
                "latitude": -6.76559,
                "longitude": 107.53354
            }
        ]
      }

- `http://localhost:$PORT/buyers`: Get all buyers.

Response:

      {
        "status": "success",
        "message": "Berhasil mendapatkan data buyer!",
        "data": [
            {
                "id": "buyer-0589e8cf-2adb-4ad5-a813",
                "companyName": "CV Company Name",
                "province": "JAWA BARAT",
                "city": "KABUPATEN BANDUNG",
                "latitude": -6.76559,
                "longitude": 107.53354
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
              "sellerId": "seller-9abfc02d-b999-457e-9555",
              "companyName": "CV Company Name",
              "city": "KOTA AMBON, MALUKU",
              "latitude": -3.6939,
              "longitude": 128.1813,
              "distance": 465.900106256
            }
        ]
      }



