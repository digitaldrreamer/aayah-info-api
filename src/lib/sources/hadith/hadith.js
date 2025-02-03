import logger from "$lib/logger.js";
import * as Sentry from '@sentry/sveltekit'

const hadithBooks = {
    "abudawud": {
        "id": "abudawud",
        "name": "Sunan Abu Dawud",
        "collection": [
            {
                "name": "ara-abudawud",
                "book": "abudawud",
                "author": "Unknown",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-abudawud.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-abudawud.min.json"
            },
            {
                "name": "eng-abudawud",
                "book": "abudawud",
                "author": "Unknown",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-abudawud.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-abudawud.min.json"
            }
        ],
        "sections": {
            "0": "",
            "1": "Purification (Kitab Al-Taharah)",
            "2": "Prayer (Kitab Al-Salat)",
            "3": "The Book Of The Prayer For Rain (Kitab al-Istisqa')",
            "4": "Prayer (Kitab Al-Salat): Detailed Rules of Law about the Prayer during Journey",
            "5": "Prayer (Kitab Al-Salat): Voluntary Prayers",
            "6": "Prayer (Kitab Al-Salat): Detailed Injunctions about Ramadan",
            "7": "Prayer (Kitab Al-Salat): Prostration while reciting the Qur'an",
            "8": "Prayer (Kitab Al-Salat): Detailed Injunctions about Witr",
            "9": "Zakat (Kitab Al-Zakat)",
            "10": "The Book of Lost and Found Items",
            "11": "The Rites of Hajj (Kitab Al-Manasik Wa'l-Hajj)",
            "12": "Marriage (Kitab Al-Nikah)",
            "13": "Divorce (Kitab Al-Talaq)",
            "14": "Fasting (Kitab Al-Siyam)",
            "15": "Jihad (Kitab Al-Jihad)",
            "16": "Sacrifice (Kitab Al-Dahaya)",
            "17": "Game (Kitab Al-Said)",
            "18": "Wills (Kitab Al-Wasaya)",
            "19": "Shares of Inheritance (Kitab Al-Fara'id)",
            "20": "Tribute, Spoils, and Rulership (Kitab Al-Kharaj, Wal-Fai' Wal-Imarah)",
            "21": "Funerals (Kitab Al-Jana'iz)",
            "22": "Oaths and Vows (Kitab Al-Aiman Wa Al-Nudhur)",
            "23": "Commercial Transactions (Kitab Al-Buyu)",
            "24": "Wages (Kitab Al-Ijarah)",
            "25": "The Office of the Judge (Kitab Al-Aqdiyah)",
            "26": "Knowledge (Kitab Al-Ilm)",
            "27": "Drinks (Kitab Al-Ashribah)",
            "28": "Foods (Kitab Al-At'imah)",
            "29": "Medicine (Kitab Al-Tibb)",
            "30": "Divination and Omens (Kitab Al-Kahanah Wa Al-Tatayyur)",
            "31": "The Book of Manumission of Slaves",
            "32": "Dialects and Readings of the Qur'an (Kitab Al-Huruf Wa Al-Qira'at)",
            "33": "Hot Baths (Kitab Al-Hammam)",
            "34": "Clothing (Kitab Al-Libas)",
            "35": "Combing the Hair (Kitab Al-Tarajjul)",
            "36": "Signet-Rings (Kitab Al-Khatam)",
            "37": "Trials and Fierce Battles (Kitab Al-Fitan Wa Al-Malahim)",
            "38": "The Promised Deliverer (Kitab Al-Mahdi)",
            "39": "Battles (Kitab Al-Malahim)",
            "40": "Prescribed Punishments (Kitab Al-Hudud)",
            "41": "Types of Blood-Wit (Kitab Al-Diyat)",
            "42": "Model Behavior of the Prophet (Kitab Al-Sunnah)",
            "43": "General Behavior (Kitab Al-Adab)"
        },
        "last_hadithnumber": 5274,
        "section_details": {
            "0": {
                "hadithnumber_first": 0,
                "hadithnumber_last": 0,
                "arabicnumber_first": 0,
                "arabicnumber_last": 0
            },
            "1": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 390,
                "arabicnumber_first": 1,
                "arabicnumber_last": 390
            },
            "2": {
                "hadithnumber_first": 391,
                "hadithnumber_last": 1160,
                "arabicnumber_first": 391,
                "arabicnumber_last": 1160
            },
            "3": {
                "hadithnumber_first": 1161,
                "hadithnumber_last": 1197,
                "arabicnumber_first": 1161,
                "arabicnumber_last": 1197
            },
            "4": {
                "hadithnumber_first": 1198,
                "hadithnumber_last": 1249,
                "arabicnumber_first": 1198,
                "arabicnumber_last": 1249
            },
            "5": {
                "hadithnumber_first": 1250,
                "hadithnumber_last": 1370,
                "arabicnumber_first": 1250,
                "arabicnumber_last": 1370
            },
            "6": {
                "hadithnumber_first": 1371,
                "hadithnumber_last": 1400,
                "arabicnumber_first": 1371,
                "arabicnumber_last": 1400
            },
            "7": {
                "hadithnumber_first": 1401,
                "hadithnumber_last": 1415,
                "arabicnumber_first": 1401,
                "arabicnumber_last": 1415
            },
            "8": {
                "hadithnumber_first": 1416,
                "hadithnumber_last": 1555,
                "arabicnumber_first": 1416,
                "arabicnumber_last": 1555
            },
            "9": {
                "hadithnumber_first": 1556,
                "hadithnumber_last": 1700,
                "arabicnumber_first": 1556,
                "arabicnumber_last": 1700
            },
            "10": {
                "hadithnumber_first": 1701,
                "hadithnumber_last": 1720,
                "arabicnumber_first": 1701,
                "arabicnumber_last": 1720
            },
            "11": {
                "hadithnumber_first": 1721,
                "hadithnumber_last": 2045,
                "arabicnumber_first": 1721,
                "arabicnumber_last": 2045
            },
            "12": {
                "hadithnumber_first": 2046,
                "hadithnumber_last": 2174,
                "arabicnumber_first": 2046,
                "arabicnumber_last": 2174
            },
            "13": {
                "hadithnumber_first": 2175,
                "hadithnumber_last": 2312,
                "arabicnumber_first": 2175,
                "arabicnumber_last": 2312
            },
            "14": {
                "hadithnumber_first": 2313,
                "hadithnumber_last": 2476,
                "arabicnumber_first": 2313,
                "arabicnumber_last": 2476
            },
            "15": {
                "hadithnumber_first": 2477,
                "hadithnumber_last": 2787,
                "arabicnumber_first": 2477,
                "arabicnumber_last": 2787
            },
            "16": {
                "hadithnumber_first": 2788,
                "hadithnumber_last": 2843,
                "arabicnumber_first": 2788,
                "arabicnumber_last": 2843
            },
            "17": {
                "hadithnumber_first": 2844,
                "hadithnumber_last": 2861,
                "arabicnumber_first": 2844,
                "arabicnumber_last": 2861
            },
            "18": {
                "hadithnumber_first": 2862,
                "hadithnumber_last": 2884,
                "arabicnumber_first": 2862,
                "arabicnumber_last": 2884
            },
            "19": {
                "hadithnumber_first": 2885,
                "hadithnumber_last": 2927,
                "arabicnumber_first": 2885,
                "arabicnumber_last": 2927
            },
            "20": {
                "hadithnumber_first": 2928,
                "hadithnumber_last": 3088,
                "arabicnumber_first": 2928,
                "arabicnumber_last": 3088
            },
            "21": {
                "hadithnumber_first": 3089,
                "hadithnumber_last": 3241,
                "arabicnumber_first": 3089,
                "arabicnumber_last": 3241
            },
            "22": {
                "hadithnumber_first": 3242,
                "hadithnumber_last": 3325,
                "arabicnumber_first": 3242,
                "arabicnumber_last": 3325
            },
            "23": {
                "hadithnumber_first": 3326,
                "hadithnumber_last": 3415,
                "arabicnumber_first": 3326,
                "arabicnumber_last": 3415
            },
            "24": {
                "hadithnumber_first": 3416,
                "hadithnumber_last": 3570,
                "arabicnumber_first": 3416,
                "arabicnumber_last": 3570
            },
            "25": {
                "hadithnumber_first": 3571,
                "hadithnumber_last": 3640,
                "arabicnumber_first": 3571,
                "arabicnumber_last": 3640
            },
            "26": {
                "hadithnumber_first": 3641,
                "hadithnumber_last": 3668,
                "arabicnumber_first": 3641,
                "arabicnumber_last": 3668
            },
            "27": {
                "hadithnumber_first": 3669,
                "hadithnumber_last": 3735,
                "arabicnumber_first": 3669,
                "arabicnumber_last": 3735
            },
            "28": {
                "hadithnumber_first": 3736,
                "hadithnumber_last": 3854,
                "arabicnumber_first": 3736,
                "arabicnumber_last": 3854
            },
            "29": {
                "hadithnumber_first": 3855,
                "hadithnumber_last": 3903,
                "arabicnumber_first": 3855,
                "arabicnumber_last": 3903
            },
            "30": {
                "hadithnumber_first": 3904,
                "hadithnumber_last": 3925,
                "arabicnumber_first": 3904,
                "arabicnumber_last": 3925
            },
            "31": {
                "hadithnumber_first": 3926,
                "hadithnumber_last": 3968,
                "arabicnumber_first": 3926,
                "arabicnumber_last": 3968
            },
            "32": {
                "hadithnumber_first": 3969,
                "hadithnumber_last": 4008,
                "arabicnumber_first": 3969,
                "arabicnumber_last": 4008
            },
            "33": {
                "hadithnumber_first": 4009,
                "hadithnumber_last": 4019,
                "arabicnumber_first": 4009,
                "arabicnumber_last": 4019
            },
            "34": {
                "hadithnumber_first": 4020,
                "hadithnumber_last": 4158,
                "arabicnumber_first": 4020,
                "arabicnumber_last": 4158
            },
            "35": {
                "hadithnumber_first": 4159,
                "hadithnumber_last": 4213,
                "arabicnumber_first": 4159,
                "arabicnumber_last": 4213
            },
            "36": {
                "hadithnumber_first": 4214,
                "hadithnumber_last": 4239,
                "arabicnumber_first": 4214,
                "arabicnumber_last": 4239
            },
            "37": {
                "hadithnumber_first": 4240,
                "hadithnumber_last": 4278,
                "arabicnumber_first": 4240,
                "arabicnumber_last": 4278
            },
            "38": {
                "hadithnumber_first": 4279,
                "hadithnumber_last": 4290,
                "arabicnumber_first": 4279,
                "arabicnumber_last": 4290
            },
            "39": {
                "hadithnumber_first": 4291,
                "hadithnumber_last": 4350,
                "arabicnumber_first": 4291,
                "arabicnumber_last": 4350
            },
            "40": {
                "hadithnumber_first": 4351,
                "hadithnumber_last": 4493,
                "arabicnumber_first": 4351,
                "arabicnumber_last": 4493
            },
            "41": {
                "hadithnumber_first": 4494,
                "hadithnumber_last": 4595,
                "arabicnumber_first": 4494,
                "arabicnumber_last": 4595
            },
            "42": {
                "hadithnumber_first": 4596,
                "hadithnumber_last": 4772,
                "arabicnumber_first": 4596,
                "arabicnumber_last": 4772
            },
            "43": {
                "hadithnumber_first": 4773,
                "hadithnumber_last": 5274,
                "arabicnumber_first": 4773,
                "arabicnumber_last": 5274
            }
        }
    },
    "bukhari": {
        "id": "bukhari",
        "name": "Sahih al Bukhari",
        "collection": [
            {
                "name": "ara-bukhari",
                "book": "bukhari",
                "author": "Unknown",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.min.json"
            },
            {
                "name": "eng-bukhari",
                "book": "bukhari",
                "author": "Muhsin Khan",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari.min.json"
            }
        ],
        "sections": {
            "0": "",
            "1": "Revelation",
            "2": "Belief",
            "3": "Knowledge",
            "4": "Ablutions (Wudu')",
            "5": "Bathing (Ghusl)",
            "6": "Menstrual Periods",
            "7": "Rubbing hands and feet with dust (Tayammum)",
            "8": "Prayers (Salat)",
            "9": "Times of the Prayers",
            "10": "Call to Prayers (Adhaan)",
            "11": "Friday Prayer",
            "12": "Fear Prayer",
            "13": "The Two Festivals (Eids)",
            "14": "Witr Prayer",
            "15": "Invoking Allah for Rain (Istisqaa)",
            "16": "Eclipses",
            "17": "Prostration During Recital of Qur'an",
            "18": "Shortening the Prayers (At-Taqseer)",
            "19": "Prayer at Night (Tahajjud)",
            "20": "Virtues of Prayer at Masjid Makkah and Madinah",
            "21": "Actions while Praying",
            "22": "Forgetfulness in Prayer",
            "23": "Funerals (Al-Janaa'iz)",
            "24": "Obligatory Charity Tax (Zakat)",
            "25": "Hajj (Pilgrimage)",
            "26": "`Umrah (Minor pilgrimage)",
            "27": "Pilgrims Prevented from Completing the Pilgrimage",
            "28": "Penalty of Hunting while on Pilgrimage",
            "29": "Virtues of Madinah",
            "30": "Fasting",
            "31": "Praying at Night in Ramadaan (Taraweeh)",
            "32": "Virtues of the Night of Qadr",
            "33": "Retiring to a Mosque for Remembrance of Allah (I'tikaf)",
            "34": "Sales and Trade",
            "35": "Sales in which a Price is paid for Goods to be Delivered Later (As-Salam)",
            "36": "Shuf'a",
            "37": "Hiring",
            "38": "Transferance of a Debt from One Person to Another (Al-Hawaala)",
            "39": "Kafalah",
            "40": "Representation, Authorization, Business by Proxy",
            "41": "Agriculture",
            "42": "Distribution of Water",
            "43": "Loans, Payment of Loans, Freezing of Property, Bankruptcy",
            "44": "Khusoomaat",
            "45": "Lost Things Picked up by Someone (Luqatah)",
            "46": "Oppressions",
            "47": "Partnership",
            "48": "Mortgaging",
            "49": "Manumission of Slaves",
            "50": "Makaatib",
            "51": "Gifts",
            "52": "Witnesses",
            "53": "Peacemaking",
            "54": "Conditions",
            "55": "Wills and Testaments (Wasaayaa)",
            "56": "Fighting for the Cause of Allah (Jihaad)",
            "57": "One-fifth of Booty to the Cause of Allah (Khumus)",
            "58": "Jizyah and Mawaada'ah",
            "59": "Beginning of Creation",
            "60": "Prophets",
            "61": "Virtues and Merits of the Prophet (pbuh) and his Companions",
            "62": "Companions of the Prophet",
            "63": "Merits of the Helpers in Madinah (Ansaar)",
            "64": "Military Expeditions led by the Prophet (pbuh) (Al-Maghaazi)",
            "65": "Prophetic Commentary on the Qur'an (Tafseer of the Prophet (pbuh))",
            "66": "Virtues of the Qur'an",
            "67": "Wedlock, Marriage (Nikaah)",
            "68": "Divorce",
            "69": "Supporting the Family",
            "70": "Food, Meals",
            "71": "Sacrifice on Occasion of Birth (`Aqiqa)",
            "72": "Hunting, Slaughtering",
            "73": "Al-Adha Festival Sacrifice (Adaahi)",
            "74": "Drinks",
            "75": "Patients",
            "76": "Medicine",
            "77": "Dress",
            "78": "Good Manners and Form (Al-Adab)",
            "79": "Asking Permission",
            "80": "Invocations",
            "81": "To make the Heart Tender (Ar-Riqaq)",
            "82": "Divine Will (Al-Qadar)",
            "83": "Oaths and Vows",
            "84": "Expiation for Unfulfilled Oaths",
            "85": "Laws of Inheritance (Al-Faraa'id)",
            "86": "Limits and Punishments set by Allah (Hudood)",
            "87": "Blood Money (Ad-Diyat)",
            "88": "Apostates",
            "89": "(Statements made under) Coercion",
            "90": "Tricks",
            "91": "Interpretation of Dreams",
            "92": "Afflictions and the End of the World",
            "93": "Judgments (Ahkaam)",
            "94": "Wishes",
            "95": "Accepting Information Given by a Truthful Person",
            "96": "Holding Fast to the Qur'an and Sunnah",
            "97": "Oneness, Uniqueness of Allah (Tawheed)"
        },
        "last_hadithnumber": 7563,
        "section_details": {
            "0": {
                "hadithnumber_first": 0,
                "hadithnumber_last": 0,
                "arabicnumber_first": 0,
                "arabicnumber_last": 0
            },
            "1": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 7,
                "arabicnumber_first": 1,
                "arabicnumber_last": 7
            },
            "2": {
                "hadithnumber_first": 8,
                "hadithnumber_last": 58,
                "arabicnumber_first": 8,
                "arabicnumber_last": 58
            },
            "3": {
                "hadithnumber_first": 59,
                "hadithnumber_last": 134,
                "arabicnumber_first": 59,
                "arabicnumber_last": 134
            },
            "4": {
                "hadithnumber_first": 135,
                "hadithnumber_last": 247,
                "arabicnumber_first": 135,
                "arabicnumber_last": 247
            },
            "5": {
                "hadithnumber_first": 248,
                "hadithnumber_last": 293,
                "arabicnumber_first": 248,
                "arabicnumber_last": 293
            },
            "6": {
                "hadithnumber_first": 294,
                "hadithnumber_last": 333,
                "arabicnumber_first": 294,
                "arabicnumber_last": 333
            },
            "7": {
                "hadithnumber_first": 334,
                "hadithnumber_last": 348,
                "arabicnumber_first": 334,
                "arabicnumber_last": 348
            },
            "8": {
                "hadithnumber_first": 349,
                "hadithnumber_last": 520,
                "arabicnumber_first": 349,
                "arabicnumber_last": 520
            },
            "9": {
                "hadithnumber_first": 522,
                "hadithnumber_last": 602,
                "arabicnumber_first": 522,
                "arabicnumber_last": 602
            },
            "10": {
                "hadithnumber_first": 603,
                "hadithnumber_last": 875,
                "arabicnumber_first": 603,
                "arabicnumber_last": 875
            },
            "11": {
                "hadithnumber_first": 876,
                "hadithnumber_last": 941,
                "arabicnumber_first": 876,
                "arabicnumber_last": 941
            },
            "12": {
                "hadithnumber_first": 942,
                "hadithnumber_last": 947,
                "arabicnumber_first": 942,
                "arabicnumber_last": 947
            },
            "13": {
                "hadithnumber_first": 948,
                "hadithnumber_last": 989,
                "arabicnumber_first": 948,
                "arabicnumber_last": 989
            },
            "14": {
                "hadithnumber_first": 990,
                "hadithnumber_last": 1004,
                "arabicnumber_first": 990,
                "arabicnumber_last": 1004
            },
            "15": {
                "hadithnumber_first": 1005,
                "hadithnumber_last": 1039,
                "arabicnumber_first": 1005,
                "arabicnumber_last": 1039
            },
            "16": {
                "hadithnumber_first": 1040,
                "hadithnumber_last": 1066,
                "arabicnumber_first": 1040,
                "arabicnumber_last": 1066
            },
            "17": {
                "hadithnumber_first": 1067,
                "hadithnumber_last": 1079,
                "arabicnumber_first": 1067,
                "arabicnumber_last": 1079
            },
            "18": {
                "hadithnumber_first": 1080,
                "hadithnumber_last": 1119,
                "arabicnumber_first": 1080,
                "arabicnumber_last": 1119
            },
            "19": {
                "hadithnumber_first": 1120,
                "hadithnumber_last": 1187,
                "arabicnumber_first": 1120,
                "arabicnumber_last": 1187
            },
            "20": {
                "hadithnumber_first": 1188,
                "hadithnumber_last": 1197,
                "arabicnumber_first": 1188,
                "arabicnumber_last": 1197
            },
            "21": {
                "hadithnumber_first": 1198,
                "hadithnumber_last": 1223,
                "arabicnumber_first": 1198,
                "arabicnumber_last": 1223
            },
            "22": {
                "hadithnumber_first": 1224,
                "hadithnumber_last": 1236,
                "arabicnumber_first": 1224,
                "arabicnumber_last": 1236
            },
            "23": {
                "hadithnumber_first": 1237,
                "hadithnumber_last": 1394,
                "arabicnumber_first": 1237,
                "arabicnumber_last": 1394
            },
            "24": {
                "hadithnumber_first": 1395,
                "hadithnumber_last": 1512,
                "arabicnumber_first": 1395,
                "arabicnumber_last": 1512
            },
            "25": {
                "hadithnumber_first": 1513,
                "hadithnumber_last": 1772,
                "arabicnumber_first": 1513,
                "arabicnumber_last": 1772
            },
            "26": {
                "hadithnumber_first": 1773,
                "hadithnumber_last": 1805,
                "arabicnumber_first": 1773,
                "arabicnumber_last": 1805
            },
            "27": {
                "hadithnumber_first": 1806,
                "hadithnumber_last": 1820,
                "arabicnumber_first": 1806,
                "arabicnumber_last": 1820
            },
            "28": {
                "hadithnumber_first": 1821,
                "hadithnumber_last": 1866,
                "arabicnumber_first": 1821,
                "arabicnumber_last": 1866
            },
            "29": {
                "hadithnumber_first": 1867,
                "hadithnumber_last": 1890,
                "arabicnumber_first": 1867,
                "arabicnumber_last": 1890
            },
            "30": {
                "hadithnumber_first": 1891,
                "hadithnumber_last": 2007,
                "arabicnumber_first": 1891,
                "arabicnumber_last": 2007
            },
            "31": {
                "hadithnumber_first": 2008,
                "hadithnumber_last": 2013,
                "arabicnumber_first": 2008,
                "arabicnumber_last": 2013
            },
            "32": {
                "hadithnumber_first": 2014,
                "hadithnumber_last": 2024,
                "arabicnumber_first": 2014,
                "arabicnumber_last": 2024
            },
            "33": {
                "hadithnumber_first": 2025,
                "hadithnumber_last": 2046,
                "arabicnumber_first": 2025,
                "arabicnumber_last": 2046
            },
            "34": {
                "hadithnumber_first": 2047,
                "hadithnumber_last": 2238,
                "arabicnumber_first": 2047,
                "arabicnumber_last": 2238
            },
            "35": {
                "hadithnumber_first": 2239,
                "hadithnumber_last": 2256,
                "arabicnumber_first": 2239,
                "arabicnumber_last": 2256
            },
            "36": {
                "hadithnumber_first": 2257,
                "hadithnumber_last": 2259,
                "arabicnumber_first": 2257,
                "arabicnumber_last": 2259
            },
            "37": {
                "hadithnumber_first": 2260,
                "hadithnumber_last": 2286,
                "arabicnumber_first": 2260,
                "arabicnumber_last": 2286
            },
            "38": {
                "hadithnumber_first": 2287,
                "hadithnumber_last": 2289,
                "arabicnumber_first": 2287,
                "arabicnumber_last": 2289
            },
            "39": {
                "hadithnumber_first": 2290,
                "hadithnumber_last": 2298,
                "arabicnumber_first": 2290,
                "arabicnumber_last": 2298
            },
            "40": {
                "hadithnumber_first": 2299,
                "hadithnumber_last": 2319,
                "arabicnumber_first": 2299,
                "arabicnumber_last": 2319
            },
            "41": {
                "hadithnumber_first": 2320,
                "hadithnumber_last": 2350,
                "arabicnumber_first": 2320,
                "arabicnumber_last": 2350
            },
            "42": {
                "hadithnumber_first": 2351,
                "hadithnumber_last": 2383,
                "arabicnumber_first": 2351,
                "arabicnumber_last": 2383
            },
            "43": {
                "hadithnumber_first": 2385,
                "hadithnumber_last": 2409,
                "arabicnumber_first": 2385,
                "arabicnumber_last": 2409
            },
            "44": {
                "hadithnumber_first": 2410,
                "hadithnumber_last": 2425,
                "arabicnumber_first": 2410,
                "arabicnumber_last": 2425
            },
            "45": {
                "hadithnumber_first": 2426,
                "hadithnumber_last": 2439,
                "arabicnumber_first": 2426,
                "arabicnumber_last": 2439
            },
            "46": {
                "hadithnumber_first": 2440,
                "hadithnumber_last": 2482,
                "arabicnumber_first": 2440,
                "arabicnumber_last": 2482
            },
            "47": {
                "hadithnumber_first": 2483,
                "hadithnumber_last": 2507,
                "arabicnumber_first": 2483,
                "arabicnumber_last": 2507
            },
            "48": {
                "hadithnumber_first": 2508,
                "hadithnumber_last": 2515,
                "arabicnumber_first": 2508,
                "arabicnumber_last": 2515
            },
            "49": {
                "hadithnumber_first": 2517,
                "hadithnumber_last": 2559,
                "arabicnumber_first": 2517,
                "arabicnumber_last": 2559
            },
            "50": {
                "hadithnumber_first": 2560,
                "hadithnumber_last": 2565,
                "arabicnumber_first": 2560,
                "arabicnumber_last": 2565
            },
            "51": {
                "hadithnumber_first": 2566,
                "hadithnumber_last": 2636,
                "arabicnumber_first": 2566,
                "arabicnumber_last": 2636
            },
            "52": {
                "hadithnumber_first": 2637,
                "hadithnumber_last": 2689,
                "arabicnumber_first": 2637,
                "arabicnumber_last": 2689
            },
            "53": {
                "hadithnumber_first": 2690,
                "hadithnumber_last": 2710,
                "arabicnumber_first": 2690,
                "arabicnumber_last": 2710
            },
            "54": {
                "hadithnumber_first": 2712,
                "hadithnumber_last": 2737,
                "arabicnumber_first": 2712,
                "arabicnumber_last": 2737
            },
            "55": {
                "hadithnumber_first": 2738,
                "hadithnumber_last": 2781,
                "arabicnumber_first": 2738,
                "arabicnumber_last": 2781
            },
            "56": {
                "hadithnumber_first": 2782,
                "hadithnumber_last": 3090,
                "arabicnumber_first": 2782,
                "arabicnumber_last": 3090
            },
            "57": {
                "hadithnumber_first": 3091,
                "hadithnumber_last": 3155,
                "arabicnumber_first": 3091,
                "arabicnumber_last": 3155
            },
            "58": {
                "hadithnumber_first": 3157,
                "hadithnumber_last": 3189,
                "arabicnumber_first": 3157,
                "arabicnumber_last": 3189
            },
            "59": {
                "hadithnumber_first": 3190,
                "hadithnumber_last": 3325,
                "arabicnumber_first": 3190,
                "arabicnumber_last": 3325
            },
            "60": {
                "hadithnumber_first": 3326,
                "hadithnumber_last": 3488,
                "arabicnumber_first": 3326,
                "arabicnumber_last": 3488
            },
            "61": {
                "hadithnumber_first": 3489,
                "hadithnumber_last": 3648,
                "arabicnumber_first": 3489,
                "arabicnumber_last": 3648
            },
            "62": {
                "hadithnumber_first": 3649,
                "hadithnumber_last": 3775,
                "arabicnumber_first": 3649,
                "arabicnumber_last": 3775
            },
            "63": {
                "hadithnumber_first": 3776,
                "hadithnumber_last": 3948,
                "arabicnumber_first": 3776,
                "arabicnumber_last": 3948
            },
            "64": {
                "hadithnumber_first": 3949,
                "hadithnumber_last": 4473,
                "arabicnumber_first": 3949,
                "arabicnumber_last": 4473
            },
            "65": {
                "hadithnumber_first": 4474,
                "hadithnumber_last": 4977,
                "arabicnumber_first": 4474,
                "arabicnumber_last": 4977
            },
            "66": {
                "hadithnumber_first": 4979,
                "hadithnumber_last": 5062,
                "arabicnumber_first": 4979,
                "arabicnumber_last": 5062
            },
            "67": {
                "hadithnumber_first": 5063,
                "hadithnumber_last": 5250,
                "arabicnumber_first": 5063,
                "arabicnumber_last": 5250
            },
            "68": {
                "hadithnumber_first": 5251,
                "hadithnumber_last": 5350,
                "arabicnumber_first": 5251,
                "arabicnumber_last": 5350
            },
            "69": {
                "hadithnumber_first": 5351,
                "hadithnumber_last": 5372,
                "arabicnumber_first": 5351,
                "arabicnumber_last": 5372
            },
            "70": {
                "hadithnumber_first": 5373,
                "hadithnumber_last": 5466,
                "arabicnumber_first": 5373,
                "arabicnumber_last": 5466
            },
            "71": {
                "hadithnumber_first": 5467,
                "hadithnumber_last": 5474,
                "arabicnumber_first": 5467,
                "arabicnumber_last": 5474
            },
            "72": {
                "hadithnumber_first": 5475,
                "hadithnumber_last": 5544,
                "arabicnumber_first": 5475,
                "arabicnumber_last": 5544
            },
            "73": {
                "hadithnumber_first": 5545,
                "hadithnumber_last": 5574,
                "arabicnumber_first": 5545,
                "arabicnumber_last": 5574
            },
            "74": {
                "hadithnumber_first": 5575,
                "hadithnumber_last": 5639,
                "arabicnumber_first": 5575,
                "arabicnumber_last": 5639
            },
            "75": {
                "hadithnumber_first": 5640,
                "hadithnumber_last": 5677,
                "arabicnumber_first": 5640,
                "arabicnumber_last": 5677
            },
            "76": {
                "hadithnumber_first": 5678,
                "hadithnumber_last": 5782,
                "arabicnumber_first": 5678,
                "arabicnumber_last": 5782
            },
            "77": {
                "hadithnumber_first": 5783,
                "hadithnumber_last": 5969,
                "arabicnumber_first": 5783,
                "arabicnumber_last": 5969
            },
            "78": {
                "hadithnumber_first": 5970,
                "hadithnumber_last": 6226,
                "arabicnumber_first": 5970,
                "arabicnumber_last": 6226
            },
            "79": {
                "hadithnumber_first": 6227,
                "hadithnumber_last": 6303,
                "arabicnumber_first": 6227,
                "arabicnumber_last": 6303
            },
            "80": {
                "hadithnumber_first": 6304,
                "hadithnumber_last": 6411,
                "arabicnumber_first": 6304,
                "arabicnumber_last": 6411
            },
            "81": {
                "hadithnumber_first": 6412,
                "hadithnumber_last": 6593,
                "arabicnumber_first": 6412,
                "arabicnumber_last": 6593
            },
            "82": {
                "hadithnumber_first": 6594,
                "hadithnumber_last": 6620,
                "arabicnumber_first": 6594,
                "arabicnumber_last": 6620
            },
            "83": {
                "hadithnumber_first": 6621,
                "hadithnumber_last": 6707,
                "arabicnumber_first": 6621,
                "arabicnumber_last": 6707
            },
            "84": {
                "hadithnumber_first": 6708,
                "hadithnumber_last": 6722,
                "arabicnumber_first": 6708,
                "arabicnumber_last": 6722
            },
            "85": {
                "hadithnumber_first": 6723,
                "hadithnumber_last": 6771,
                "arabicnumber_first": 6723,
                "arabicnumber_last": 6771
            },
            "86": {
                "hadithnumber_first": 6772,
                "hadithnumber_last": 6860,
                "arabicnumber_first": 6772,
                "arabicnumber_last": 6860
            },
            "87": {
                "hadithnumber_first": 6861,
                "hadithnumber_last": 6917,
                "arabicnumber_first": 6861,
                "arabicnumber_last": 6917
            },
            "88": {
                "hadithnumber_first": 6918,
                "hadithnumber_last": 6939,
                "arabicnumber_first": 6918,
                "arabicnumber_last": 6939
            },
            "89": {
                "hadithnumber_first": 6940,
                "hadithnumber_last": 6952,
                "arabicnumber_first": 6940,
                "arabicnumber_last": 6952
            },
            "90": {
                "hadithnumber_first": 6953,
                "hadithnumber_last": 6981,
                "arabicnumber_first": 6953,
                "arabicnumber_last": 6981
            },
            "91": {
                "hadithnumber_first": 6982,
                "hadithnumber_last": 7047,
                "arabicnumber_first": 6982,
                "arabicnumber_last": 7047
            },
            "92": {
                "hadithnumber_first": 7048,
                "hadithnumber_last": 7136,
                "arabicnumber_first": 7048,
                "arabicnumber_last": 7136
            },
            "93": {
                "hadithnumber_first": 7137,
                "hadithnumber_last": 7225,
                "arabicnumber_first": 7137,
                "arabicnumber_last": 7225
            },
            "94": {
                "hadithnumber_first": 7226,
                "hadithnumber_last": 7245,
                "arabicnumber_first": 7226,
                "arabicnumber_last": 7245
            },
            "95": {
                "hadithnumber_first": 7246,
                "hadithnumber_last": 7267,
                "arabicnumber_first": 7246,
                "arabicnumber_last": 7267
            },
            "96": {
                "hadithnumber_first": 7268,
                "hadithnumber_last": 7370,
                "arabicnumber_first": 7268,
                "arabicnumber_last": 7370
            },
            "97": {
                "hadithnumber_first": 7371,
                "hadithnumber_last": 7563,
                "arabicnumber_first": 7371,
                "arabicnumber_last": 7563
            }
        }
    },
    "dehlawi": {
        "id": "dehlawi",
        "name": "Forty Hadith of Shah Waliullah Dehlawi",
        "collection": [
            {
                "name": "ara-dehlawi",
                "book": "dehlawi",
                "author": "Shah Waliullah Dehlawi",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-dehlawi.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-dehlawi.min.json"
            },
            {
                "name": "eng-dehlawi",
                "book": "dehlawi",
                "author": "Shah Waliullah Dehlawi",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-dehlawi.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-dehlawi.min.json"
            }
        ],
        "last_hadithnumber": 40,
        "section_details": {
            "0": {
                "hadithnumber_first": 0,
                "hadithnumber_last": 0,
                "arabicnumber_first": 0,
                "arabicnumber_last": 0
            },
            "1": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 40,
                "arabicnumber_first": 1,
                "arabicnumber_last": 40
            }
        }
    },
    "ibnmajah": {
        "id": "ibnmajah",
        "name": "Sunan Ibn Majah",
        "collection": [
            {
                "name": "ara-ibnmajah",
                "book": "ibnmajah",
                "author": "Unknown",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-ibnmajah.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-ibnmajah.min.json"
            },
            {
                "name": "eng-ibnmajah",
                "book": "ibnmajah",
                "author": "Unknown",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-ibnmajah.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-ibnmajah.min.json"
            }
        ],
        "sections": {
            "0": "The Book of the Sunnah",
            "1": "The Book of Purification and its Sunnah",
            "2": "The Book of the Prayer",
            "3": "The Book of the Adhan and the Sunnah Regarding It",
            "4": "The Book On The Mosques And The Congregations",
            "5": "Establishing the Prayer and the Sunnah Regarding Them",
            "6": "Chapters Regarding Funerals",
            "7": "Fasting",
            "8": "The Chapters Regarding Zakat",
            "9": "The Chapters on Marriage",
            "10": "The Chapters on Divorce",
            "11": "The Chapters on Expiation",
            "12": "The Chapters on Business Transactions",
            "13": "The Chapters on Rulings",
            "14": "The Chapters on Gifts",
            "15": "The Chapters on Charity",
            "16": "The Chapters on Pawning",
            "17": "The Chapters on Pre-emption",
            "18": "The Chapters on Lost Property",
            "19": "The Chapters on Manumission (of Slaves)",
            "20": "The Chapters on Legal Punishments",
            "21": "The Chapters on Blood Money",
            "22": "The Chapters on Wills",
            "23": "Chapters on Shares of Inheritance",
            "24": "The Chapters on Jihad",
            "25": "Chapters on Hajj Rituals",
            "26": "Chapters on Sacrifices",
            "27": "Chapters on Slaughtering",
            "28": "Chapters on Hunting",
            "29": " Chapters on Food",
            "30": "Chapters on Drinks",
            "31": "Chapters on Medicine",
            "32": "Chapters on Dress",
            "33": "Etiquette",
            "34": "Supplication",
            "35": "Interpretation of Dreams",
            "36": "Tribulations",
            "37": "Zuhd"
        },
        "last_hadithnumber": 4341,
        "section_details": {
            "0": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 266,
                "arabicnumber_first": 1,
                "arabicnumber_last": 266
            },
            "1": {
                "hadithnumber_first": 267,
                "hadithnumber_last": 666,
                "arabicnumber_first": 267,
                "arabicnumber_last": 666
            },
            "2": {
                "hadithnumber_first": 667,
                "hadithnumber_last": 705,
                "arabicnumber_first": 667,
                "arabicnumber_last": 705
            },
            "3": {
                "hadithnumber_first": 706,
                "hadithnumber_last": 734,
                "arabicnumber_first": 706,
                "arabicnumber_last": 734
            },
            "4": {
                "hadithnumber_first": 735,
                "hadithnumber_last": 802,
                "arabicnumber_first": 735,
                "arabicnumber_last": 802
            },
            "5": {
                "hadithnumber_first": 803,
                "hadithnumber_last": 1432,
                "arabicnumber_first": 803,
                "arabicnumber_last": 1432
            },
            "6": {
                "hadithnumber_first": 1433,
                "hadithnumber_last": 1637,
                "arabicnumber_first": 1433,
                "arabicnumber_last": 1637
            },
            "7": {
                "hadithnumber_first": 1638,
                "hadithnumber_last": 1782,
                "arabicnumber_first": 1638,
                "arabicnumber_last": 1782
            },
            "8": {
                "hadithnumber_first": 1783,
                "hadithnumber_last": 1844,
                "arabicnumber_first": 1783,
                "arabicnumber_last": 1844
            },
            "9": {
                "hadithnumber_first": 1845,
                "hadithnumber_last": 2015,
                "arabicnumber_first": 1845,
                "arabicnumber_last": 2015
            },
            "10": {
                "hadithnumber_first": 2016,
                "hadithnumber_last": 2477,
                "arabicnumber_first": 2016,
                "arabicnumber_last": 2477
            },
            "11": {
                "hadithnumber_first": 2090,
                "hadithnumber_last": 2136,
                "arabicnumber_first": 2090,
                "arabicnumber_last": 2136
            },
            "12": {
                "hadithnumber_first": 2137,
                "hadithnumber_last": 2307,
                "arabicnumber_first": 2137,
                "arabicnumber_last": 2307
            },
            "13": {
                "hadithnumber_first": 2308,
                "hadithnumber_last": 2374,
                "arabicnumber_first": 2308,
                "arabicnumber_last": 2374
            },
            "14": {
                "hadithnumber_first": 2375,
                "hadithnumber_last": 2389,
                "arabicnumber_first": 2375,
                "arabicnumber_last": 2389
            },
            "15": {
                "hadithnumber_first": 2390,
                "hadithnumber_last": 2528,
                "arabicnumber_first": 2390,
                "arabicnumber_last": 2528
            },
            "16": {
                "hadithnumber_first": 2436,
                "hadithnumber_last": 2491,
                "arabicnumber_first": 2436,
                "arabicnumber_last": 2491
            },
            "17": {
                "hadithnumber_first": 2492,
                "hadithnumber_last": 2501,
                "arabicnumber_first": 2492,
                "arabicnumber_last": 2501
            },
            "18": {
                "hadithnumber_first": 2502,
                "hadithnumber_last": 2511,
                "arabicnumber_first": 2502,
                "arabicnumber_last": 2511
            },
            "19": {
                "hadithnumber_first": 2512,
                "hadithnumber_last": 2532,
                "arabicnumber_first": 2512,
                "arabicnumber_last": 2532
            },
            "20": {
                "hadithnumber_first": 2533,
                "hadithnumber_last": 2614,
                "arabicnumber_first": 2533,
                "arabicnumber_last": 2614
            },
            "21": {
                "hadithnumber_first": 2615,
                "hadithnumber_last": 2694,
                "arabicnumber_first": 2615,
                "arabicnumber_last": 2694
            },
            "22": {
                "hadithnumber_first": 2695,
                "hadithnumber_last": 2718,
                "arabicnumber_first": 2695,
                "arabicnumber_last": 2718
            },
            "23": {
                "hadithnumber_first": 2719,
                "hadithnumber_last": 2752,
                "arabicnumber_first": 2719,
                "arabicnumber_last": 2752
            },
            "24": {
                "hadithnumber_first": 2753,
                "hadithnumber_last": 2881,
                "arabicnumber_first": 2753,
                "arabicnumber_last": 2881
            },
            "25": {
                "hadithnumber_first": 2882,
                "hadithnumber_last": 3119,
                "arabicnumber_first": 2882,
                "arabicnumber_last": 3119
            },
            "26": {
                "hadithnumber_first": 3120,
                "hadithnumber_last": 3161,
                "arabicnumber_first": 3120,
                "arabicnumber_last": 3161
            },
            "27": {
                "hadithnumber_first": 3162,
                "hadithnumber_last": 3199,
                "arabicnumber_first": 3162,
                "arabicnumber_last": 3199
            },
            "28": {
                "hadithnumber_first": 3200,
                "hadithnumber_last": 3250,
                "arabicnumber_first": 3200,
                "arabicnumber_last": 3250
            },
            "29": {
                "hadithnumber_first": 3251,
                "hadithnumber_last": 3370,
                "arabicnumber_first": 3251,
                "arabicnumber_last": 3370
            },
            "30": {
                "hadithnumber_first": 3371,
                "hadithnumber_last": 3435,
                "arabicnumber_first": 3371,
                "arabicnumber_last": 3435
            },
            "31": {
                "hadithnumber_first": 3436,
                "hadithnumber_last": 3549,
                "arabicnumber_first": 3436,
                "arabicnumber_last": 3549
            },
            "32": {
                "hadithnumber_first": 3550,
                "hadithnumber_last": 3656,
                "arabicnumber_first": 3550,
                "arabicnumber_last": 3656
            },
            "33": {
                "hadithnumber_first": 3657,
                "hadithnumber_last": 3826,
                "arabicnumber_first": 3657,
                "arabicnumber_last": 3826
            },
            "34": {
                "hadithnumber_first": 3827,
                "hadithnumber_last": 3892,
                "arabicnumber_first": 3827,
                "arabicnumber_last": 3892
            },
            "35": {
                "hadithnumber_first": 3893,
                "hadithnumber_last": 3926,
                "arabicnumber_first": 3893,
                "arabicnumber_last": 3926
            },
            "36": {
                "hadithnumber_first": 3927,
                "hadithnumber_last": 4099,
                "arabicnumber_first": 3927,
                "arabicnumber_last": 4099
            },
            "37": {
                "hadithnumber_first": 4100,
                "hadithnumber_last": 4341,
                "arabicnumber_first": 4100,
                "arabicnumber_last": 4341
            }
        }
    },
    "malik": {
        "id": "malik",
        "name": "Muwatta Malik",
        "collection": [
            {
                "name": "ara-malik",
                "book": "malik",
                "author": "Unknown",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-malik.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-malik.min.json"
            },
            {
                "name": "eng-malik",
                "book": "malik",
                "author": "Unknown",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-malik.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-malik.min.json"
            },
        ],
        "sections": {
            "0": "",
            "1": "The Times of Prayer",
            "2": "Purity",
            "3": "Prayer",
            "4": "Forgetfulness in Prayer",
            "5": "Jumu'a",
            "6": "Prayer in Ramadan",
            "7": "Tahajjud",
            "8": "Prayer in Congregation",
            "9": "Shortening the Prayer",
            "10": "The Two 'Ids",
            "11": "The Fear Prayer",
            "12": "The Eclipse Prayer",
            "13": "Asking for Rain",
            "14": "The Qibla",
            "15": "The Qur'an",
            "16": "Burials",
            "17": "Zakat",
            "18": "Fasting",
            "19": "I'tikaf in Ramadan",
            "20": "Hajj",
            "21": "Jihad",
            "22": "Vows and Oaths",
            "23": "Sacrificial Animals",
            "24": "Slaughtering Animals",
            "25": "Game",
            "26": "The 'Aqiqa",
            "27": "Fara'id",
            "28": "Marriage",
            "29": "Divorce",
            "30": "Suckling",
            "31": "Business Transactions",
            "32": "Qirad",
            "33": "Sharecropping",
            "34": "Renting Land",
            "35": "Pre-emption in Property",
            "36": "Judgements",
            "37": "Wills and Testaments",
            "38": "Setting Free and Wala'",
            "39": "The Mukatab",
            "40": "The Mudabbar",
            "41": "Hudud",
            "42": "Drinks",
            "43": "Blood-Money",
            "44": "The Oath of Qasama",
            "45": "Madina",
            "46": "The Decree",
            "47": "Good Character",
            "48": "Dress",
            "49": "The Description of the Prophet, may Allah Bless Him and Grant Him Peace",
            "50": "The Evil Eye",
            "51": "Hair",
            "52": "Visions",
            "53": "Greetings",
            "54": "General Subjects",
            "55": "The Oath of Allegiance",
            "56": "Speech",
            "57": "Jahannam",
            "58": "Sadaqa",
            "59": "Knowledge",
            "60": "The Supplication of the Unjustly Wronged",
            "61": "The Names of the Prophet, may Allah Bless Him and Grant Him Peace"
        },
        "last_hadithnumber": 1858,
        "section_details": {
            "0": {
                "hadithnumber_first": 0,
                "hadithnumber_last": 0,
                "arabicnumber_first": 0,
                "arabicnumber_last": 0
            },
            "1": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 31,
                "arabicnumber_first": 1,
                "arabicnumber_last": 31
            },
            "2": {
                "hadithnumber_first": 32,
                "hadithnumber_last": 145,
                "arabicnumber_first": 32,
                "arabicnumber_last": 145
            },
            "3": {
                "hadithnumber_first": 146,
                "hadithnumber_last": 221,
                "arabicnumber_first": 146,
                "arabicnumber_last": 221
            },
            "4": {
                "hadithnumber_first": 222,
                "hadithnumber_last": 224,
                "arabicnumber_first": 222,
                "arabicnumber_last": 224
            },
            "5": {
                "hadithnumber_first": 225,
                "hadithnumber_last": 245,
                "arabicnumber_first": 225,
                "arabicnumber_last": 245
            },
            "6": {
                "hadithnumber_first": 246,
                "hadithnumber_last": 253,
                "arabicnumber_first": 246,
                "arabicnumber_last": 253
            },
            "7": {
                "hadithnumber_first": 254,
                "hadithnumber_last": 286,
                "arabicnumber_first": 254,
                "arabicnumber_last": 286
            },
            "8": {
                "hadithnumber_first": 287,
                "hadithnumber_last": 325,
                "arabicnumber_first": 287,
                "arabicnumber_last": 325
            },
            "9": {
                "hadithnumber_first": 326,
                "hadithnumber_last": 427,
                "arabicnumber_first": 326,
                "arabicnumber_last": 427
            },
            "10": {
                "hadithnumber_first": 428,
                "hadithnumber_last": 440,
                "arabicnumber_first": 428,
                "arabicnumber_last": 440
            },
            "11": {
                "hadithnumber_first": 441,
                "hadithnumber_last": 444,
                "arabicnumber_first": 441,
                "arabicnumber_last": 444
            },
            "12": {
                "hadithnumber_first": 445,
                "hadithnumber_last": 448,
                "arabicnumber_first": 445,
                "arabicnumber_last": 448
            },
            "13": {
                "hadithnumber_first": 449,
                "hadithnumber_last": 454,
                "arabicnumber_first": 449,
                "arabicnumber_last": 454
            },
            "14": {
                "hadithnumber_first": 455,
                "hadithnumber_last": 469,
                "arabicnumber_first": 455,
                "arabicnumber_last": 469
            },
            "15": {
                "hadithnumber_first": 470,
                "hadithnumber_last": 519,
                "arabicnumber_first": 470,
                "arabicnumber_last": 519
            },
            "16": {
                "hadithnumber_first": 520,
                "hadithnumber_last": 577,
                "arabicnumber_first": 520,
                "arabicnumber_last": 577
            },
            "17": {
                "hadithnumber_first": 578,
                "hadithnumber_last": 629,
                "arabicnumber_first": 578,
                "arabicnumber_last": 629
            },
            "18": {
                "hadithnumber_first": 630,
                "hadithnumber_last": 689,
                "arabicnumber_first": 630,
                "arabicnumber_last": 689
            },
            "19": {
                "hadithnumber_first": 690,
                "hadithnumber_last": 704,
                "arabicnumber_first": 690,
                "arabicnumber_last": 704
            },
            "20": {
                "hadithnumber_first": 705,
                "hadithnumber_last": 957,
                "arabicnumber_first": 705,
                "arabicnumber_last": 957
            },
            "21": {
                "hadithnumber_first": 959,
                "hadithnumber_last": 1008,
                "arabicnumber_first": 959,
                "arabicnumber_last": 1008
            },
            "22": {
                "hadithnumber_first": 1009,
                "hadithnumber_last": 1027,
                "arabicnumber_first": 1009,
                "arabicnumber_last": 1027
            },
            "23": {
                "hadithnumber_first": 1028,
                "hadithnumber_last": 1041,
                "arabicnumber_first": 1028,
                "arabicnumber_last": 1041
            },
            "24": {
                "hadithnumber_first": 1042,
                "hadithnumber_last": 1051,
                "arabicnumber_first": 1042,
                "arabicnumber_last": 1051
            },
            "25": {
                "hadithnumber_first": 1052,
                "hadithnumber_last": 1066,
                "arabicnumber_first": 1052,
                "arabicnumber_last": 1066
            },
            "26": {
                "hadithnumber_first": 1067,
                "hadithnumber_last": 1073,
                "arabicnumber_first": 1067,
                "arabicnumber_last": 1073
            },
            "27": {
                "hadithnumber_first": 1074,
                "hadithnumber_last": 1089,
                "arabicnumber_first": 1074,
                "arabicnumber_last": 1089
            },
            "28": {
                "hadithnumber_first": 1091,
                "hadithnumber_last": 1149,
                "arabicnumber_first": 1091,
                "arabicnumber_last": 1149
            },
            "29": {
                "hadithnumber_first": 1150,
                "hadithnumber_last": 1271,
                "arabicnumber_first": 1150,
                "arabicnumber_last": 1271
            },
            "30": {
                "hadithnumber_first": 1272,
                "hadithnumber_last": 1289,
                "arabicnumber_first": 1272,
                "arabicnumber_last": 1289
            },
            "31": {
                "hadithnumber_first": 1290,
                "hadithnumber_last": 1385,
                "arabicnumber_first": 1290,
                "arabicnumber_last": 1385
            },
            "32": {
                "hadithnumber_first": 1386,
                "hadithnumber_last": 1387,
                "arabicnumber_first": 1386,
                "arabicnumber_last": 1387
            },
            "33": {
                "hadithnumber_first": 1388,
                "hadithnumber_last": 1389,
                "arabicnumber_first": 1388,
                "arabicnumber_last": 1389
            },
            "34": {
                "hadithnumber_first": 1390,
                "hadithnumber_last": 1394,
                "arabicnumber_first": 1390,
                "arabicnumber_last": 1394
            },
            "35": {
                "hadithnumber_first": 1395,
                "hadithnumber_last": 1398,
                "arabicnumber_first": 1395,
                "arabicnumber_last": 1398
            },
            "36": {
                "hadithnumber_first": 1399,
                "hadithnumber_last": 1454,
                "arabicnumber_first": 1399,
                "arabicnumber_last": 1454
            },
            "37": {
                "hadithnumber_first": 1455,
                "hadithnumber_last": 1463,
                "arabicnumber_first": 1455,
                "arabicnumber_last": 1463
            },
            "38": {
                "hadithnumber_first": 1464,
                "hadithnumber_last": 1488,
                "arabicnumber_first": 1464,
                "arabicnumber_last": 1488
            },
            "39": {
                "hadithnumber_first": 1489,
                "hadithnumber_last": 1496,
                "arabicnumber_first": 1489,
                "arabicnumber_last": 1496
            },
            "40": {
                "hadithnumber_first": 1497,
                "hadithnumber_last": 1499,
                "arabicnumber_first": 1497,
                "arabicnumber_last": 1499
            },
            "41": {
                "hadithnumber_first": 1500,
                "hadithnumber_last": 1536,
                "arabicnumber_first": 1500,
                "arabicnumber_last": 1536
            },
            "42": {
                "hadithnumber_first": 1537,
                "hadithnumber_last": 1551,
                "arabicnumber_first": 1537,
                "arabicnumber_last": 1551
            },
            "43": {
                "hadithnumber_first": 1552,
                "hadithnumber_last": 1595,
                "arabicnumber_first": 1552,
                "arabicnumber_last": 1595
            },
            "44": {
                "hadithnumber_first": 1596,
                "hadithnumber_last": 1597,
                "arabicnumber_first": 1596,
                "arabicnumber_last": 1597
            },
            "45": {
                "hadithnumber_first": 1598,
                "hadithnumber_last": 1622,
                "arabicnumber_first": 1598,
                "arabicnumber_last": 1622
            },
            "46": {
                "hadithnumber_first": 1623,
                "hadithnumber_last": 1632,
                "arabicnumber_first": 1623,
                "arabicnumber_last": 1632
            },
            "47": {
                "hadithnumber_first": 1633,
                "hadithnumber_last": 1650,
                "arabicnumber_first": 1633,
                "arabicnumber_last": 1650
            },
            "48": {
                "hadithnumber_first": 1651,
                "hadithnumber_last": 1670,
                "arabicnumber_first": 1651,
                "arabicnumber_last": 1670
            },
            "49": {
                "hadithnumber_first": 1671,
                "hadithnumber_last": 1710,
                "arabicnumber_first": 1671,
                "arabicnumber_last": 1710
            },
            "50": {
                "hadithnumber_first": 1711,
                "hadithnumber_last": 1729,
                "arabicnumber_first": 1711,
                "arabicnumber_last": 1729
            },
            "51": {
                "hadithnumber_first": 1730,
                "hadithnumber_last": 1746,
                "arabicnumber_first": 1730,
                "arabicnumber_last": 1746
            },
            "52": {
                "hadithnumber_first": 1747,
                "hadithnumber_last": 1755,
                "arabicnumber_first": 1747,
                "arabicnumber_last": 1755
            },
            "53": {
                "hadithnumber_first": 1756,
                "hadithnumber_last": 1762,
                "arabicnumber_first": 1756,
                "arabicnumber_last": 1762
            },
            "54": {
                "hadithnumber_first": 1763,
                "hadithnumber_last": 1807,
                "arabicnumber_first": 1763,
                "arabicnumber_last": 1807
            },
            "55": {
                "hadithnumber_first": 1808,
                "hadithnumber_last": 1810,
                "arabicnumber_first": 1808,
                "arabicnumber_last": 1810
            },
            "56": {
                "hadithnumber_first": 1811,
                "hadithnumber_last": 1838,
                "arabicnumber_first": 1811,
                "arabicnumber_last": 1838
            },
            "57": {
                "hadithnumber_first": 1839,
                "hadithnumber_last": 1840,
                "arabicnumber_first": 1839,
                "arabicnumber_last": 1840
            },
            "58": {
                "hadithnumber_first": 1841,
                "hadithnumber_last": 1855,
                "arabicnumber_first": 1841,
                "arabicnumber_last": 1855
            },
            "59": {
                "hadithnumber_first": 1856,
                "hadithnumber_last": 1856,
                "arabicnumber_first": 1856,
                "arabicnumber_last": 1856
            },
            "60": {
                "hadithnumber_first": 1857,
                "hadithnumber_last": 1857,
                "arabicnumber_first": 1857,
                "arabicnumber_last": 1857
            },
            "61": {
                "hadithnumber_first": 1858,
                "hadithnumber_last": 1858,
                "arabicnumber_first": 1858,
                "arabicnumber_last": 1858
            }
        }
    },
    "muslim": {
        "id": "muslim",
        "name": "Sahih Muslim",
        "collection": [
            {
                "name": "ara-muslim",
                "book": "muslim",
                "author": "Unknown",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-muslim.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-muslim.min.json"
            },
            {
                "name": "eng-muslim",
                "book": "muslim",
                "author": "Abdul Hamid Siddiqui",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-muslim.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-muslim.min.json"
            }
        ],
        "sections": {
            "0": "Introduction",
            "1": "The Book of Faith",
            "2": "The Book of Purification",
            "3": "The Book of Menstruation",
            "4": "The Book of Prayers ",
            "5": "The Book of Mosques and Places of Prayer",
            "6": "The Book of Prayer - Travellers",
            "7": "The Book of Prayer - Friday",
            "8": "The Book of Prayer - Two Eids",
            "9": "The Book of Prayer - Rain",
            "10": "The Book of Prayer - Eclipses",
            "11": "The Book of Prayer - Funerals",
            "12": "The Book of Zakat",
            "13": "The Book of Fasting ",
            "14": "The Book of I'tikaf",
            "15": "The Book of Pilgrimage",
            "16": "The Book of Marriage",
            "17": "The Book of Suckling",
            "18": "The Book of Divorce ",
            "19": "The Book of Invoking Curses",
            "20": "The Book of Emancipating Slaves",
            "21": "The Book of Transactions",
            "22": "The Book of Musaqah",
            "23": "The Book of the Rules of Inheritance",
            "24": "The Book of Gifts",
            "25": "The Book of Wills",
            "26": "The Book of Vows",
            "27": "The Book of Oaths",
            "28": "The Book of Oaths, Muharibin, Qasas (Retaliation), and Diyat (Blood Money)",
            "29": "The Book of Legal Punishments",
            "30": "The Book of Judicial Decisions",
            "31": "The Book of Lost Property",
            "32": "The Book of Jihad and Expeditions",
            "33": "The Book on Government",
            "34": "The Book of Hunting, Slaughter, and what may be Eaten",
            "35": "The Book of Sacrifices",
            "36": "The Book of Drinks",
            "37": "The Book of Clothes and Adornment",
            "38": "The Book of Manners and Etiquette",
            "39": "The Book of Greetings",
            "40": "The Book Concerning the Use of Correct Words",
            "41": "The Book of Poetry",
            "42": "The Book of Dreams",
            "43": "The Book of Virtues",
            "44": "The Book of the Merits of the Companions",
            "45": "The Book of Virtue, Enjoining Good Manners, and Joining of the Ties of Kinship",
            "46": "The Book of Destiny",
            "47": "The Book of Knowledge",
            "48": "The Book Pertaining to the Remembrance of Allah, Supplication, Repentance and Seeking Forgiveness ",
            "49": "The Book of Heart-Melting Traditions",
            "50": "The Book of Repentance",
            "51": "Characteristics of The Hypocrites And Rulings Concerning Them",
            "52": "Characteristics of the Day of Judgment, Paradise, and Hell",
            "53": "The Book of Paradise, its Description, its Bounties and its Inhabitants",
            "54": "The Book of Tribulations and Portents of the Last Hour",
            "55": "The Book of Zuhd and Softening of Hearts ",
            "56": "The Book of Commentary on the Qur'an"
        },
        "last_hadithnumber": 7563,
        "section_details": {
            "0": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 92,
                "arabicnumber_first": 1,
                "arabicnumber_last": 7
            },
            "1": {
                "hadithnumber_first": 93,
                "hadithnumber_last": 533,
                "arabicnumber_first": 8.01,
                "arabicnumber_last": 222.02
            },
            "2": {
                "hadithnumber_first": 534,
                "hadithnumber_last": 678,
                "arabicnumber_first": 223,
                "arabicnumber_last": 292.02
            },
            "3": {
                "hadithnumber_first": 679,
                "hadithnumber_last": 836,
                "arabicnumber_first": 293.01,
                "arabicnumber_last": 376.04
            },
            "4": {
                "hadithnumber_first": 837,
                "hadithnumber_last": 1160,
                "arabicnumber_first": 377,
                "arabicnumber_last": 519.02
            },
            "5": {
                "hadithnumber_first": 1161,
                "hadithnumber_last": 1569,
                "arabicnumber_first": 520.01,
                "arabicnumber_last": 684.04
            },
            "6": {
                "hadithnumber_first": 1570,
                "hadithnumber_last": 1950,
                "arabicnumber_first": 685.01,
                "arabicnumber_last": 843.02
            },
            "7": {
                "hadithnumber_first": 1951,
                "hadithnumber_last": 2043,
                "arabicnumber_first": 844.01,
                "arabicnumber_last": 883.02
            },
            "8": {
                "hadithnumber_first": 2044,
                "hadithnumber_last": 2069,
                "arabicnumber_first": 884.01,
                "arabicnumber_last": 893
            },
            "9": {
                "hadithnumber_first": 2070,
                "hadithnumber_last": 2088,
                "arabicnumber_first": 894.01,
                "arabicnumber_last": 900.02
            },
            "10": {
                "hadithnumber_first": 2089,
                "hadithnumber_last": 2122,
                "arabicnumber_first": 901.01,
                "arabicnumber_last": 915
            },
            "11": {
                "hadithnumber_first": 2123,
                "hadithnumber_last": 2262,
                "arabicnumber_first": 916.01,
                "arabicnumber_last": 978
            },
            "12": {
                "hadithnumber_first": 2263,
                "hadithnumber_last": 2494,
                "arabicnumber_first": 979.01,
                "arabicnumber_last": 1078.02
            },
            "13": {
                "hadithnumber_first": 2495,
                "hadithnumber_last": 2779,
                "arabicnumber_first": 1079.01,
                "arabicnumber_last": 1170
            },
            "14": {
                "hadithnumber_first": 2780,
                "hadithnumber_last": 2790,
                "arabicnumber_first": 1171.01,
                "arabicnumber_last": 1176.02
            },
            "15": {
                "hadithnumber_first": 2791,
                "hadithnumber_last": 3397,
                "arabicnumber_first": 1177.01,
                "arabicnumber_last": 1399.09
            },
            "16": {
                "hadithnumber_first": 388,
                "hadithnumber_last": 3567,
                "arabicnumber_first": 1400.01,
                "arabicnumber_last": 1443
            },
            "17": {
                "hadithnumber_first": 3568,
                "hadithnumber_last": 3651,
                "arabicnumber_first": 1444.01,
                "arabicnumber_last": 1470.02
            },
            "18": {
                "hadithnumber_first": 3652,
                "hadithnumber_last": 3742,
                "arabicnumber_first": 1471.01,
                "arabicnumber_last": 1491
            },
            "19": {
                "hadithnumber_first": 3743,
                "hadithnumber_last": 3769,
                "arabicnumber_first": 1492.01,
                "arabicnumber_last": 1500.04
            },
            "20": {
                "hadithnumber_first": 3770,
                "hadithnumber_last": 3800,
                "arabicnumber_first": 1501.01,
                "arabicnumber_last": 1510.02
            },
            "21": {
                "hadithnumber_first": 3801,
                "hadithnumber_last": 3961,
                "arabicnumber_first": 1511.01,
                "arabicnumber_last": 1550.05
            },
            "22": {
                "hadithnumber_first": 3962,
                "hadithnumber_last": 4139,
                "arabicnumber_first": 1551.01,
                "arabicnumber_last": 1613
            },
            "23": {
                "hadithnumber_first": 4140,
                "hadithnumber_last": 4162,
                "arabicnumber_first": 1614,
                "arabicnumber_last": 1619.06
            },
            "24": {
                "hadithnumber_first": 4163,
                "hadithnumber_last": 4203,
                "arabicnumber_first": 1620.01,
                "arabicnumber_last": 1626.02
            },
            "25": {
                "hadithnumber_first": 4204,
                "hadithnumber_last": 4234,
                "arabicnumber_first": 1627.01,
                "arabicnumber_last": 1637.03
            },
            "26": {
                "hadithnumber_first": 4235,
                "hadithnumber_last": 4253,
                "arabicnumber_first": 1638.01,
                "arabicnumber_last": 1645
            },
            "27": {
                "hadithnumber_first": 4254,
                "hadithnumber_last": 4341,
                "arabicnumber_first": 1646.01,
                "arabicnumber_last": 1668.03
            },
            "28": {
                "hadithnumber_first": 4342,
                "hadithnumber_last": 4397,
                "arabicnumber_first": 1669.01,
                "arabicnumber_last": 1683
            },
            "29": {
                "hadithnumber_first": 4398,
                "hadithnumber_last": 4469,
                "arabicnumber_first": 1684.01,
                "arabicnumber_last": 1710.05
            },
            "30": {
                "hadithnumber_first": 4470,
                "hadithnumber_last": 4497,
                "arabicnumber_first": 1711.01,
                "arabicnumber_last": 1721
            },
            "31": {
                "hadithnumber_first": 4498,
                "hadithnumber_last": 4518,
                "arabicnumber_first": 1722.01,
                "arabicnumber_last": 1729
            },
            "32": {
                "hadithnumber_first": 4519,
                "hadithnumber_last": 4700,
                "arabicnumber_first": 1730.01,
                "arabicnumber_last": 1817
            },
            "33": {
                "hadithnumber_first": 4701,
                "hadithnumber_last": 4967,
                "arabicnumber_first": 1818.01,
                "arabicnumber_last": 1928.02
            },
            "34": {
                "hadithnumber_first": 4972,
                "hadithnumber_last": 5063,
                "arabicnumber_first": 1929.01,
                "arabicnumber_last": 1959
            },
            "35": {
                "hadithnumber_first": 5064,
                "hadithnumber_last": 5126,
                "arabicnumber_first": 1960.01,
                "arabicnumber_last": 1978.03
            },
            "36": {
                "hadithnumber_first": 5114,
                "hadithnumber_last": 5383,
                "arabicnumber_first": 1979.02,
                "arabicnumber_last": 2064.04
            },
            "37": {
                "hadithnumber_first": 5385,
                "hadithnumber_last": 5585,
                "arabicnumber_first": 2065.01,
                "arabicnumber_last": 2130.02
            },
            "38": {
                "hadithnumber_first": 5586,
                "hadithnumber_last": 5645,
                "arabicnumber_first": 2131,
                "arabicnumber_last": 2159.02
            },
            "39": {
                "hadithnumber_first": 5646,
                "hadithnumber_last": 5861,
                "arabicnumber_first": 2160,
                "arabicnumber_last": 2245.02
            },
            "40": {
                "hadithnumber_first": 5862,
                "hadithnumber_last": 5884,
                "arabicnumber_first": 2246.01,
                "arabicnumber_last": 2254
            },
            "41": {
                "hadithnumber_first": 5887,
                "hadithnumber_last": 5896,
                "arabicnumber_first": 2255.03,
                "arabicnumber_last": 2260
            },
            "42": {
                "hadithnumber_first": 5897,
                "hadithnumber_last": 5937,
                "arabicnumber_first": 2261.01,
                "arabicnumber_last": 2275
            },
            "43": {
                "hadithnumber_first": 384,
                "hadithnumber_last": 6168,
                "arabicnumber_first": 2276,
                "arabicnumber_last": 2380.06
            },
            "44": {
                "hadithnumber_first": 6169,
                "hadithnumber_last": 6499,
                "arabicnumber_first": 2381,
                "arabicnumber_last": 2547
            },
            "45": {
                "hadithnumber_first": 6500,
                "hadithnumber_last": 6722,
                "arabicnumber_first": 2548.01,
                "arabicnumber_last": 2642.02
            },
            "46": {
                "hadithnumber_first": 6723,
                "hadithnumber_last": 6774,
                "arabicnumber_first": 2643.01,
                "arabicnumber_last": 2664
            },
            "47": {
                "hadithnumber_first": 6775,
                "hadithnumber_last": 6804,
                "arabicnumber_first": 2665,
                "arabicnumber_last": 2674
            },
            "48": {
                "hadithnumber_first": 6805,
                "hadithnumber_last": 6936,
                "arabicnumber_first": 2675.01,
                "arabicnumber_last": 2735.03
            },
            "49": {
                "hadithnumber_first": 6937,
                "hadithnumber_last": 6951,
                "arabicnumber_first": 2736,
                "arabicnumber_last": 2743.03
            },
            "50": {
                "hadithnumber_first": 6952,
                "hadithnumber_last": 7023,
                "arabicnumber_first": 2744.01,
                "arabicnumber_last": 2771
            },
            "51": {
                "hadithnumber_first": 7024,
                "hadithnumber_last": 7044,
                "arabicnumber_first": 2772,
                "arabicnumber_last": 2784.02
            },
            "52": {
                "hadithnumber_first": 7045,
                "hadithnumber_last": 7129,
                "arabicnumber_first": 2785,
                "arabicnumber_last": 2821.03
            },
            "53": {
                "hadithnumber_first": 7130,
                "hadithnumber_last": 7234,
                "arabicnumber_first": 2822,
                "arabicnumber_last": 2879
            },
            "54": {
                "hadithnumber_first": 7235,
                "hadithnumber_last": 7416,
                "arabicnumber_first": 2880.01,
                "arabicnumber_last": 2955.03
            },
            "55": {
                "hadithnumber_first": 7417,
                "hadithnumber_last": 7522,
                "arabicnumber_first": 2956,
                "arabicnumber_last": 3014
            },
            "56": {
                "hadithnumber_first": 7523,
                "hadithnumber_last": 7563,
                "arabicnumber_first": 3015,
                "arabicnumber_last": 3033.02
            }
        }
    },
    "nasai": {
        "id": "nasai",
        "name": "Sunan an Nasai",
        "collection": [
            {
                "name": "ara-nasai",
                "book": "nasai",
                "author": "Unknown",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-nasai.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-nasai.min.json"
            },
            {
                "name": "eng-nasai",
                "book": "nasai",
                "author": "Unknown",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-nasai.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-nasai.min.json"
            }
        ],
        "sections": {
            "0": "",
            "1": "The Book of Purification",
            "2": "The Book of Water",
            "3": "The Book of Menstruation and Istihadah",
            "4": "The Book of Ghusl and Tayammum",
            "5": "The Book of Salah",
            "6": "The Book of the Times (of Prayer)",
            "7": "The Book of the Adhan (The Call to Prayer)",
            "8": "The Book of the Masjids",
            "9": "The Book of the Qiblah",
            "10": "The Book of Leading the Prayer (Al-Imamah)",
            "11": "The Book of the Commencement of the Prayer",
            "12": "The Book of The At-Tatbiq (Clasping One's Hands Together)",
            "13": "The Book of Forgetfulness (In Prayer)",
            "14": "The Book of Jumu'ah (Friday Prayer)",
            "15": "The Book of Shortening the Prayer When Traveling",
            "16": "The Book of Eclipses",
            "17": "The Book of Praying for Rain (Al-Istisqa')",
            "18": "The Book of the Fear Prayer",
            "19": "The Book of the Prayer for the Two 'Eids",
            "20": "The Book of Qiyam Al-Lail (The Night Prayer) and Voluntary Prayers During the Day",
            "21": "The Book of Funerals",
            "22": "The Book of Fasting",
            "23": "The Book of Zakah",
            "24": "The Book of Hajj",
            "25": "The Book of Jihad",
            "26": "The Book of Marriage",
            "27": "The Book of Divorce",
            "28": "The Book of Horses, Races and Shooting",
            "29": "The Book of Endowments",
            "30": "The Book of Wills",
            "31": "The Book of Presents",
            "32": "The Book of Gifts",
            "33": "The Book of ar-Ruqba",
            "34": "The Book of 'Umra",
            "35": "The Book of Agriculture",
            "36": "The Book of the Kind Treatment of Women",
            "37": "The Book of Fighting [The Prohibition of Bloodshed]",
            "38": "The Book of Distribution of Al-Fay'",
            "39": "The Book of al-Bay'ah",
            "40": "The Book of al-'Aqiqah",
            "41": "The Book of al-Fara' and al-'Atirah",
            "42": "The Book of Hunting and Slaughtering",
            "43": "The Book of ad-Dahaya (Sacrifices)",
            "44": "The Book of Financial Transactions",
            "45": "The Book of Oaths (qasamah), Retaliation and Blood Money",
            "46": "The Book of Cutting off the Hand of the Thief",
            "47": "The Book Of Faith and its Signs",
            "48": "The Book of Adornment",
            "49": "The Book of the Etiquette of Judges",
            "50": "The Book of Seeking Refuge with Allah",
            "51": "The Book of Drinks"
        },
        "last_hadithnumber": 5758,
        "section_details": {
            "0": {
                "hadithnumber_first": 0,
                "hadithnumber_last": 0,
                "arabicnumber_first": 0,
                "arabicnumber_last": 0
            },
            "1": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 324,
                "arabicnumber_first": 1,
                "arabicnumber_last": 324
            },
            "2": {
                "hadithnumber_first": 325,
                "hadithnumber_last": 347,
                "arabicnumber_first": 325,
                "arabicnumber_last": 347
            },
            "3": {
                "hadithnumber_first": 348,
                "hadithnumber_last": 395,
                "arabicnumber_first": 348,
                "arabicnumber_last": 395
            },
            "4": {
                "hadithnumber_first": 396,
                "hadithnumber_last": 447,
                "arabicnumber_first": 396,
                "arabicnumber_last": 447
            },
            "5": {
                "hadithnumber_first": 448,
                "hadithnumber_last": 493,
                "arabicnumber_first": 448,
                "arabicnumber_last": 493
            },
            "6": {
                "hadithnumber_first": 494,
                "hadithnumber_last": 625,
                "arabicnumber_first": 494,
                "arabicnumber_last": 625
            },
            "7": {
                "hadithnumber_first": 626,
                "hadithnumber_last": 687,
                "arabicnumber_first": 626,
                "arabicnumber_last": 687
            },
            "8": {
                "hadithnumber_first": 688,
                "hadithnumber_last": 741,
                "arabicnumber_first": 688,
                "arabicnumber_last": 741
            },
            "9": {
                "hadithnumber_first": 742,
                "hadithnumber_last": 776,
                "arabicnumber_first": 742,
                "arabicnumber_last": 776
            },
            "10": {
                "hadithnumber_first": 777,
                "hadithnumber_last": 875,
                "arabicnumber_first": 777,
                "arabicnumber_last": 875
            },
            "11": {
                "hadithnumber_first": 876,
                "hadithnumber_last": 1028,
                "arabicnumber_first": 876,
                "arabicnumber_last": 1028
            },
            "12": {
                "hadithnumber_first": 1029,
                "hadithnumber_last": 1178,
                "arabicnumber_first": 1029,
                "arabicnumber_last": 1178
            },
            "13": {
                "hadithnumber_first": 1179,
                "hadithnumber_last": 1366,
                "arabicnumber_first": 1179,
                "arabicnumber_last": 1366
            },
            "14": {
                "hadithnumber_first": 1367,
                "hadithnumber_last": 1432,
                "arabicnumber_first": 1367,
                "arabicnumber_last": 1432
            },
            "15": {
                "hadithnumber_first": 1433,
                "hadithnumber_last": 1458,
                "arabicnumber_first": 1433,
                "arabicnumber_last": 1458
            },
            "16": {
                "hadithnumber_first": 1459,
                "hadithnumber_last": 1503,
                "arabicnumber_first": 1459,
                "arabicnumber_last": 1503
            },
            "17": {
                "hadithnumber_first": 1504,
                "hadithnumber_last": 1528,
                "arabicnumber_first": 1504,
                "arabicnumber_last": 1528
            },
            "18": {
                "hadithnumber_first": 1529,
                "hadithnumber_last": 1555,
                "arabicnumber_first": 1529,
                "arabicnumber_last": 1555
            },
            "19": {
                "hadithnumber_first": 1556,
                "hadithnumber_last": 1597,
                "arabicnumber_first": 1556,
                "arabicnumber_last": 1597
            },
            "20": {
                "hadithnumber_first": 1598,
                "hadithnumber_last": 1817,
                "arabicnumber_first": 1598,
                "arabicnumber_last": 1817
            },
            "21": {
                "hadithnumber_first": 1818,
                "hadithnumber_last": 2089,
                "arabicnumber_first": 1818,
                "arabicnumber_last": 2089
            },
            "22": {
                "hadithnumber_first": 2090,
                "hadithnumber_last": 2434,
                "arabicnumber_first": 2090,
                "arabicnumber_last": 2434
            },
            "23": {
                "hadithnumber_first": 2435,
                "hadithnumber_last": 2618,
                "arabicnumber_first": 2435,
                "arabicnumber_last": 2618
            },
            "24": {
                "hadithnumber_first": 2619,
                "hadithnumber_last": 3084,
                "arabicnumber_first": 2619,
                "arabicnumber_last": 3084
            },
            "25": {
                "hadithnumber_first": 3085,
                "hadithnumber_last": 3195,
                "arabicnumber_first": 3085,
                "arabicnumber_last": 3195
            },
            "26": {
                "hadithnumber_first": 3196,
                "hadithnumber_last": 3388,
                "arabicnumber_first": 3196,
                "arabicnumber_last": 3388
            },
            "27": {
                "hadithnumber_first": 3389,
                "hadithnumber_last": 3560,
                "arabicnumber_first": 3389,
                "arabicnumber_last": 3560
            },
            "28": {
                "hadithnumber_first": 3561,
                "hadithnumber_last": 3593,
                "arabicnumber_first": 3561,
                "arabicnumber_last": 3593
            },
            "29": {
                "hadithnumber_first": 3594,
                "hadithnumber_last": 3610,
                "arabicnumber_first": 3594,
                "arabicnumber_last": 3610
            },
            "30": {
                "hadithnumber_first": 3611,
                "hadithnumber_last": 3671,
                "arabicnumber_first": 3611,
                "arabicnumber_last": 3671
            },
            "31": {
                "hadithnumber_first": 3672,
                "hadithnumber_last": 3687,
                "arabicnumber_first": 3672,
                "arabicnumber_last": 3687
            },
            "32": {
                "hadithnumber_first": 3688,
                "hadithnumber_last": 3705,
                "arabicnumber_first": 3688,
                "arabicnumber_last": 3705
            },
            "33": {
                "hadithnumber_first": 3706,
                "hadithnumber_last": 3719,
                "arabicnumber_first": 3706,
                "arabicnumber_last": 3719
            },
            "34": {
                "hadithnumber_first": 3720,
                "hadithnumber_last": 3760,
                "arabicnumber_first": 3720,
                "arabicnumber_last": 3760
            },
            "35": {
                "hadithnumber_first": 3761,
                "hadithnumber_last": 3856,
                "arabicnumber_first": 3761,
                "arabicnumber_last": 3856
            },
            "36": {
                "hadithnumber_first": 3939,
                "hadithnumber_last": 3965,
                "arabicnumber_first": 3939,
                "arabicnumber_last": 3965
            },
            "37": {
                "hadithnumber_first": 3966,
                "hadithnumber_last": 4132,
                "arabicnumber_first": 3966,
                "arabicnumber_last": 4132
            },
            "38": {
                "hadithnumber_first": 4133,
                "hadithnumber_last": 4148,
                "arabicnumber_first": 4133,
                "arabicnumber_last": 4148
            },
            "39": {
                "hadithnumber_first": 4149,
                "hadithnumber_last": 4211,
                "arabicnumber_first": 4149,
                "arabicnumber_last": 4211
            },
            "40": {
                "hadithnumber_first": 4212,
                "hadithnumber_last": 4221,
                "arabicnumber_first": 4212,
                "arabicnumber_last": 4221
            },
            "41": {
                "hadithnumber_first": 4222,
                "hadithnumber_last": 4262,
                "arabicnumber_first": 4222,
                "arabicnumber_last": 4262
            },
            "42": {
                "hadithnumber_first": 4263,
                "hadithnumber_last": 4360,
                "arabicnumber_first": 4263,
                "arabicnumber_last": 4360
            },
            "43": {
                "hadithnumber_first": 4361,
                "hadithnumber_last": 4448,
                "arabicnumber_first": 4361,
                "arabicnumber_last": 4448
            },
            "44": {
                "hadithnumber_first": 4449,
                "hadithnumber_last": 4705,
                "arabicnumber_first": 4449,
                "arabicnumber_last": 4705
            },
            "45": {
                "hadithnumber_first": 4706,
                "hadithnumber_last": 4869,
                "arabicnumber_first": 4706,
                "arabicnumber_last": 4869
            },
            "46": {
                "hadithnumber_first": 4870,
                "hadithnumber_last": 4984,
                "arabicnumber_first": 4870,
                "arabicnumber_last": 4984
            },
            "47": {
                "hadithnumber_first": 4985,
                "hadithnumber_last": 5039,
                "arabicnumber_first": 4985,
                "arabicnumber_last": 5039
            },
            "48": {
                "hadithnumber_first": 5040,
                "hadithnumber_last": 5378,
                "arabicnumber_first": 5040,
                "arabicnumber_last": 5378
            },
            "49": {
                "hadithnumber_first": 5379,
                "hadithnumber_last": 5427,
                "arabicnumber_first": 5379,
                "arabicnumber_last": 5427
            },
            "50": {
                "hadithnumber_first": 5428,
                "hadithnumber_last": 5539,
                "arabicnumber_first": 5428,
                "arabicnumber_last": 5539
            },
            "51": {
                "hadithnumber_first": 5540,
                "hadithnumber_last": 5758,
                "arabicnumber_first": 5540,
                "arabicnumber_last": 5758
            }
        }
    },
    "nawawi": {
        "id": "nawawi",
        "name": "Forty Hadith of an-Nawawi",
        "collection": [
            {
                "name": "ara-nawawi",
                "book": "nawawi",
                "author": "Imam Nawawi",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-nawawi.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-nawawi.min.json"
            },
            {
                "name": "eng-nawawi",
                "book": "nawawi",
                "author": "Imam Nawawi",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-nawawi.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-nawawi.min.json"
            }
        ],
        "sections": {
            "0": "",
            "1": "Forty Hadith of an-Nawawi"
        },
        "last_hadithnumber": 42,
        "section_details": {
            "0": {
                "hadithnumber_first": 0,
                "hadithnumber_last": 0,
                "arabicnumber_first": 0,
                "arabicnumber_last": 0
            },
            "1": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 42,
                "arabicnumber_first": 1,
                "arabicnumber_last": 42
            }
        }
    },
    "qudsi": {
        "id": "qudsi",
        "name": "Forty Hadith Qudsi",
        "collection": [
            {
                "name": "ara-qudsi",
                "book": "qudsi",
                "author": "Unknown",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-qudsi.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-qudsi.min.json"
            },
            {
                "name": "eng-qudsi",
                "book": "qudsi",
                "author": "Unknown",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-qudsi.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-qudsi.min.json"
            }
        ],
        "sections": {
            "0": "",
            "1": "Forty Hadith Qudsi"
        },
        "last_hadithnumber": 40,
        "section_details": {
            "0": {
                "hadithnumber_first": 0,
                "hadithnumber_last": 0,
                "arabicnumber_first": 0,
                "arabicnumber_last": 0
            },
            "1": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 40,
                "arabicnumber_first": 1,
                "arabicnumber_last": 40
            }
        }
    },
    "tirmidhi": {
        "id": "tirmidhi",
        "name": "Jami At Tirmidhi",
        "collection": [
            {
                "name": "ara-tirmidhi",
                "book": "tirmidhi",
                "author": "Unknown",
                "language": "Arabic",
                "direction": "rtl",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-tirmidhi.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-tirmidhi.min.json"
            },
            {
                "name": "eng-tirmidhi",
                "book": "tirmidhi",
                "author": "Unknown",
                "language": "English",
                "direction": "ltr",
                "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-tirmidhi.json",
                "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-tirmidhi.min.json"
            }
        ],
        "sections": {
            "0": "",
            "1": "The Book on Purification",
            "2": "The Book on Salat (Prayer)",
            "3": "The Book on Al-Witr",
            "4": "The Book on the Day of Friday",
            "5": "The Book on the Two Eids",
            "6": "The Book on Traveling",
            "7": "The Book on Zakat",
            "8": "The Book on Fasting",
            "9": "The Book on Hajj",
            "10": "The Book on Jana''iz (Funerals)",
            "11": "The Book on Marriage",
            "12": "The Book on Suckling",
            "13": "The Book on Divorce and Li'an",
            "14": "The Book on Business",
            "15": "The Chapters On Judgements From The Messenger of Allah",
            "16": "The Book on Blood Money",
            "17": "The Book on Legal Punishments (Al-Hudud)",
            "18": "The Book on Hunting",
            "19": "The Book on Sacrifices",
            "20": "The Book on Vows and Oaths",
            "21": "The Book on Military Expeditions",
            "22": "The Book on Virtues of Jihad",
            "23": "The Book on Jihad",
            "24": "The Book on Clothing",
            "25": "The Book on Food",
            "26": "The Book on Drinks",
            "27": "Chapters on Righteousness And Maintaining Good Relations With Relatives",
            "28": "Chapters on Medicine",
            "29": "Chapters On Inheritance",
            "30": "Chapters On Wasaya (Wills and Testament)",
            "31": "Chapters On Wala' And Gifts",
            "32": "Chapters On Al-Qadar",
            "33": "Chapters On Al-Fitan",
            "34": "Chapters On Dreams",
            "35": "Chapters On Witnesses",
            "36": "Chapters On Zuhd",
            "37": "Chapters on the description of the Day of Judgement, Ar-Riqaq, and Al-Wara'",
            "38": "Chapters on the description of Paradise",
            "39": "The Book on the Description of Hellfire",
            "40": "The Book on Faith",
            "41": "Chapters on Knowledge",
            "42": "Chapters on Seeking Permission",
            "43": "Chapters on Manners",
            "44": "Chapters on Parables",
            "45": "Chapters on The Virtues of the Qur'an",
            "46": "Chapters on Recitation",
            "47": "Chapters on Tafsir",
            "48": "Chapters on Supplication",
            "49": "Chapters on Virtues"
        },
        "last_hadithnumber": 3956,
        "section_details": {
            "0": {
                "hadithnumber_first": 0,
                "hadithnumber_last": 0,
                "arabicnumber_first": 0,
                "arabicnumber_last": 0
            },
            "1": {
                "hadithnumber_first": 1,
                "hadithnumber_last": 148,
                "arabicnumber_first": 1,
                "arabicnumber_last": 148
            },
            "2": {
                "hadithnumber_first": 149,
                "hadithnumber_last": 451,
                "arabicnumber_first": 149,
                "arabicnumber_last": 451
            },
            "3": {
                "hadithnumber_first": 452,
                "hadithnumber_last": 487,
                "arabicnumber_first": 452,
                "arabicnumber_last": 487
            },
            "4": {
                "hadithnumber_first": 488,
                "hadithnumber_last": 529,
                "arabicnumber_first": 488,
                "arabicnumber_last": 529
            },
            "5": {
                "hadithnumber_first": 530,
                "hadithnumber_last": 543,
                "arabicnumber_first": 530,
                "arabicnumber_last": 543
            },
            "6": {
                "hadithnumber_first": 544,
                "hadithnumber_last": 616,
                "arabicnumber_first": 544,
                "arabicnumber_last": 616
            },
            "7": {
                "hadithnumber_first": 617,
                "hadithnumber_last": 681,
                "arabicnumber_first": 617,
                "arabicnumber_last": 681
            },
            "8": {
                "hadithnumber_first": 682,
                "hadithnumber_last": 808,
                "arabicnumber_first": 682,
                "arabicnumber_last": 808
            },
            "9": {
                "hadithnumber_first": 809,
                "hadithnumber_last": 964,
                "arabicnumber_first": 809,
                "arabicnumber_last": 964
            },
            "10": {
                "hadithnumber_first": 965,
                "hadithnumber_last": 1079,
                "arabicnumber_first": 965,
                "arabicnumber_last": 1079
            },
            "11": {
                "hadithnumber_first": 1080,
                "hadithnumber_last": 1145,
                "arabicnumber_first": 1080,
                "arabicnumber_last": 1145
            },
            "12": {
                "hadithnumber_first": 1146,
                "hadithnumber_last": 1174,
                "arabicnumber_first": 1146,
                "arabicnumber_last": 1174
            },
            "13": {
                "hadithnumber_first": 1175,
                "hadithnumber_last": 1204,
                "arabicnumber_first": 1175,
                "arabicnumber_last": 1204
            },
            "14": {
                "hadithnumber_first": 1205,
                "hadithnumber_last": 1321,
                "arabicnumber_first": 1205,
                "arabicnumber_last": 1321
            },
            "15": {
                "hadithnumber_first": 1322,
                "hadithnumber_last": 1385,
                "arabicnumber_first": 1322,
                "arabicnumber_last": 1385
            },
            "16": {
                "hadithnumber_first": 1386,
                "hadithnumber_last": 1422,
                "arabicnumber_first": 1386,
                "arabicnumber_last": 1422
            },
            "17": {
                "hadithnumber_first": 1423,
                "hadithnumber_last": 1463,
                "arabicnumber_first": 1423,
                "arabicnumber_last": 1463
            },
            "18": {
                "hadithnumber_first": 1464,
                "hadithnumber_last": 1492,
                "arabicnumber_first": 1464,
                "arabicnumber_last": 1492
            },
            "19": {
                "hadithnumber_first": 1493,
                "hadithnumber_last": 1523,
                "arabicnumber_first": 1493,
                "arabicnumber_last": 1523
            },
            "20": {
                "hadithnumber_first": 1524,
                "hadithnumber_last": 1547,
                "arabicnumber_first": 1524,
                "arabicnumber_last": 1547
            },
            "21": {
                "hadithnumber_first": 1548,
                "hadithnumber_last": 1618,
                "arabicnumber_first": 1548,
                "arabicnumber_last": 1618
            },
            "22": {
                "hadithnumber_first": 1619,
                "hadithnumber_last": 1669,
                "arabicnumber_first": 1619,
                "arabicnumber_last": 1669
            },
            "23": {
                "hadithnumber_first": 1670,
                "hadithnumber_last": 1719,
                "arabicnumber_first": 1670,
                "arabicnumber_last": 1719
            },
            "24": {
                "hadithnumber_first": 1720,
                "hadithnumber_last": 1787,
                "arabicnumber_first": 1720,
                "arabicnumber_last": 1787
            },
            "25": {
                "hadithnumber_first": 1788,
                "hadithnumber_last": 1860,
                "arabicnumber_first": 1788,
                "arabicnumber_last": 1860
            },
            "26": {
                "hadithnumber_first": 1861,
                "hadithnumber_last": 1896,
                "arabicnumber_first": 1861,
                "arabicnumber_last": 1896
            },
            "27": {
                "hadithnumber_first": 1897,
                "hadithnumber_last": 2035,
                "arabicnumber_first": 1897,
                "arabicnumber_last": 2035
            },
            "28": {
                "hadithnumber_first": 2036,
                "hadithnumber_last": 2089,
                "arabicnumber_first": 2036,
                "arabicnumber_last": 2089
            },
            "29": {
                "hadithnumber_first": 2090,
                "hadithnumber_last": 2115,
                "arabicnumber_first": 2090,
                "arabicnumber_last": 2115
            },
            "30": {
                "hadithnumber_first": 2116,
                "hadithnumber_last": 2124,
                "arabicnumber_first": 2116,
                "arabicnumber_last": 2124
            },
            "31": {
                "hadithnumber_first": 2125,
                "hadithnumber_last": 2132,
                "arabicnumber_first": 2125,
                "arabicnumber_last": 2132
            },
            "32": {
                "hadithnumber_first": 2133,
                "hadithnumber_last": 2298,
                "arabicnumber_first": 2133,
                "arabicnumber_last": 2298
            },
            "33": {
                "hadithnumber_first": 2158,
                "hadithnumber_last": 2269,
                "arabicnumber_first": 2158,
                "arabicnumber_last": 2269
            },
            "34": {
                "hadithnumber_first": 2270,
                "hadithnumber_last": 2294,
                "arabicnumber_first": 2270,
                "arabicnumber_last": 2294
            },
            "35": {
                "hadithnumber_first": 2295,
                "hadithnumber_last": 2303,
                "arabicnumber_first": 2295,
                "arabicnumber_last": 2303
            },
            "36": {
                "hadithnumber_first": 2304,
                "hadithnumber_last": 2414,
                "arabicnumber_first": 2304,
                "arabicnumber_last": 2414
            },
            "37": {
                "hadithnumber_first": 2415,
                "hadithnumber_last": 2522,
                "arabicnumber_first": 2415,
                "arabicnumber_last": 2522
            },
            "38": {
                "hadithnumber_first": 2523,
                "hadithnumber_last": 2735,
                "arabicnumber_first": 2523,
                "arabicnumber_last": 2735
            },
            "39": {
                "hadithnumber_first": 2573,
                "hadithnumber_last": 2795,
                "arabicnumber_first": 2573,
                "arabicnumber_last": 2795
            },
            "40": {
                "hadithnumber_first": 2606,
                "hadithnumber_last": 2644,
                "arabicnumber_first": 2606,
                "arabicnumber_last": 2644
            },
            "41": {
                "hadithnumber_first": 2645,
                "hadithnumber_last": 2687,
                "arabicnumber_first": 2645,
                "arabicnumber_last": 2687
            },
            "42": {
                "hadithnumber_first": 2688,
                "hadithnumber_last": 2734,
                "arabicnumber_first": 2688,
                "arabicnumber_last": 2734
            },
            "43": {
                "hadithnumber_first": 2736,
                "hadithnumber_last": 2858,
                "arabicnumber_first": 2736,
                "arabicnumber_last": 2858
            },
            "44": {
                "hadithnumber_first": 2859,
                "hadithnumber_last": 2874,
                "arabicnumber_first": 2859,
                "arabicnumber_last": 2874
            },
            "45": {
                "hadithnumber_first": 2875,
                "hadithnumber_last": 2926,
                "arabicnumber_first": 2875,
                "arabicnumber_last": 2926
            },
            "46": {
                "hadithnumber_first": 2927,
                "hadithnumber_last": 2949,
                "arabicnumber_first": 2927,
                "arabicnumber_last": 2949
            },
            "47": {
                "hadithnumber_first": 2950,
                "hadithnumber_last": 3723,
                "arabicnumber_first": 2950,
                "arabicnumber_last": 3723
            },
            "48": {
                "hadithnumber_first": 3370,
                "hadithnumber_last": 3604.1,
                "arabicnumber_first": 3370,
                "arabicnumber_last": 3604.1
            },
            "49": {
                "hadithnumber_first": 3605,
                "hadithnumber_last": 3956,
                "arabicnumber_first": 3605,
                "arabicnumber_last": 3956
            }
        }
    }
}

const getHadithBook = (bookSlug) => {
    return hadithBooks[bookSlug]
}

/**
 *
 * @param {string} bookSlug
 * @param {number} hadithNum
 * @param {'ar' | 'en'} lang
 * @returns {`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${string}-${string}/${number}.json`}
 */
const hadithUrl = (bookSlug, hadithNum, lang = 'en') => `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${['en', 'eng'].includes(lang) ? 'eng' : 'ara'}-${bookSlug}/${hadithNum}.json`

const getHadithBySection = (bookSlug, sectionNum, lang) => {
    const book = hadithBooks[bookSlug];

    if (!book) {
        return { error: true, message: "Hadith Book not found" };
    }

    const sectionDetails = book.section_details || {}; // Default to empty object

    // Ensure section exists within valid range
    if (!sectionDetails[sectionNum]) {
        return { error: true, message: "Hadith Book Section not found" };
    }

    const sectionInfo = sectionDetails[sectionNum];

    return {
        error: false,
        from: sectionInfo.hadithnumber_first || 0,
        to: sectionInfo.hadithnumber_last || 0
    };
};

const getHadith = async (bookSlug, sectionNum, hadithNum, lang) => {
    let response = {};
    logger.start("Getting Hadith...");

    // Handle English fetch
    if (!lang || ["en", "eng"].includes(lang)) {
        logger.info("English...");
        const req = await fetch(hadithUrl(bookSlug, hadithNum, 'en'));
        logger.debug("English URL", hadithUrl(bookSlug, hadithNum, 'en'));
        const res = await req.json();
        logger.success("English result", res.sections);

        // Create a new object instead of modifying the response directly
        response = {
            ...res,
            hadiths: [{
                ...res.hadiths[0],
                text: {
                    en: res.hadiths[0].text
                },
                reference: {
                    book: bookSlug,
                    section: sectionNum,
                    hadith: hadithNum
                }
            }],

        };
        logger.end("English final", response);
    }

    // Handle Arabic fetch
    if (!lang || ["ar", "ara"].includes(lang)) {
        logger.info("Arabic...");
        const req = await fetch(hadithUrl(bookSlug, hadithNum, 'ar'));
        const res = await req.json();
        logger.success("Arabic result", res);

        // If we already have a response (from English), merge the Arabic text
        if (response.hadiths) {
            response.hadiths[0].text.ar = res.hadiths[0].text;
        } else {
            // If this is Arabic only, create new structure
            response = {
                ...res,
                hadiths: [{
                    ...res.hadiths[0],
                    text: {
                        ar: res.hadiths[0].text
                    }
                }]
            };
        }
        logger.end("Arabic final", response);
    }

    return response;
};


// from hadith-json - https://github.com/fawazahmed0/hadith-api
// Sunan Abu Dawud
// Sahih al Bukhari
// Forty Hadith of Shah Waliullah Dehlawi
// Sunan Ibn Majah
// Muwatta Malik
// Sahih Muslim
// Sunan an Nasai
// Forty Hadith of an-Nawawi
// Forty Hadith Qudsi
// Jami At Tirmidhi


// from Hadith API - https://hadithapi.com/
// Al-Silsila Sahiha
// Musnad Ahmad
// Mishkat Al-Masabih

export { hadithBooks, getHadith, getHadithBySection, getHadithBook }