import { Injectable } from '@angular/core';
import { WasteBank } from '../interfaces/WasteBank.interface';

@Injectable({
  providedIn: 'root'
})
export class WasteBankService {
  wasteBanks: WasteBank[] = [
    {
      "id": "seller-0589e8cf-2adb-4ad5-a813-9025dd7d9b72",
      "companyName": "CV Tiga Berkah Plastindo",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -6.96559,
      "longitude": 107.53354
    },
    {
      "id": "seller-8f6ba8ea-8296-41b6-a4fb-78b8544e419d",
      "companyName": "PT Aneka Busa Indonesia",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.25,
      "longitude": 106.58333
    },
    {
      "id": "seller-6d7b242a-625e-44cc-90fd-bae7587ef62c",
      "companyName": "PT ANG TBK",
      "province": "JAWA BARAT",
      "city": "KOTA DEPOK",
      "latitude": -6.396611,
      "longitude": 106.816116
    },
    {
      "id": "seller-9875da21-9690-4f3c-b7b5-3ac4798ffe45",
      "companyName": "PT Sumber Asri Sejahtera",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.60543,
      "longitude": 111.53418
    },
    {
      "id": "seller-ed9eda56-e77c-411b-bae0-08cc8ba31516",
      "companyName": "Rumah Plastik Majalaya",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -7.04301,
      "longitude": 107.77512
    },
    {
      "id": "seller-42f0d7cd-4e41-4a5d-b5a6-695551459c30",
      "companyName": "Plastic Connectindo",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.591,
      "longitude": 111.4977
    },
    {
      "id": "seller-f4e33a54-2c14-441f-a505-05d9030a5332",
      "companyName": "PT Arsindo",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6167,
      "longitude": 111.5167
    },
    {
      "id": "seller-51731616-fe7a-406b-b374-a411268e0377",
      "companyName": "Tina",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA SELATAN",
      "latitude": -6.2447,
      "longitude": 106.8568
    },
    {
      "id": "seller-5e7b4339-809c-4f54-a81a-570003404aed",
      "companyName": "Bank Sampah Jatisari",
      "province": "JAWA BARAT",
      "city": "KOTA BEKASI",
      "latitude": -6.2344,
      "longitude": 107.0082
    },
    {
      "id": "seller-803861c8-f4f0-4f25-80d4-45f1c9839882",
      "companyName": "PT PITUKU CORDOVA INTERNATIONAL",
      "province": "BANTEN",
      "city": "KOTA TANGERANG SELATAN",
      "latitude": -6.2888,
      "longitude": 106.7202
    },
    {
      "id": "seller-7d5d3643-e5d8-49a7-8633-7f1e74d0167b",
      "companyName": "Lapak Peni",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.1787,
      "longitude": 106.5086
    },
    {
      "id": "seller-80777fee-084d-4a09-a271-31ebe1be9b99",
      "companyName": "PT. Renov Apik Nusantara",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN TEGAL",
      "latitude": -6.8997,
      "longitude": 109.1183
    },
    {
      "id": "seller-e1e9c6c7-f81e-4116-8538-7018932863ab",
      "companyName": "aditya",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MALANG",
      "latitude": -8.2315,
      "longitude": 112.7162
    },
    {
      "id": "seller-0b3c07a0-60c1-4133-88db-344c58c7752d",
      "companyName": "CV MEMBARA AGRO KAYA",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA BARAT",
      "latitude": -6.1572,
      "longitude": 106.7575
    },
    {
      "id": "seller-53c7ab26-d6a5-432b-ad03-49083baedf84",
      "companyName": "Berkat Abadi",
      "province": "JAWA BARAT",
      "city": "KOTA BEKASI",
      "latitude": -6.2346,
      "longitude": 107.0193
    },
    {
      "id": "seller-b5e80b29-a59f-45f5-9903-eb0c74286da2",
      "companyName": "bank sampah desa bintangsari",
      "province": "BANTEN",
      "city": "KABUPATEN LEBAK",
      "latitude": -6.4245,
      "longitude": 106.2454
    },
    {
      "id": "seller-fe039644-e4f2-4c67-a8b0-e0fe2adfdfec",
      "companyName": "TigaChair",
      "province": "SUMATERA UTARA",
      "city": "KOTA MEDAN",
      "latitude": 3.5833,
      "longitude": 98.6667
    },
    {
      "id": "seller-fef0514f-7d9a-4222-9ae1-f3391dffee44",
      "companyName": "Rahmat",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN PATI",
      "latitude": -6.7567,
      "longitude": 111.0347
    },
    {
      "id": "seller-a7e4fff1-47d5-4178-8a13-9b49778e992e",
      "companyName": "Heriyana",
      "province": "BANTEN",
      "city": "KOTA TANGERANG",
      "latitude": -6.1781,
      "longitude": 106.6298
    },
    {
      "id": "seller-7fd2e6a6-5a4d-4d12-909f-4659c4529006",
      "companyName": "WTA Plastik",
      "province": "BANTEN",
      "city": "KOTA TANGERANG",
      "latitude": -6.1955,
      "longitude": 106.6383
    },
    {
      "id": "seller-a6c2caeb-1ded-4aee-ac65-8fe1d0eeffae",
      "companyName": "banana group",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN SUKOHARJO",
      "latitude": -7.6576,
      "longitude": 110.8289
    },
    {
      "id": "seller-9abfc02d-b999-457e-9555-5f592137ecc0",
      "companyName": "amanah karya abadi",
      "province": "MALUKU",
      "city": "KOTA AMBON",
      "latitude": -3.6939,
      "longitude": 128.1813
    },
    {
      "id": "seller-00582469-165d-42a5-a6ea-1e74f8df9768",
      "companyName": "IREN",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.1787,
      "longitude": 106.5086
    },
    {
      "id": "seller-3f4cdcfc-cd0d-46d0-8cc6-3f854b533df9",
      "companyName": "alfustan",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN PEKALONGAN",
      "latitude": -6.8955,
      "longitude": 109.6636
    },
    {
      "id": "seller-2b2bf971-62f5-4654-899f-67ef9c8a7987",
      "companyName": "rudi",
      "province": "KALIMANTAN TENGAH",
      "city": "KABUPATEN SERUYAN",
      "latitude": -2.3826,
      "longitude": 112.5549
    },
    {
      "id": "seller-02440a84-f09d-40cb-b72c-d272c82c203a",
      "companyName": "Berkah mandiri jaya",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN GROBOGAN",
      "latitude": -7.1039,
      "longitude": 110.9545
    },
    {
      "id": "seller-ae1db1e4-6d09-40fe-9859-db254876164e",
      "companyName": "Makmur Jaya",
      "province": "LAMPUNG",
      "city": "KOTA BANDAR LAMPUNG",
      "latitude": -5.4162,
      "longitude": 105.2577
    },
    {
      "id": "seller-46494d18-1b84-4c4e-bb1e-a90c96ddb90d",
      "companyName": "Samazamana Group",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN SIDOARJO",
      "latitude": -7.4466,
      "longitude": 112.7119
    },
    {
      "id": "seller-69ed212d-e36c-4fce-bb44-da519eba1bf3",
      "companyName": "Oval Indonesia",
      "province": "SULAWESI SELATAN",
      "city": "KOTA MAKASSAR",
      "latitude": -5.1393,
      "longitude": 119.4221
    },
    {
      "id": "seller-47445872-c3e6-4d8a-a67f-554498e08179",
      "companyName": "BIJ",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA TIMUR",
      "latitude": -6.2283,
      "longitude": 106.878
    },
    {
      "id": "seller-5ea37254-3430-4f12-a2f9-5fc75ff720ef",
      "companyName": "KEN JAYA PLASINDO",
      "province": "LAMPUNG",
      "city": "KOTA BANDAR LAMPUNG",
      "latitude": -5.4162,
      "longitude": 105.2577
    },
    {
      "id": "seller-31b3d16a-30bd-4d77-85ae-2ec2a691c2fd",
      "companyName": "Sumber Rejeki",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA TIMUR",
      "latitude": -6.2283,
      "longitude": 106.878
    },
    {
      "id": "seller-3e4ea8c5-f9c2-40b2-98d3-df7d84c98049",
      "companyName": "PT Arsim Jaya Abadi",
      "province": "JAWA BARAT",
      "city": "KABUPATEN KARAWANG",
      "latitude": -6.3224,
      "longitude": 107.3159
    },
    {
      "id": "seller-eb1508ad-725b-435a-86c0-b8a0eb38457f",
      "companyName": "Kop Karyawan Lottemart",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.2483,
      "longitude": 107.0336
    },
    {
      "id": "seller-b922fba6-59d8-4af7-826d-7477e139dd31",
      "companyName": "ryan kis",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN TEGAL",
      "latitude": -6.8608,
      "longitude": 109.1715
    },
    {
      "id": "seller-b52e7f67-c812-4714-9d6c-cf08a15fff3e",
      "companyName": "generasi dluwak",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN KENDAL",
      "latitude": -7.0489,
      "longitude": 110.1974
    },
    {
      "id": "seller-c77cc0ff-12e6-412d-9fab-3947adf64804",
      "companyName": "Daun Raya Multindo",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN KEDIRI",
      "latitude": -7.7917,
      "longitude": 112.0136
    },
    {
      "id": "seller-61f096c7-fffb-4fc7-ab32-d6a5e569d6bc",
      "companyName": "Izumi",
      "province": "KEPULAUAN RIAU",
      "city": "KABUPATEN BINTAN",
      "latitude": 1.0961,
      "longitude": 104.4095
    },
    {
      "id": "seller-fe1c0458-ca57-4f4e-8594-2e595336efb5",
      "companyName": "Bank Sampah Setiamulya y",
      "province": "JAWA BARAT",
      "city": "KOTA TASIKMALAYA",
      "latitude": -7.3478,
      "longitude": 108.2208
    },
    {
      "id": "seller-61926016-48ec-4785-ae01-981f5e9a0c2d",
      "companyName": "DLHPP Kabupaten Bone Bolango",
      "province": "GORONTALO",
      "city": "KABUPATEN BONE BOLANGO",
      "latitude": 0.7353,
      "longitude": 123.0349
    },
    {
      "id": "seller-18334c3c-a57a-4d09-a221-225ba3e8787c",
      "companyName": "Bunda",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN PEMALANG",
      "latitude": -6.8885,
      "longitude": 109.3687
    },
    {
      "id": "seller-f4088918-00e8-4c1c-bcca-df3f058228dd",
      "companyName": "bengkel Tegar",
      "province": "SULAWESI UTARA",
      "city": "KOTA MANADO",
      "latitude": 1.4879,
      "longitude": 124.8457
    },
    {
      "id": "seller-057199c3-54b6-4227-8a83-cac79ce1d03f",
      "companyName": "Tps3R pulo kerto jaya",
      "province": "SUMATERA SELATAN",
      "city": "KOTA PALEMBANG",
      "latitude": -2.987,
      "longitude": 104.7694
    },
    {
      "id": "seller-ee7eeb87-3c2a-444a-b9ea-d0b6b5f0c663",
      "companyName": "Bank sampah unik",
      "province": "KALIMANTAN TIMUR",
      "city": "KOTA SAMARINDA",
      "latitude": -0.5082,
      "longitude": 117.1415
    },
    {
      "id": "seller-d9ea7324-eb35-4707-8bb8-67b83e57dafe",
      "companyName": "TPS 3R pulo kerto jaya",
      "province": "SUMATERA SELATAN",
      "city": "KOTA PALEMBANG",
      "latitude": -2.9879,
      "longitude": 104.7658
    },
    {
      "id": "seller-686d128a-8ead-4b1c-aad8-ba9614cfc6a4",
      "companyName": "Cv.Sumber Alam Barokah",
      "province": "SULAWESI SELATAN",
      "city": "KOTA MAKASSAR",
      "latitude": -5.1333,
      "longitude": 119.4251
    },
    {
      "id": "seller-78432391-0144-4ed0-aebf-d1ef0ab1cb63",
      "companyName": "Rumah Plastik Majalaya",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -6.9408,
      "longitude": 107.6892
    },
    {
      "id": "seller-ddee8ede-91c8-4069-b279-7276cb6c9498",
      "companyName": "cv. jaya sentosa",
      "province": "KALIMANTAN UTARA",
      "city": "KOTA TARAKAN",
      "latitude": 3.3184,
      "longitude": 117.5768
    },
    {
      "id": "seller-dfe39002-c60a-4b13-9e55-32cf63a22f9b",
      "companyName": "MulyaJayaAbadi",
      "province": "JAWA TENGAH",
      "city": "KOTA SEMARANG",
      "latitude": -6.9667,
      "longitude": 110.4167
    },
    {
      "id": "seller-3451daca-0037-4677-a410-8a7dec816c26",
      "companyName": "PDU-DB",
      "province": "SUMATERA UTARA",
      "city": "KABUPATEN DELI SERDANG",
      "latitude": 3.5293,
      "longitude": 98.7126
    },
    {
      "id": "seller-9fe3e225-e427-4fdd-a34d-d384d0ecad93",
      "companyName": "mja",
      "province": "JAWA BARAT",
      "city": "KABUPATEN SUBANG",
      "latitude": -6.5689,
      "longitude": 107.7645
    },
    {
      "id": "seller-432af5fc-6ddd-493e-90b8-065afee92cb3",
      "companyName": "Pradana Grub",
      "province": "SUMATERA SELATAN",
      "city": "KOTA PALEMBANG",
      "latitude": -2.9879,
      "longitude": 104.7658
    },
    {
      "id": "seller-2e2a80f9-d42b-4c91-b328-8e1ab2f35571",
      "companyName": "kusuma",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.1787,
      "longitude": 106.5086
    },
    {
      "id": "seller-eda4293f-daac-4c37-b94b-078c3e99b14a",
      "companyName": "dua satu barokah",
      "province": "JAWA BARAT",
      "city": "KOTA CIMAHI",
      "latitude": -6.8814,
      "longitude": 107.5413
    },
    {
      "id": "seller-4646ceaa-da73-4b01-8392-54ef559e0ecd",
      "companyName": "Green orlin",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA BARAT",
      "latitude": -6.1572,
      "longitude": 106.7575
    },
    {
      "id": "seller-0538e500-61d5-48cb-8d30-9336c7f5cc03",
      "companyName": "raja informasi nusantara",
      "province": "BANTEN",
      "city": "KOTA TANGERANG SELATAN",
      "latitude": -6.2935,
      "longitude": 106.7179
    },
    {
      "id": "seller-d4310f1f-51d8-41cc-9f60-6fc031976411",
      "companyName": "Tunas Mandiri",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA TIMUR",
      "latitude": -6.2283,
      "longitude": 106.878
    },
    {
      "id": "seller-39ceee59-4abb-456e-9b33-5ade953ce33f",
      "companyName": "cv. ganda guna box",
      "province": "JAWA TENGAH",
      "city": "KOTA SEMARANG",
      "latitude": -7.0245,
      "longitude": 110.3846
    },
    {
      "id": "seller-8f52eafe-9b81-414b-8e24-d95dffc0e875",
      "companyName": "Lapak K@ng Banien",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN PEKALONGAN",
      "latitude": -6.8955,
      "longitude": 109.6636
    },
    {
      "id": "seller-2dd369f3-e5dc-4b1d-bc2f-b58aac40c193",
      "companyName": "Audy Jaya",
      "province": "JAWA BARAT",
      "city": "KOTA BEKASI",
      "latitude": -6.2378,
      "longitude": 107.0134
    },
    {
      "id": "seller-d48f5c8d-5210-4d4a-a1b9-fc3272073eb4",
      "companyName": "KH",
      "province": "SUMATERA UTARA",
      "city": "KOTA MEDAN",
      "latitude": 3.5833,
      "longitude": 98.6667
    },
    {
      "id": "seller-61cbc984-5668-41ca-b06b-bb63a8389383",
      "companyName": "TPS 3 R pulo kerto jaya",
      "province": "SUMATERA SELATAN",
      "city": "KOTA PALEMBANG",
      "latitude": -2.9907,
      "longitude": 104.7623
    },
    {
      "id": "seller-ed0ace98-b4b6-483c-95d2-c6d704e8fc90",
      "companyName": "toko lancar jaya",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN PATI",
      "latitude": -6.7567,
      "longitude": 111.0347
    },
    {
      "id": "seller-379072ab-04d3-4d7c-91ba-40f14243949b",
      "companyName": "door smer",
      "province": "SUMATERA UTARA",
      "city": "KABUPATEN ASAHAN",
      "latitude": 2.7418,
      "longitude": 99.5235
    },
    {
      "id": "seller-1d015124-7408-45e4-aaf3-fadaf9ef1a46",
      "companyName": "Stands carwash auto detailing",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -6.9781,
      "longitude": 107.6326
    },
    {
      "id": "seller-3e6a20a4-adbc-4ce1-90e6-77885286285c",
      "companyName": "CV motor",
      "province": "JAWA BARAT",
      "city": "KABUPATEN CIANJUR",
      "latitude": -6.8179,
      "longitude": 107.1394
    },
    {
      "id": "seller-923fae48-2cac-496e-8d50-9b4ab39132aa",
      "companyName": "usaha adam",
      "province": "JAWA BARAT",
      "city": "KABUPATEN SUKABUMI",
      "latitude": -7.0062,
      "longitude": 106.7219
    },
    {
      "id": "seller-1a68261d-18ea-46c6-87ed-244a345f8be2",
      "companyName": "Kim store",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN KEBUMEN",
      "latitude": -7.6718,
      "longitude": 109.6528
    },
    {
      "id": "seller-6f4db6d2-ec25-48eb-98e8-fdae8d2b9171",
      "companyName": "PT Bintang Chili",
      "province": "SULAWESI SELATAN",
      "city": "KABUPATEN SINJAI",
      "latitude": -5.1268,
      "longitude": 120.2569
    },
    {
      "id": "seller-49ec2f97-c707-4ac1-bb41-e2b0ad58b42b",
      "companyName": "Bank Sampah",
      "province": "LAMPUNG",
      "city": "KABUPATEN TANGGAMUS",
      "latitude": -5.3727,
      "longitude": 104.8945
    },
    {
      "id": "seller-c2acb705-588d-4f5b-8887-732c0fd4e79f",
      "companyName": "Briket",
      "province": "SUMATERA UTARA",
      "city": "KABUPATEN SIMALUNGUN",
      "latitude": 2.9642,
      "longitude": 99.8099
    },
    {
      "id": "seller-6585fa20-ba6c-4c4e-90b4-f117fa878305",
      "companyName": "kon cell",
      "province": "SULAWESI TENGAH",
      "city": "KABUPATEN TOLI-TOLI",
      "latitude": 1.1869,
      "longitude": 120.7846
    },
    {
      "id": "seller-7433504b-4afe-4362-ae37-31cbd21d4421",
      "companyName": "bangbeng",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN LUMAJANG",
      "latitude": -8.1411,
      "longitude": 113.2244
    },
    {
      "id": "seller-8962e06a-a519-436d-8de0-bac247a5b365",
      "companyName": "Raja limbah",
      "province": "JAWA BARAT",
      "city": "KABUPATEN SUKABUMI",
      "latitude": -7.1621,
      "longitude": 106.6437
    },
    {
      "id": "seller-ef7ae77a-df9d-4c5f-8a8f-3d3247827c1e",
      "companyName": "Heri Rosok",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN KLATEN",
      "latitude": -7.6906,
      "longitude": 110.6115
    },
    {
      "id": "seller-f2d3082e-642a-48e4-9dc0-03b0ddbc6ed7",
      "companyName": "alga boga",
      "province": "BANTEN",
      "city": "KABUPATEN SERANG",
      "latitude": -6.1013,
      "longitude": 106.1471
    },
    {
      "id": "seller-6e2d445a-0672-4a69-bc27-2448425a28b4",
      "companyName": "tp asim",
      "province": "SULAWESI TENGAH",
      "city": "KOTA PALU",
      "latitude": -0.8946,
      "longitude": 119.8597
    },
    {
      "id": "seller-6cf1d088-ada2-40ad-9c96-e29da71cceb7",
      "companyName": "Wijaya",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN SUMENEP",
      "latitude": -7.004,
      "longitude": 113.8592
    },
    {
      "id": "seller-925960da-ecf4-4836-90ca-324afb54aa79",
      "companyName": "Alges store",
      "province": "KEPULAUAN BANGKA BELITUNG",
      "city": "KABUPATEN BANGKA",
      "latitude": -2.5354,
      "longitude": 106.1473
    },
    {
      "id": "seller-dca07469-290d-4b02-8b79-d209d100552e",
      "companyName": "cingkil",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.1787,
      "longitude": 106.5086
    },
    {
      "id": "seller-1d8a859b-97e9-4118-b5c1-908f43c2bf59",
      "companyName": "Mandiri Berjaya",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN PURBALINGGA",
      "latitude": -7.3983,
      "longitude": 109.3624
    },
    {
      "id": "seller-68659784-3631-449a-8d38-76831b95a49a",
      "companyName": "PT Mitra Pituku",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA UTARA",
      "latitude": -6.1175,
      "longitude": 106.7831
    },
    {
      "id": "seller-4b56f293-fdfb-489f-b36c-6f1b3f2ea239",
      "companyName": "bumi katulampa resort",
      "province": "JAWA BARAT",
      "city": "KOTA BOGOR",
      "latitude": -6.5946,
      "longitude": 106.7895
    },
    {
      "id": "seller-91c77852-dcce-4124-a3f2-565c6c8c864e",
      "companyName": "pt empting",
      "province": "JAWA TENGAH",
      "city": "KOTA TEGAL",
      "latitude": -6.8699,
      "longitude": 109.1409
    },
    {
      "id": "seller-396d19e6-31ab-40ec-bf3e-653c2328c5aa",
      "companyName": "rop",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN PURWOREJO",
      "latitude": -7.7187,
      "longitude": 110.0646
    },
    {
      "id": "seller-e850687c-0303-4c6e-99ec-84a5a1787a11",
      "companyName": "cv limbah",
      "province": "SULAWESI UTARA",
      "city": "KOTA SUKABUMI",
      "latitude": -6.9245,
      "longitude": 106.9278
    },
    {
      "id": "seller-9e86cd45-2f80-43b1-b202-42a776fefa26",
      "companyName": "mus digital printing",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.6613,
      "longitude": 106.8431
    },
    {
      "id": "seller-d801f065-5176-4b5d-887b-ef6806a318d5",
      "companyName": "PT lkai",
      "province": "SUMATERA UTARA",
      "city": "KABUPATEN PADANG LAWAS UTARA",
      "latitude": 2.1631,
      "longitude": 99.5144
    },
    {
      "id": "seller-c41ce92d-eef5-4376-9275-08f6986aeb0a",
      "companyName": "PT. Bersama Group",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.2621,
      "longitude": 107.0894
    },
    {
      "id": "seller-94708d31-6455-4b25-8bc8-cf51598d086c",
      "companyName": "pt agri andalas",
      "province": "BENGKULU",
      "city": "KOTA BENGKULU",
      "latitude": -3.7895,
      "longitude": 102.2592
    },
    {
      "id": "seller-ba993063-8f51-47bf-9065-49645a31d138",
      "companyName": "WARLUNK",
      "province": "JAWA BARAT",
      "city": "KABUPATEN INDRAMAYU",
      "latitude": -6.3995,
      "longitude": 108.3182
    },
    {
      "id": "seller-5be2514e-dc87-4da2-9591-b1b8cd70dd72",
      "companyName": "TUAN PRABU",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN BANYUMAS",
      "latitude": -7.5144,
      "longitude": 109.2942
    },
    {
      "id": "seller-ab06ae86-f3f0-4716-96d6-7b084292131f",
      "companyName": "mandiri",
      "province": "JAWA BARAT",
      "city": "KOTA DEPOK",
      "latitude": -6.392616,
      "longitude": 106.823181
    },
    {
      "id": "seller-9ae323b7-b64b-4d3b-96a4-bbb42f623434",
      "companyName": "PT Gramedia",
      "province": "KALIMANTAN UTARA",
      "city": "KOTA TARAKAN",
      "latitude": 3.3271,
      "longitude": 117.6169
    },
    {
      "id": "seller-0e80ee0c-bb9e-42a8-9bf2-b50c5fe90840",
      "companyName": "kumpulin sampah",
      "province": "KALIMANTAN TIMUR",
      "city": "KOTA SAMARINDA",
      "latitude": -0.4931,
      "longitude": 117.1256
    },
    {
      "id": "seller-839665fa-493b-4934-a43f-e5f0de8f3561",
      "companyName": "sosis solo",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.6899,
      "longitude": 106.8251
    },
    {
      "id": "seller-28db51b3-6dac-4572-be36-dae3ae18676a",
      "companyName": "jual akun",
      "province": "JAWA BARAT",
      "city": "KABUPATEN TASIKMALAYA",
      "latitude": -7.3345,
      "longitude": 108.1494
    },
    {
      "id": "seller-d974a66c-95d9-4dbc-957e-53152bf85b4b",
      "companyName": "MFT STORE",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN TULUNGAGUNG",
      "latitude": -8.0783,
      "longitude": 111.9132
    },
    {
      "id": "seller-3b6e3510-6fa6-41b6-97e0-34f4f994314b",
      "companyName": "PT. BERSAMA GROUP",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.2842,
      "longitude": 107.1741
    },
    {
      "id": "seller-1a7ca4a1-3013-4454-924e-41027391ac2a",
      "companyName": "pemnu",
      "province": "LAMPUNG",
      "city": "KABUPATEN TANGGAMUS",
      "latitude": -5.4324,
      "longitude": 104.8237
    },
    {
      "id": "seller-a63814e3-2914-4ba5-b466-bd3642474d36",
      "companyName": "ramdan",
      "province": "KALIMANTAN TIMUR",
      "city": "KOTA BALIKPAPAN",
      "latitude": -1.2426,
      "longitude": 116.8944
    },
    {
      "id": "seller-c82d03e6-bb22-4eda-850d-4319c08cf786",
      "companyName": "JM LAUNDRY",
      "province": "JAWA BARAT",
      "city": "KOTA BEKASI",
      "latitude": -6.2445,
      "longitude": 107.0103
    },
    {
      "id": "seller-59af5eb5-3d61-4938-908a-5d38dcd8431b",
      "companyName": "tidak ada",
      "province": "LAMPUNG",
      "city": "KABUPATEN TANGGAMUS",
      "latitude": -5.4748,
      "longitude": 105.0051
    },
    {
      "id": "seller-0ed90a8c-dfb0-4e2e-adb2-79ef958e6ef8",
      "companyName": "Pt.Industri setia",
      "province": "SULAWESI TENGAH",
      "city": "KABUPATEN TOLI-TOLI",
      "latitude": 1.1251,
      "longitude": 120.8412
    },
    {
      "id": "seller-0a7e9db4-caba-4edf-9c11-957f84d521c3",
      "companyName": "PT.makmur",
      "province": "LAMPUNG",
      "city": "KOTA BANDAR LAMPUNG",
      "latitude": -5.4162,
      "longitude": 105.2577
    },
    {
      "id": "seller-9d189624-1b0d-46a0-8fe9-f1c23a421c38",
      "companyName": "farm vilage",
      "province": "JAWA TENGAH",
      "city": "KOTA SEMARANG",
      "latitude": -7.0253,
      "longitude": 110.4669
    },
    {
      "id": "seller-a98be4ee-33c2-4231-b5d1-0a332474dc27",
      "companyName": "lspord",
      "province": "JAWA BARAT",
      "city": "KOTA BANDUNG",
      "latitude": -6.9175,
      "longitude": 107.6191
    },
    {
      "id": "seller-bade7dcb-686c-4ed2-81e6-d6ef9a1c1f65",
      "companyName": "koko",
      "province": "JAWA BARAT",
      "city": "KOTA BOGOR",
      "latitude": -6.6027,
      "longitude": 106.7974
    },
    {
      "id": "seller-142a419f-b626-4ddc-b9cc-937620b34c9d",
      "companyName": "toko",
      "province": "JAWA BARAT",
      "city": "KABUPATEN PURWAKARTA",
      "latitude": -6.5568,
      "longitude": 107.4476
    },
    {
      "id": "seller-d9b44d35-714e-41c2-8c0f-da9698707868",
      "companyName": "toko sembako",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.7157,
      "longitude": 106.8285
    },
    {
      "id": "seller-d0161e8a-2308-41c6-ad41-fea1675f7ed4",
      "companyName": "pabrik",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -7.043,
      "longitude": 107.6135
    },
    {
      "id": "seller-cc5f2e71-bcd2-4a03-ab6c-6d761b44e50f",
      "companyName": "brownies",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN SRAGEN",
      "latitude": -7.4283,
      "longitude": 111.0197
    },
    {
      "id": "seller-c1e41bec-9d2b-40b2-b632-10ae2f11e009",
      "companyName": "pt lipelon jaya",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.7453,
      "longitude": 106.8164
    },
    {
      "id": "seller-9371ee44-0f61-4644-9f02-512eb4456385",
      "companyName": "saba",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.7678,
      "longitude": 106.8004
    },
    {
      "id": "seller-ae5233be-bf80-4b46-84f7-1a4de0e7a42b",
      "companyName": "membuka kantin di sekolah",
      "province": "JAMBI",
      "city": "KABUPATEN MUARO JAMBI",
      "latitude": -1.4929,
      "longitude": 103.7261
    },
    {
      "id": "seller-2fdadb07-e11d-4007-afb1-310b34d4cfde",
      "companyName": "test test",
      "province": "KALIMANTAN UTARA",
      "city": "KABUPATEN BULUNGAN",
      "latitude": 2.9142,
      "longitude": 117.1193
    },
    {
      "id": "seller-c7127680-3b4a-4ef2-ba64-c41f6aebebf7",
      "companyName": "pt.astra movil",
      "province": "SUMATERA BARAT",
      "city": "KOTA PAYAKUMBUH",
      "latitude": -0.2242,
      "longitude": 100.6312
    },
    {
      "id": "seller-4198a98f-a796-4a4e-9662-5bff77f80189",
      "companyName": "Rongsokan",
      "province": "SULAWESI TENGAH",
      "city": "KABUPATEN TOLI-TOLI",
      "latitude": 1.0294,
      "longitude": 120.8843
    },
    {
      "id": "seller-450cf862-7f2a-44a1-9df8-669a0d51ba1d",
      "companyName": "PT•Merang",
      "province": "BANTEN",
      "city": "KABUPATEN LEBAK",
      "latitude": -6.4245,
      "longitude": 106.2454
    },
    {
      "id": "seller-85ee4358-ea86-481c-96d4-27de7bea325d",
      "companyName": "sendiri",
      "province": "LAMPUNG",
      "city": "KABUPATEN TULANGBAWANG",
      "latitude": -4.4213,
      "longitude": 105.2658
    },
    {
      "id": "seller-67720e78-b189-4e7c-9c52-d2d5105dbf50",
      "companyName": "PERUSAHAN ARDHAN",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN BANYUWANGI",
      "latitude": -8.218,
      "longitude": 114.3695
    },
    {
      "id": "seller-621b83e2-e55b-41ea-aede-b38a32467f46",
      "companyName": "swalayan",
      "province": "JAWA TENGAH",
      "city": "KOTA PEKALONGAN",
      "latitude": -6.8884,
      "longitude": 109.6757
    },
    {
      "id": "seller-e94e2bae-4d64-4b7d-bb09-7eae729693c5",
      "companyName": "Individual - Dovie",
      "province": "JAWA BARAT",
      "city": "KOTA BOGOR",
      "latitude": -6.59712,
      "longitude": 106.79522
    },
    {
      "id": "seller-62acd211-eb62-4871-9695-2565b1b16844",
      "companyName": "mc",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN PONOROGO",
      "latitude": -7.8617,
      "longitude": 111.4736
    },
    {
      "id": "seller-00ef7fb3-057c-4218-8315-0014410b1b8d",
      "companyName": "UD Berkah Saritirta",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN GRESIK",
      "latitude": -7.1533,
      "longitude": 112.5723
    },
    {
      "id": "seller-15c68ae7-7d84-4dfe-a85d-261ad20e5901",
      "companyName": "pt. hareudang",
      "province": "BANTEN",
      "city": "KOTA TANGERANG",
      "latitude": -6.2186,
      "longitude": 106.6332
    },
    {
      "id": "seller-44bd302a-ae76-448d-8e4a-2da7c072abe1",
      "companyName": "Toko kelontong",
      "province": "JAWA BARAT",
      "city": "KABUPATEN CIREBON",
      "latitude": -6.7417,
      "longitude": 108.5583
    },
    {
      "id": "seller-585adbc5-dfb7-4176-89c0-c5d14fbdec1e",
      "companyName": "Kain",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -6.9812,
      "longitude": 107.7184
    },
    {
      "id": "seller-1b508c04-a1ff-4bcf-98c8-562a023f33b8",
      "companyName": "TPST Sampora",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.1787,
      "longitude": 106.5086
    },
    {
      "id": "seller-ef4b201a-c018-43a2-9af3-648ba6524ff9",
      "companyName": "PT bangunan",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -6.9203,
      "longitude": 107.6056
    },
    {
      "id": "seller-9fbf865a-5a4a-452d-ad84-952605d1b725",
      "companyName": "pt han",
      "province": "JAWA BARAT",
      "city": "KOTA DEPOK",
      "latitude": -6.379714,
      "longitude": 106.819729
    },
    {
      "id": "seller-94740287-3dc1-4d06-b193-ec80a250f94d",
      "companyName": "Anjas scrap",
      "province": "JAWA BARAT",
      "city": "KABUPATEN INDRAMAYU",
      "latitude": -6.4374,
      "longitude": 108.3183
    },
    {
      "id": "seller-251f786b-9a5c-4318-96c1-e9bc4c1b8fd4",
      "companyName": "PT Ambon",
      "province": "ACEH",
      "city": "KABUPATEN ACEH TIMUR",
      "latitude": 4.7821,
      "longitude": 97.9647
    },
    {
      "id": "seller-69dd1ce6-6be8-4e4c-af9b-e6e39cc03073",
      "companyName": "Ayu parfume",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN KLATEN",
      "latitude": -7.6994,
      "longitude": 110.6398
    },
    {
      "id": "seller-5dbfafcc-2869-4d4e-a9bb-fcb729b9e727",
      "companyName": "CV javindo",
      "province": "JAWA BARAT",
      "city": "KOTA BEKASI",
      "latitude": -6.2521,
      "longitude": 107.0191
    },
    {
      "id": "seller-345679b2-d719-4da7-a42c-79ecbf398930",
      "companyName": "Bank Thayyib",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.8092,
      "longitude": 106.7744
    },
    {
      "id": "seller-0836afb0-73d3-4cec-838b-f2956836f8af",
      "companyName": "JASA REFERRAL",
      "province": "JAWA BARAT",
      "city": "KOTA CIREBON",
      "latitude": -6.7062,
      "longitude": 108.5578
    },
    {
      "id": "seller-62ed3dee-fbe0-4f3a-aff9-7ba78f8cb5d7",
      "companyName": "Surya Jaya",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN TEMANGGUNG",
      "latitude": -7.2762,
      "longitude": 110.0864
    },
    {
      "id": "seller-3648f129-098c-4780-baa2-8db1d94fd5be",
      "companyName": "CV TIGA BERKAH",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -6.9597,
      "longitude": 107.5753
    },
    {
      "id": "seller-c67ee678-57bb-43f8-906c-65ca9842f2ab",
      "companyName": "smart waste center",
      "province": "JAWA TIMUR",
      "city": "KOTA MALANG",
      "latitude": -7.9666,
      "longitude": 112.6326
    },
    {
      "id": "seller-b248de3c-d62e-498b-8c40-fd1415658820",
      "companyName": "PT persada",
      "province": "JAWA BARAT",
      "city": "KABUPATEN SUKABUMI",
      "latitude": -7.3438,
      "longitude": 106.6101
    },
    {
      "id": "seller-31634cf8-c659-40df-ad19-42cb2e86b694",
      "companyName": "Kahiyang",
      "province": "BANTEN",
      "city": "KOTA SERANG",
      "latitude": -6.1167,
      "longitude": 106.15
    },
    {
      "id": "seller-e1773d13-a69d-466f-9613-356daffff5da",
      "companyName": "Prilly Tumbelaka",
      "province": "SULAWESI UTARA",
      "city": "KOTA TOMOHON",
      "latitude": 1.3117,
      "longitude": 124.8355
    },
    {
      "id": "seller-01bb2e54-9ab7-4490-8c8d-6cdc8a130f3a",
      "companyName": "PT REMPAH",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA UTARA",
      "latitude": -6.1446,
      "longitude": 106.8824
    },
    {
      "id": "seller-f073a735-6b75-4a29-8efb-3be9927e69e2",
      "companyName": "Shop 29",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN SEMARANG",
      "latitude": -7.0351,
      "longitude": 110.3739
    },
    {
      "id": "seller-7e06ed9b-bb56-410c-942d-efe0374726bb",
      "companyName": "toko jaya mulya",
      "province": "JAWA TIMUR",
      "city": "KOTA SURABAYA",
      "latitude": -7.2575,
      "longitude": 112.7521
    },
    {
      "id": "seller-edbfb052-c554-4ad6-a907-79e0bfb89dec",
      "companyName": "sepatu",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MOJOKERTO",
      "latitude": -7.5107,
      "longitude": 112.4271
    },
    {
      "id": "seller-a8b9ae5d-5877-4b3f-a02a-1d4b78f14794",
      "companyName": "Rakha Store",
      "province": "JAWA BARAT",
      "city": "KOTA CIREBON",
      "latitude": -6.7338,
      "longitude": 108.5524
    },
    {
      "id": "seller-39558c60-fd7c-4623-990f-0bfe63f5f82d",
      "companyName": "blm ada",
      "province": "KALIMANTAN TENGAH",
      "city": "KABUPATEN SUKAMARA",
      "latitude": -2.6302,
      "longitude": 111.2396
    },
    {
      "id": "seller-5b1cd289-2514-4cb2-b288-a5d5c712ffe0",
      "companyName": "jual beli limbah",
      "province": "JAWA BARAT",
      "city": "KABUPATEN SUKABUMI",
      "latitude": -7.414804528138889,
      "longitude": 106.71490742942277
    },
    {
      "id": "seller-fddc3eb0-a1c6-4498-871f-18762912d336",
      "companyName": "jual beli limbah",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.8267,
      "longitude": 106.7575
    },
    {
      "id": "seller-4802b33a-cf7c-45d1-8e42-d16ac032de18",
      "companyName": "SINTETIS",
      "province": "JAWA BARAT",
      "city": "KABUPATEN KARAWANG",
      "latitude": -6.2971,
      "longitude": 107.2613
    },
    {
      "id": "seller-990f0d38-4b26-4e8a-8539-053f8c684ed0",
      "companyName": "chhlat",
      "province": "DI YOGYAKARTA",
      "city": "KABUPATEN KULON PROGO",
      "latitude": -7.8203,
      "longitude": 110.1651
    },
    {
      "id": "seller-95970f83-5f98-4c92-a43c-19fe99668ee0",
      "companyName": "jasa angkut puing/tanah",
      "province": "JAWA BARAT",
      "city": "KOTA BEKASI",
      "latitude": -6.2497,
      "longitude": 107.0309
    },
    {
      "id": "seller-c01636de-3e52-4026-99fe-e9935b3fb0aa",
      "companyName": "gaada",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.8612,
      "longitude": 106.7272
    },
    {
      "id": "seller-69840d59-9516-4691-82aa-d2de89b4722f",
      "companyName": "riss gans",
      "province": "JAWA BARAT",
      "city": "KABUPATEN INDRAMAYU",
      "latitude": -6.36894,
      "longitude": 108.33411
    },
    {
      "id": "seller-23b92084-bed0-4280-b6b7-5eedd87b8ba1",
      "companyName": "PT Bahan Recycle Serbaguna",
      "province": "KALIMANTAN SELATAN",
      "city": "KABUPATEN HULU SUNGAI UTARA",
      "latitude": -2.5864,
      "longitude": 115.5335
    },
    {
      "id": "seller-72f5089c-ba49-4748-836e-ecab7c345635",
      "companyName": "tak",
      "province": "ACEH",
      "city": "KABUPATEN ACEH SINGKIL",
      "latitude": 2.4231,
      "longitude": 97.987
    },
    {
      "id": "seller-afe666a5-2ca1-40ef-a76e-8d5b60120ba6",
      "companyName": "cilok Bandung",
      "province": "JAWA BARAT",
      "city": "KABUPATEN TASIKMALAYA",
      "latitude": -7.3276,
      "longitude": 108.1983
    },
    {
      "id": "seller-b2e5dacb-51c0-4e78-b101-3675fd7a58f2",
      "companyName": "usaha kedai",
      "province": "SUMATERA SELATAN",
      "city": "KABUPATEN MUSI BANYUASIN",
      "latitude": -2.74,
      "longitude": 104.64
    },
    {
      "id": "seller-11f1d249-e56b-4ab3-99d1-c4a6d09d10b4",
      "companyName": "PT chandra",
      "province": "BANTEN",
      "city": "KOTA TANGERANG",
      "latitude": -6.2313,
      "longitude": 106.6281
    },
    {
      "id": "seller-7c6d5e81-0af8-4e44-aac9-5294a0bca444",
      "companyName": "tricell",
      "province": "JAWA TENGAH",
      "city": "KOTA SURAKARTA",
      "latitude": -6.86992,
      "longitude": 109.10301
    },
    {
      "id": "seller-eacba1a6-5bed-4735-bd14-4957c935a56b",
      "companyName": "hotel",
      "province": "SULAWESI UTARA",
      "city": "KABUPATEN BOLAANG MONGONDOW UTARA",
      "latitude": 0.7815,
      "longitude": 124.3475
    },
    {
      "id": "seller-ba525dec-819a-4dca-bbf5-27ad163c5c03",
      "companyName": "universal",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN PASURUAN",
      "latitude": -7.59557,
      "longitude": 112.76518
    },
    {
      "id": "seller-5586f462-6d24-4694-ab93-ee76d25c2ccb",
      "companyName": "Dua Putra Jaya",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA UTARA",
      "latitude": -6.1339,
      "longitude": 106.8697
    },
    {
      "id": "seller-4bc64bec-ac93-4856-893d-43b1cce6cf5d",
      "companyName": "sasiwa",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN PASURUAN",
      "latitude": -7.6495,
      "longitude": 112.9033
    },
    {
      "id": "seller-1b40ccfe-d6e5-49d0-b780-d0dc1392d65a",
      "companyName": "Acin Store",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA SELATAN",
      "latitude": -6.3627,
      "longitude": 106.8287
    },
    {
      "id": "seller-8e411e79-4ad0-401c-9721-ca601b28de25",
      "companyName": "CV Dani daya utama",
      "province": "KALIMANTAN SELATAN",
      "city": "KOTA BANJAR BARU",
      "latitude": -3.4782,
      "longitude": 114.8503
    },
    {
      "id": "seller-d69491d5-4fc7-4697-ab58-8b8f9f1d066c",
      "companyName": "GRecycle",
      "province": "SUMATERA UTARA",
      "city": "KABUPATEN SAMOSIR",
      "latitude": 2.6759,
      "longitude": 98.8016
    },
    {
      "id": "seller-197274f8-461c-4e8b-b613-00451e07222c",
      "companyName": "pjjh",
      "province": "BANTEN",
      "city": "KOTA TANGERANG",
      "latitude": -6.2468,
      "longitude": 106.6195
    },
    {
      "id": "seller-32418a96-6f18-4b94-b9d9-b37288d30b71",
      "companyName": "Becksz's Kitchen",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.8841,
      "longitude": 106.7136
    },
    {
      "id": "seller-c6f8d20c-440b-4e55-be19-8fb1b2539260",
      "companyName": "Kedai Chayra",
      "province": "JAWA BARAT",
      "city": "KOTA CIMAHI",
      "latitude": -6.88291,
      "longitude": 107.5357
    },
    {
      "id": "seller-e978b8b5-10bd-42fd-91c2-9c1777c2449c",
      "companyName": "PT Multikreasi Ciptasukses",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.34084,
      "longitude": 106.6369
    },
    {
      "id": "seller-5ab52e1d-46e9-4b8c-a96e-bfd5ab8f12c8",
      "companyName": "reymank shop",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN PROBOLINGGO",
      "latitude": -7.8933,
      "longitude": 113.2158
    },
    {
      "id": "seller-3e9c40a7-218b-45be-b8fc-9940ee035392",
      "companyName": "Paku Borneo",
      "province": "KALIMANTAN BARAT",
      "city": "KOTA PONTIANAK",
      "latitude": 0.0227,
      "longitude": 109.3301
    },
    {
      "id": "seller-7ea48f38-85dc-43a5-9146-46b9a4f2eece",
      "companyName": "cocothree",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN SIDOARJO",
      "latitude": -7.4451,
      "longitude": 112.7203
    },
    {
      "id": "seller-10f7a945-3def-4c49-8098-a556243a6e28",
      "companyName": "robicell",
      "province": "JAWA BARAT",
      "city": "KABUPATEN TASIKMALAYA",
      "latitude": -7.3499,
      "longitude": 108.2238
    },
    {
      "id": "seller-500bb47f-477e-4d14-9a1b-44b11b059ae0",
      "companyName": "PT sangrai",
      "province": "KALIMANTAN TIMUR",
      "city": "KOTA BALIKPAPAN",
      "latitude": -1.2477,
      "longitude": 116.8452
    },
    {
      "id": "seller-335d08f5-1003-4794-894c-35660e22d05f",
      "companyName": "penda asam",
      "province": "KALIMANTAN TENGAH",
      "city": "KABUPATEN BARITO SELATAN",
      "latitude": -1.9075,
      "longitude": 114.9311
    },
    {
      "id": "seller-46636ec7-41db-4c8b-b0cc-97b26125f448",
      "companyName": "Pt.Mayora",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.1787,
      "longitude": 106.5086
    },
    {
      "id": "seller-6a5834de-191c-4f21-be0a-878195f23145",
      "companyName": "PT BUBURUH",
      "province": "GORONTALO",
      "city": "KOTA GORONTALO",
      "latitude": 0.5357,
      "longitude": 123.0646
    },
    {
      "id": "seller-19c04ad5-1abb-430d-940f-1d66fde33c79",
      "companyName": "aluminum",
      "province": "KALIMANTAN SELATAN",
      "city": "KABUPATEN HULU SUNGAI UTARA",
      "latitude": -2.4765,
      "longitude": 115.4367
    },
    {
      "id": "seller-de2294ed-162b-46f4-b7da-b6d150b4fe50",
      "companyName": "AGEN CHIP DOMINO",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA PUSAT",
      "latitude": -6.1805,
      "longitude": 106.8356
    },
    {
      "id": "seller-84af51e6-f993-4ef4-a0f3-2bafd7d9de8c",
      "companyName": "pariwisata",
      "province": "SUMATERA UTARA",
      "city": "KABUPATEN ASAHAN",
      "latitude": 2.7503,
      "longitude": 99.715
    },
    {
      "id": "seller-6bec6747-e7d0-49b5-85b9-16671db8a681",
      "companyName": "Enakurasai - Kedai Yakitori",
      "province": "BANTEN",
      "city": "KOTA TANGERANG SELATAN",
      "latitude": -6.2897,
      "longitude": 106.7265
    },
    {
      "id": "seller-0a26aa4a-cdb7-4e10-976c-7d854398e31a",
      "companyName": "iqbal fahrozi",
      "province": "BANTEN",
      "city": "KOTA TANGERANG SELATAN",
      "latitude": -6.2951,
      "longitude": 106.7304
    },
    {
      "id": "seller-3741571c-0b32-4bcb-a1d1-9d836731a3de",
      "companyName": "Skolastika Seran",
      "province": "NUSA TENGGARA TIMUR",
      "city": "KABUPATEN BELU",
      "latitude": -9.4482,
      "longitude": 124.9067
    },
    {
      "id": "seller-addce52c-e13a-4b30-b245-2b1a657c3bc1",
      "companyName": "muhammad supriyanto",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN TRENGGALEK",
      "latitude": -8.0453,
      "longitude": 111.7166
    },
    {
      "id": "seller-89dd1af1-766f-4f78-b7b7-d15a592884c5",
      "companyName": "MLBB",
      "province": "JAWA BARAT",
      "city": "KOTA SUKABUMI",
      "latitude": -6.9302,
      "longitude": 106.9302
    },
    {
      "id": "seller-a44393b4-18d5-49e4-b0a1-d36a8d98d18d",
      "companyName": "george hendrik",
      "province": "BANTEN",
      "city": "KOTA TANGERANG SELATAN",
      "latitude": -6.3039,
      "longitude": 106.7256
    },
    {
      "id": "seller-832a1347-80ff-4a4e-b008-ce16552aba82",
      "companyName": "asep aris",
      "province": "JAWA BARAT",
      "city": "KABUPATEN CIREBON",
      "latitude": -6.7489,
      "longitude": 108.5108
    },
    {
      "id": "seller-d020b31e-757c-4d09-9458-94b508c1e5ce",
      "companyName": "kios mico",
      "province": "SULAWESI UTARA",
      "city": "KOTA MANADO",
      "latitude": 1.4889,
      "longitude": 124.8489
    },
    {
      "id": "seller-7f52f34d-6919-4810-b3ff-2cf43d6cf678",
      "companyName": "degura",
      "province": "SUMATERA SELATAN",
      "city": "KOTA PALEMBANG",
      "latitude": -2.9907,
      "longitude": 104.7623
    },
    {
      "id": "seller-0d81f474-530c-4dc4-b441-97c5d977e6ec",
      "companyName": "tidak ada",
      "province": "SUMATERA UTARA",
      "city": "KABUPATEN DELI SERDANG",
      "latitude": 3.575,
      "longitude": 98.6742
    },
    {
      "id": "seller-6c65375f-0400-45ea-b070-188e340b9afe",
      "companyName": "Individual-Pak Budiantoro",
      "province": "BANTEN",
      "city": "KOTA SERANG",
      "latitude": -6.2167,
      "longitude": 106.0667
    },
    {
      "id": "seller-1149300a-753f-4747-b181-26ccb4ef20f7",
      "companyName": "BUMDES AMANAH KINTAPURA",
      "province": "KALIMANTAN SELATAN",
      "city": "KABUPATEN TANAH LAUT",
      "latitude": -3.98722140717775,
      "longitude":  114.82406317770929
    },
    {
      "id": "seller-0e5a55f9-6c95-4320-b657-b3cd8716bc6a",
      "companyName": "Agnia Nurul Jannati",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.3409,
      "longitude": 107.1578
    },
    {
      "id": "seller-095ee0eb-ab83-4035-ab02-3d725a1435a8",
      "companyName": "Agnia NJ",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.3887,
      "longitude": 107.0363
    },
    {
      "id": "seller-12b0c911-d638-4eb3-8333-08dbc5ef9123",
      "companyName": "BAS Project",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN PATI",
      "latitude": -6.7567,
      "longitude": 111.0347
    },
    {
      "id": "seller-11f2e150-4b42-470f-8b34-e0bbfd46c503",
      "companyName": "independen bisnis owner",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA TIMUR",
      "latitude": -6.2283,
      "longitude": 106.878
    },
    {
      "id": "seller-7b4d6364-c17a-44a0-bdbd-70aa332221e5",
      "companyName": "ayu nurmala unzir",
      "province": "BANTEN",
      "city": "KOTA TANGERANG",
      "latitude": -6.265,
      "longitude": 106.6081
    },
    {
      "id": "seller-4681c5f9-20fa-4f74-a58f-8529da3d1bf5",
      "companyName": "alfara putra",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN DEMAK",
      "latitude": -6.8987,
      "longitude": 110.6348
    },
    {
      "id": "seller-baefc1f6-e51e-471f-a755-d7084d3594ec",
      "companyName": "siti haifa",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.8999,
      "longitude": 106.7029
    },
    {
      "id": "seller-0fd04675-455f-4a59-926c-325082fe294b",
      "companyName": "ABDUL FATAH",
      "province": "JAWA BARAT",
      "city": "KABUPATEN TASIKMALAYA",
      "latitude": -7.3812,
      "longitude": 108.2049
    },
    {
      "id": "seller-6a792b4f-6690-454d-9373-40bfc753393d",
      "companyName": "Safacoffee22",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN BOJONEGORO",
      "latitude": -7.1524,
      "longitude": 111.8953
    },
    {
      "id": "seller-8821103d-9522-40d3-bf8b-7e45ffb3639f",
      "companyName": "PT Mitra Pituku",
      "province": "JAWA BARAT",
      "city": "KABUPATEN TASIKMALAYA",
      "latitude": -7.3957,
      "longitude": 108.1666
    },
    {
      "id": "seller-e16f8edf-1922-4c4d-9570-2316712fd2e5",
      "companyName": "PT Mitra Pituku",
      "province": "JAWA BARAT",
      "city": "KABUPATEN TASIKMALAYA",
      "latitude": -7.3765,
      "longitude": 108.1367
    },
    {
      "id": "seller-0a26f4f7-679b-4d5c-949d-d175ca5988bf",
      "companyName": "Maria Ichsani",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN MAGELANG",
      "latitude": -7.4952,
      "longitude": 110.2468
    },
    {
      "id": "seller-4b16097a-46c4-4580-978d-2599a4bf6c94",
      "companyName": "ramadhani baroka cahya gumilar",
      "province": "JAWA BARAT",
      "city": "KOTA TASIKMALAYA",
      "latitude": -7.3271,
      "longitude": 108.2146
    },
    {
      "id": "seller-fa3cb0f7-c511-4bf7-b59b-850400926b1e",
      "companyName": "Andrie Wildan",
      "province": "JAWA TIMUR",
      "city": "KOTA KEDIRI",
      "latitude": -7.8216,
      "longitude": 112.0112
    },
    {
      "id": "seller-d079ce47-17f1-45df-9aa7-a44b391100c2",
      "companyName": "Tiga Sedulur03",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA BARAT",
      "latitude": -6.1572,
      "longitude": 106.7575
    },
    {
      "id": "seller-3d6ac391-2572-4499-9573-51c047c445dc",
      "companyName": "Rini Sulastri",
      "province": "KALIMANTAN BARAT",
      "city": "KOTA PONTIANAK",
      "latitude": -0.0222,
      "longitude": 109.3275
    },
    {
      "id": "seller-e6fbafd3-a925-4b1e-ae5e-9152cdbe65c2",
      "companyName": "Rumah plastik recycle barokah prabumulih",
      "province": "SUMATERA SELATAN",
      "city": "KOTA PRABUMULIH",
      "latitude": -3.404286903846625,
      "longitude": 104.24852870149282
    },
    {
      "id": "seller-0da1d635-60c4-43c8-b998-65fbf226b94f",
      "companyName": "rumah besi recycle barokah prabumulih",
      "province": "SUMATERA SELATAN",
      "city": "KOTA PRABUMULIH",
      "latitude": -3.4435,
      "longitude": 104.2465
    },
    {
      "id": "seller-f72c77d6-db4a-40eb-ad12-58a3fb6f0e2d",
      "companyName": "ML BOTOL MANDIRI",
      "province": "SUMATERA UTARA",
      "city": "KOTA MEDAN",
      "latitude": 3.5833,
      "longitude": 98.6667
    },
    {
      "id": "seller-feb98948-c23b-467a-9054-458ddee452d3",
      "companyName": "Alfara",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN DEMAK",
      "latitude": -6.9125,
      "longitude": 110.6937
    },
    {
      "id": "seller-c9f870cf-595c-4a51-bf92-53881cd6f469",
      "companyName": "indra permana",
      "province": "JAWA BARAT",
      "city": "KABUPATEN KARAWANG",
      "latitude": -6.3627,
      "longitude": 107.3622
    },
    {
      "id": "seller-52d98593-8ba4-41d9-8d6a-1e94679b4646",
      "companyName": "Iva Renatha",
      "province": "JAWA TENGAH",
      "city": "KOTA SURAKARTA",
      "latitude": -7.564,
      "longitude": 110.8243
    },
    {
      "id": "seller-dd89e4d9-2e00-4ed2-b696-b59c266f7fbb",
      "companyName": "Ollas Food",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN WONOSOBO",
      "latitude": -7.3563,
      "longitude": 109.9125
    },
    {
      "id": "seller-d33d583f-cf70-4a35-9c23-641730e6f64c",
      "companyName": "Binsar Hutabarat",
      "province": "SUMATERA UTARA",
      "city": "KOTA TANJUNG BALAI",
      "latitude": 2.9583,
      "longitude": 99.8
    },
    {
      "id": "seller-434a80c7-6db0-4f94-9349-2cd6ea28a138",
      "companyName": "Individual - esther",
      "province": "SUMATERA UTARA",
      "city": "KOTA MEDAN",
      "latitude": 3.5833,
      "longitude": 98.6667
    },
    {
      "id": "seller-ecc582c7-360e-4f5a-93b6-5233ff8b279d",
      "companyName": "Azzam Sukses Mandiri",
      "province": "BANTEN",
      "city": "KABUPATEN SERANG",
      "latitude": -6.0815,
      "longitude": 106.0879
    },
    {
      "id": "seller-33aad39f-dab4-4d66-b8ae-e66f379284eb",
      "companyName": "CV.Plastik Sederhana",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BOGOR",
      "latitude": -6.93,
      "longitude": 106.6795
    },
    {
      "id": "seller-69a34d01-7550-4bb8-a5ae-15ecba0a166f",
      "companyName": "Ahmad Faiq",
      "province": "JAWA TENGAH",
      "city": "KABUPATEN REMBANG",
      "latitude": -6.7714,
      "longitude": 111.4383
    },
    {
      "id": "seller-b481f37e-b220-4c48-b95f-550520435873",
      "companyName": "Ian Rachman Dana",
      "province": "JAWA BARAT",
      "city": "KOTA DEPOK",
      "latitude": -6.370662,
      "longitude": 106.832645
    },
    {
      "id": "seller-01612508-3ac3-4fa5-a057-ffccf170f66e",
      "companyName": "PT Saadah Group",
      "province": "JAWA BARAT",
      "city": "KABUPATEN INDRAMAYU",
      "latitude": -6.3328,
      "longitude": 108.3051
    },
    {
      "id": "seller-c8515007-dc34-4dca-8150-fc13dfb51c29",
      "companyName": "limbahbumi",
      "province": "JAWA BARAT",
      "city": "KOTA SUKABUMI",
      "latitude": -6.9367,
      "longitude": 106.9261
    },
    {
      "id": "seller-a6eb2110-a716-45be-b0ee-c9f120e6eed5",
      "companyName": "rama",
      "province": "JAWA TIMUR",
      "city": "KOTA MALANG",
      "latitude": -7.9776,
      "longitude": 112.628
    }
  ];

  constructor() { }

  getAllWasteBanks (): WasteBank[] {
    return this.wasteBanks;
  }
}
