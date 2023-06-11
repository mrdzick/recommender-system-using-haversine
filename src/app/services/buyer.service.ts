import { Injectable } from '@angular/core';
import { Buyer } from '../interfaces/Buyer.interface';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  buyers: Buyer[] = [
    {
      "id": "buyer-cc309c5e-4622-40d0-85c8-646742ee8d1d",
      "companyName": "PT. Herlambang Santoso Tbk",
      "province": "PAPUA BARAT",
      "city": "KABUPATEN FAKFAK",
      "latitude": -2.93079,
      "longitude": 132.30809
    },
    {
      "id": "buyer-89b762fc-034b-4db2-854f-2d508ab792ea",
      "companyName": "PT Cahya Abadi",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA UTARA",
      "latitude": -6.18296,
      "longitude": 106.80122
    },
    {
      "id": "buyer-fad2a7fb-6cf8-4c46-bcd1-0b3e463d20e8",
      "companyName": "JemputSampah",
      "province": "JAWA BARAT",
      "city": "KABUPATEN CIAMIS",
      "latitude": -7.3402,
      "longitude": 108.37195
    },
    {
      "id": "buyer-d43db69b-81ff-4b99-9e81-c940a02cb866",
      "companyName": "Fajar Nusa Indah",
      "province": "JAWA BARAT",
      "city": "KOTA BANDUNG",
      "latitude": -6.90216,
      "longitude": 107.61911
    },
    {
      "id": "buyer-53e51ee7-d519-4937-b995-905bfb159cd1",
      "companyName": "Kimung",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.17054,
      "longitude": 106.636848
    },
    {
      "id": "buyer-4c107c4a-d705-4d1d-88fd-3cacaf47a487",
      "companyName": "PT Rembulan Unggul Selaras",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -6.90216,
      "longitude": 107.61911
    },
    {
      "id": "buyer-017d068d-0b65-4a14-ad3c-e33e87dd45da",
      "companyName": "PT Intco International",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA PUSAT",
      "latitude": -6.18836,
      "longitude": 106.80127
    },
    {
      "id": "buyer-69bf8a75-50fc-4579-87ab-047a8f34d403",
      "companyName": "PT Harvestindo Indonesia",
      "province": "BANTEN",
      "city": "KABUPATEN TANGERANG",
      "latitude": -6.17215,
      "longitude": 106.54839
    },
    {
      "id": "buyer-1cfd9149-1f34-4f1d-96c4-8cf6e96bdb03",
      "companyName": "PT Akusara Karya Buana",
      "province": "DI YOGYAKARTA",
      "city": "KOTA YOGYAKARTA",
      "latitude": -7.83696,
      "longitude": 110.39291
    },
    {
      "id": "buyer-a55b9da5-9501-414f-9c77-6aefbd69bf99",
      "companyName": "PT Almira Global Korporindo",
      "province": "DI YOGYAKARTA",
      "city": "KABUPATEN SLEMAN",
      "latitude": -7.75329,
      "longitude": 110.34728
    },
    {
      "id": "buyer-13a3aed5-1269-4295-801b-063160b0c269",
      "companyName": "PT KKM",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.24331,
      "longitude": 106.993721
    },
    {
      "id": "buyer-4d21b98c-2735-4f9c-b996-6d62add935e0",
      "companyName": "PT Buana Oasis Chemical",
      "province": "JAWA BARAT",
      "city": "KOTA BEKASI",
      "latitude": -6.217348,
      "longitude": 107.053117
    },
    {
      "id": "buyer-3e7417c0-520e-4539-9d70-6b3d46b4643e",
      "companyName": "PT Rembulan Unggul Selaras",
      "province": "DI YOGYAKARTA",
      "city": "KABUPATEN BANTUL",
      "latitude": -7.89814,
      "longitude": 110.34349
    },
    {
      "id": "buyer-0af0a552-c2c7-461e-a931-de21cbe91766",
      "companyName": "PT Solusi Material Indonesia",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.272295,
      "longitude": 106.931156
    },
    {
      "id": "buyer-e96bb6a3-8553-468f-927e-892845a2d842",
      "companyName": "PT Tinkom Prima Sedaya",
      "province": "DI YOGYAKARTA",
      "city": "KABUPATEN SLEMAN",
      "latitude": -7.695676,
      "longitude": 110.319088
    },
    {
      "id": "buyer-c7ed24df-9c01-4083-92d6-35de38062a56",
      "companyName": "PT Walindo Samman Sentosa",
      "province": "DI YOGYAKARTA",
      "city": "KABUPATEN SLEMAN",
      "latitude": -7.77049,
      "longitude": 110.3588
    },
    {
      "id": "buyer-13fa2f83-8a9d-443e-afc4-b37f45f78fbe",
      "companyName": "PT Zenith Material Solution",
      "province": "JAWA BARAT",
      "city": "KOTA BEKASI",
      "latitude": -6.175208,
      "longitude": 107.087233
    },
    {
      "id": "buyer-7589aa14-9ab7-4bc0-ae23-fd77a8901ef9",
      "companyName": "UD Sumber Asri Sejahtera",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.562117,
      "longitude": 111.461714
    },
    {
      "id": "buyer-8814e7af-97e8-4158-bc31-b15ce2f1a4b1",
      "companyName": "PT Chelsea Jaya Samudra",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.34347,
      "longitude": 107.12037
    },
    {
      "id": "buyer-efdc0907-bca0-4ed6-9bb9-70347d6e6713",
      "companyName": "PT Kehidupan Boga Nusantara",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.38976,
      "longitude": 107.19696
    },
    {
      "id": "buyer-f7492744-68d6-4058-8fe4-293d643ab48c",
      "companyName": "PT pengusaha karunia alam",
      "province": "JAWA BARAT",
      "city": "KABUPATEN GARUT",
      "latitude": -7.10992,
      "longitude": 107.887273
    },
    {
      "id": "buyer-8935405c-2a45-4901-9f14-82c1f4b2fef9",
      "companyName": "Javina",
      "province": "JAWA TIMUR",
      "city": "KOTA MALANG",
      "latitude": -8.036788,
      "longitude": 112.71521
    },
    {
      "id": "buyer-68751cd5-3225-4bc4-914f-772165a133f6",
      "companyName": "ROY PET",
      "province": "JAWA BARAT",
      "city": "KOTA CIMAHI",
      "latitude": -6.90965138629064,
      "longitude": 107.52130928372024
    },
    {
      "id": "buyer-866d1657-133f-4c9c-b367-5a9bb536a4a2",
      "companyName": "CV anugerah Abadi Plasindo",
      "province": "JAWA BARAT",
      "city": "KOTA BANDUNG",
      "latitude": -6.974437702995138,
      "longitude": 107.68726686055335
    },
    {
      "id": "buyer-9151ed6f-3a99-4d7c-aad8-b56290ca4b17",
      "companyName": "Ammar toserba",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BEKASI",
      "latitude": -6.248000529255696,
      "longitude": 107.0824331828433
    },
    {
      "id": "buyer-75bd49f5-73db-41e4-be57-029082f43673",
      "companyName": "FRANKY GUNADI",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA TIMUR",
      "latitude": -6.254932198823869,
      "longitude": 106.91568906587683
    },
    {
      "id": "buyer-24d4d2b2-0b63-4f68-b5b7-504caf3fab90",
      "companyName": "CV Budi bersinar",
      "province": "JAWA TENGAH",
      "city": "KOTA SEMARANG",
      "latitude": -7.076698749181311,
      "longitude": 110.40873259277613
    },
    {
      "id": "buyer-2abbb92b-2418-4cdb-a8c3-a1bc000cca4b",
      "companyName": "CV empat putra",
      "province": "JAWA TENGAH",
      "city": "KOTA SEMARANG",
      "latitude": -6.967853879198602,
      "longitude": 110.43631914440098
    },
    {
      "id": "buyer-21cff63c-3a67-4179-b5a0-a5e66b6ccf8e",
      "companyName": "YayasanB3",
      "province": "JAWA TENGAH",
      "city": "KOTA SEMARANG",
      "latitude": -7.014436735815656,
      "longitude": 110.35708444298868
    },
    {
      "id": "buyer-55b3c0ab-ce4a-41e4-bc20-5c8cb690adcc",
      "companyName": "Pusat Inovasi Agroteknologi UGM",
      "province": "DI YOGYAKARTA",
      "city": "KABUPATEN SLEMAN",
      "latitude": -7.7958755408852545,
      "longitude": 110.46531419944579
    },
    {
      "id": "buyer-87288f20-e76d-441f-ae66-a9978fb803df",
      "companyName": "UD Berkah Saritirta",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN GRESIK",
      "latitude": -7.29039,
      "longitude": 112.55597
    },
    {
      "id": "buyer-3cda7930-2996-4dd1-a017-5c4f321f7738",
      "companyName": "pa mantan",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.634787533108653,
      "longitude": 111.53742188941649
    },
    {
      "id": "buyer-3d39a430-c398-4020-943e-2885ed984a7d",
      "companyName": "pak mus",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.619518186588029,
      "longitude": 111.50505590574807
    },
    {
      "id": "buyer-eb44ed48-9f94-4ee4-a919-9e25ac21c141",
      "companyName": "pa nanang",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.601989853126213,
      "longitude": 111.54152718968243
    },
    {
      "id": "buyer-9769b26f-793f-4f89-b89c-868f7511b0a9",
      "companyName": "Pak badu badu",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.606245943134812,
      "longitude": 111.54425060357505
    },
    {
      "id": "buyer-ba1abb34-7eda-417c-bd37-822036cbf4da",
      "companyName": "Pak Sarjono",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.607309959041196,
      "longitude": 111.53655745630172
    },
    {
      "id": "buyer-6ead0ce4-781f-4bdb-a313-03f4eca28e1e",
      "companyName": "Pak Darmin",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.607103067266078,
      "longitude": 111.5340427712111
    },
    {
      "id": "buyer-9e9cf27f-1c6d-4607-bdc8-36233535db25",
      "companyName": "Pak Sarmin",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.60780995920276,
      "longitude": 111.52952874803972
    },
    {
      "id": "buyer-02192e19-83e5-495f-888d-1435ea53e828",
      "companyName": "pak fauzi",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.612513502630357,
      "longitude": 111.53554743463312
    },
    {
      "id": "buyer-c319aa47-bc8e-4525-857d-7074faae8d90",
      "companyName": "cv plasindo",
      "province": "JAWA BARAT",
      "city": "KABUPATEN BANDUNG",
      "latitude": -6.97073,
      "longitude": 107.76597
    },
    {
      "id": "buyer-54dcd4c4-bd50-4a23-9c03-6736c4241bd8",
      "companyName": "Bu jami",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.617404427893748,
      "longitude": 111.52695154630246
    },
    {
      "id": "buyer-96334b6a-2ed0-497a-b29d-502dfc72a401",
      "companyName": "bu mirna",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6155310670245004,
      "longitude": 111.53250915093098
    },
    {
      "id": "buyer-8144730b-456e-45ae-a29a-0a02e5e9afbe",
      "companyName": "WM Tech",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA BARAT",
      "latitude": -6.14264,
      "longitude": 106.79879
    },
    {
      "id": "buyer-6ea188ff-8cfc-48a8-abc7-5de1cd837d48",
      "companyName": "DERMAWAN PLASTIK",
      "province": "JAWA TIMUR",
      "city": "KOTA SURABAYA",
      "latitude": -7.2759,
      "longitude": 112.78298
    },
    {
      "id": "buyer-bb2fb9b1-a063-4fd5-9ed8-721282ac1c79",
      "companyName": "Individual - Pak Bani (individu)",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6301,
      "longitude": 111.5167
    },
    {
      "id": "buyer-d9914b63-1801-487c-88a7-86c116c13ad3",
      "companyName": "Individual - Pak Hari (individu)",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6396,
      "longitude": 111.5179
    },
    {
      "id": "buyer-2ec0c213-62dd-4ac6-a669-c5e4f9453c28",
      "companyName": "Individual - Pak Han",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6305,
      "longitude": 111.5258
    },
    {
      "id": "buyer-9a0d7935-6000-408b-9857-b83a66b56509",
      "companyName": "Individual - rasip",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6282,
      "longitude": 111.5255
    },
    {
      "id": "buyer-871eaa86-f87e-41ff-8bdc-e70ed0ce80f9",
      "companyName": "Individual - sambang",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6274,
      "longitude": 111.5279
    },
    {
      "id": "buyer-a15d5bd1-17b6-4d2e-87db-0e63dfb86c2a",
      "companyName": "Individual - rimaria",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6298,
      "longitude": 111.5303
    },
    {
      "id": "buyer-bc0521b4-c455-421d-84b1-c9e1a392b4ff",
      "companyName": "Individual - Bais",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6337,
      "longitude": 111.5329
    },
    {
      "id": "buyer-3e288b4b-56d1-4917-a6d7-09d14e790646",
      "companyName": "Individual - Pak Jono",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6411,
      "longitude": 111.5334
    },
    {
      "id": "buyer-257a8028-4388-41af-8e41-7a8d3639fdb6",
      "companyName": "Individual - sukri",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6397,
      "longitude": 111.5377
    },
    {
      "id": "buyer-a3baae21-8123-4bfe-a8b1-5833b12281af",
      "companyName": "Individual - mahmud",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6322,
      "longitude": 111.5356
    },
    {
      "id": "buyer-e17d40c0-8f01-406c-ae30-1169d1775324",
      "companyName": "Individual - samsuri",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6271,
      "longitude": 111.5348
    },
    {
      "id": "buyer-2ef34808-4af8-4647-8e65-fa64ec2a7b55",
      "companyName": "Individual - marno",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6222,
      "longitude": 111.5294
    },
    {
      "id": "buyer-d7ed7423-e764-4c92-995d-d39deb4aecb9",
      "companyName": "Individual - m fauzi",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.60642,
      "longitude": 111.53422
    },
    {
      "id": "buyer-195a6a27-e753-4783-9be1-aea8f39bf91a",
      "companyName": "Individual - Farida",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA SELATAN",
      "latitude": -6.2659,
      "longitude": 106.8106
    },
    {
      "id": "buyer-bfc5cb4e-c07a-4c42-a645-b41df057d558",
      "companyName": "Individual - Nuraini",
      "province": "BANTEN",
      "city": "KOTA TANGERANG",
      "latitude": -6.1783,
      "longitude": 106.6319
    },
    {
      "id": "buyer-24d23426-af08-4c5f-b879-9e14360c9946",
      "companyName": "Individual - Geldy Indrapradana",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA SELATAN",
      "latitude": -6.2607,
      "longitude": 106.7816
    },
    {
      "id": "buyer-73596f76-3721-4574-8471-c68698353052",
      "companyName": "Individual - Patricia",
      "province": "DKI JAKARTA",
      "city": "KOTA JAKARTA UTARA",
      "latitude": -6.1286,
      "longitude": 106.8361
    },
    {
      "id": "buyer-cb274de0-807e-4549-97f8-dbbb93931580",
      "companyName": "Individual - Dodi wijayanto",
      "province": "JAWA TIMUR",
      "city": "KOTA SURABAYA",
      "latitude": -7.2575,
      "longitude": 112.7521
    },
    {
      "id": "buyer-b54a4ed9-9afc-4fb7-9b1a-b1ab0bd0b853",
      "companyName": "Rumah plastik recycle barokah prabumulih",
      "province": "SUMATERA SELATAN",
      "city": "KOTA PRABUMULIH",
      "latitude": -3.4391,
      "longitude": 104.2306
    },
    {
      "id": "buyer-8cf18c1d-82a9-42c3-940d-cc04b07a58a3",
      "companyName": "Individual - Pak suparno",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6239,
      "longitude": 111.5286
    },
    {
      "id": "buyer-8f5a832b-02f8-4c56-a4b5-1fb3798e9c83",
      "companyName": "Individual - Sobari",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6247,
      "longitude": 111.5268
    },
    {
      "id": "buyer-aa7ababe-3e1b-4d97-b528-4cfb6939d900",
      "companyName": "Individual - Subandi",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6229,
      "longitude": 111.5253
    },
    {
      "id": "buyer-0d1c418d-d0a8-471e-bc69-abf10e648647",
      "companyName": "Individual - Sayit",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6205,
      "longitude": 111.5242
    },
    {
      "id": "buyer-c3eadcaf-05ed-4b8b-b8cc-5546e072ac62",
      "companyName": "Individual - bowo",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6168,
      "longitude": 111.5219
    },
    {
      "id": "buyer-1c3a77bd-eb77-44a0-93f5-55c58b89a097",
      "companyName": "Individual - samiun",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6186,
      "longitude": 111.5201
    },
    {
      "id": "buyer-5de18332-b1bf-405c-813e-63a16a81f951",
      "companyName": "Individual - sabar",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6161,
      "longitude": 111.5183
    },
    {
      "id": "buyer-2629027f-5026-47c3-a57c-e0deb17d7dc3",
      "companyName": "Individual - Untung",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6175,
      "longitude": 111.5171
    },
    {
      "id": "buyer-4ab1df6c-ccd3-4e70-a20d-7ce53c0b1fd2",
      "companyName": "Individual - Mahmud",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6159,
      "longitude": 111.5152
    },
    {
      "id": "buyer-bd1df796-6c0d-4ff8-a7cd-f59db849d5a0",
      "companyName": "Individual - yatno",
      "province": "JAWA TIMUR",
      "city": "KABUPATEN MADIUN",
      "latitude": -7.6132,
      "longitude": 111.5134
    }
  ];

  constructor() { }

  getAllBuyers() {
    return this.buyers;
  }
}
