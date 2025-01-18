import {fetcher} from "$lib/sources/requests/requests.js";

async function fetchQuran(endpoint) {
    let allEndpoints = [endpoint.startsWith('/') ? endpoint : `/${endpoint}`]
    if (endpoint.endsWith('.min.json')) allEndpoints = [...allEndpoints, `${endpoint}`.replace('.min.json', '.json')]
    else if (endpoint.endsWith('.json')) allEndpoints = [...allEndpoints, `${endpoint}`.replace('.json', '.min.json')]
    else allEndpoints = [...allEndpoints, `${endpoint}.json`]

    const firstType = allEndpoints.map(endpoint => `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1${endpoint}`)
    const secondType = allEndpoints.map(endpoint => `https://raw.githubusercontent.com/fawazahmed0/quran-api${endpoint}`)
    return await fetcher([
        ...firstType,
        ...secondType,
    ], {}, 3)
}

const quranEditions = [
    {
        "name": "ara-jalaladdinalmah",
        "author": "Jalal Ad Din Al Mahalli And Jalal Ad Din As Suyuti",
        "language": "Arabic",
        "direction": "rtl",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-jalaladdinalmah.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-jalaladdinalmah.min.json"
    },
    {
        "name": "ara-kingfahadquranc-la",
        "author": "King Fahad Quran Complex",
        "language": "Arabic",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-kingfahadquranc-la.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-kingfahadquranc-la.min.json"
    },
    {
        "name": "ara-kingfahadquranc",
        "author": "King Fahad Quran Complex",
        "language": "Arabic",
        "direction": "rtl",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-kingfahadquranc.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-kingfahadquranc.min.json"
    },
    {
        "name": "ara-quran-la",
        "author": "Quran Transliteration",
        "language": "Arabic",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la.min.json"
    },
    {
        "name": "ara-quran-la1",
        "author": "Quran Transliteration",
        "language": "Arabic",
        "direction": "ltr",
        "source": "https://quran411.com",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la1.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la1.min.json"
    },
    {
        "name": "ara-quran-la2",
        "author": "Quran Transliteration",
        "language": "Arabic",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la2.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la2.min.json"
    },
    {
        "name": "ara-quran-la3",
        "author": "Quran Transliteration",
        "language": "Arabic",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la3.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la3.min.json"
    },
    {
        "name": "ara-quran-la4",
        "author": "Quran Transliteration",
        "language": "Arabic",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la4.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la4.min.json"
    },
    {
        "name": "ara-quran-la5",
        "author": "Quran Transliteration",
        "language": "Arabic",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la5.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-la5.min.json"
    },
    {
        "name": "ara-quran-lad4",
        "author": "Quran Transliteration",
        "language": "Arabic",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-lad4.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quran-lad4.min.json"
    },
    {
        "name": "ara-quranacademy",
        "author": "Quran Academy",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://github.com/quranacademy/quran-text",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranacademy.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranacademy.min.json"
    },
    {
        "name": "ara-quranbazzi",
        "author": "Quran Bazzi",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 7 ,The verse numbering of this quran has been changed to Uthmanic version, so that Apps can easily use this, and people can benefit from it, If you want the copy with original verse numbering, please go to https://fonts.qurancomplex.gov.sa/ , The following characters were replaced (to open fathatan,dammatan and kasratan) to conform to unicode standard,'ٖ'(u+0656)->'ࣲ'(u+08f2),'ٗ'(u+0657)->'ࣰ'(u+08f0),'ٞ'(u+065E)->'ࣱ'(u+08f1) , You can use bazzi fonts with full suffix to view this text",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranbazzi.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranbazzi.min.json"
    },
    {
        "name": "ara-qurandoori",
        "author": "Quran Doori",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 8 ,The verse numbering of this quran has been changed to Uthmanic version, so that Apps can easily use this, and people can benefit from it, If you want the copy with original verse numbering, please go to https://fonts.qurancomplex.gov.sa/ , The following characters were replaced (to open fathatan,dammatan and kasratan) to conform to unicode standard,'ٖ'(u+0656)->'ࣲ'(u+08f2),'ٗ'(u+0657)->'ࣰ'(u+08f0),'ٞ'(u+065E)->'ࣱ'(u+08f1) and also 'ۭ'(u+06ED)->'ٜ'(u+065c), You can use doori fonts with full suffix to view this text",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurandoori.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurandoori.min.json"
    },
    {
        "name": "ara-qurandoorinonun",
        "author": "Quran Doori Non Unicode",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 8 ,The verse numbering of this quran has been changed to Uthmanic version, so that Apps can easily use this, and people can benefit from it, If you want the copy with original verse numbering, please go to https://fonts.qurancomplex.gov.sa/, Please use the quran complex doori fonts to view this text properly",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurandoorinonun.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurandoorinonun.min.json"
    },
    {
        "name": "ara-quranindopak",
        "author": "Quran Indopak",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://fonts.qurancomplex.gov.sa/",
        "comments": "This is a copy of Quran Nastaleeq from https://fonts.qurancomplex.gov.sa/, the quran complex version was converted to unicode standard, most of the symbols were taken from Arabic Extended-A block and the main arabic block, Please use the Google noto sans arabic font from here https://www.google.com/get/noto/#sans-arab or fonts with -full suffix, which supports all the arabic unicode blocks, In case you find any mistake with this version of quran, please let me know at https://bit.ly/33FuNZS",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranindopak.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranindopak.min.json"
    },
    {
        "name": "ara-qurankhaledhosn",
        "author": "Quran Khaled Hosney",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://github.com/khaledhosny/quran-data",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurankhaledhosn.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurankhaledhosn.min.json"
    },
    {
        "name": "ara-qurannastaleeqn",
        "author": "Quran Nastaleeq Non Unicode",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://fonts.qurancomplex.gov.sa/",
        "comments": "Version 10, Original Version from qurancomplex, this text does not follow proper unicode standard, Please use the quran complex nastaleeq fonts to view this text properly, this quran variant is also known as IndoPak",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurannastaleeqn.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurannastaleeqn.min.json"
    },
    {
        "name": "ara-quranphoneticst-la",
        "author": "Quran Phonetics Transliteration",
        "language": "Arabic",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranphoneticst-la.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranphoneticst-la.min.json"
    },
    {
        "name": "ara-quranphoneticst",
        "author": "Quran Phonetics Transliteration",
        "language": "Arabic",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranphoneticst.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranphoneticst.min.json"
    },
    {
        "name": "ara-quranqaloon",
        "author": "Quran Qaloon",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 8 ,The verse numbering of this quran has been changed to Uthmanic version, so that Apps can easily use this, and people can benefit from it, If you want the copy with original verse numbering, please go to https://fonts.qurancomplex.gov.sa/ , The following characters were replaced (to open fathatan,dammatan and kasratan) to conform to unicode standard,'ٖ'(u+0656)->'ࣲ'(u+08f2),'ٗ'(u+0657)->'ࣰ'(u+08f0),'ٞ'(u+065E)->'ࣱ'(u+08f1) , You can use qaloon fonts with full suffix to view this text",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranqaloon.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranqaloon.min.json"
    },
    {
        "name": "ara-quranqumbul",
        "author": "Quran Qumbul",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 7 ,The verse numbering of this quran has been changed to Uthmanic version, so that Apps can easily use this, and people can benefit from it, If you want the copy with original verse numbering, please go to https://fonts.qurancomplex.gov.sa/, The following characters were replaced (to open fathatan,dammatan and kasratan) to conform to unicode standard,'ٖ'(u+0656)->'ࣲ'(u+08f2),'ٗ'(u+0657)->'ࣰ'(u+08f0),'ٞ'(u+065E)->'ࣱ'(u+08f1) , You can use qumbul fonts with full suffix to view this text",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranqumbul.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranqumbul.min.json"
    },
    {
        "name": "ara-quranshouba",
        "author": "Quran Shouba",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 7, Please use the quran complex shouba fonts to view this text properly, The following characters were replaced (to open fathatan,dammatan and kasratan) to conform to unicode standard,'ٖ'(u+0656)->'ࣲ'(u+08f2),'ٗ'(u+0657)->'ࣰ'(u+08f0),'ٞ'(u+065E)->'ࣱ'(u+08f1) , You can use shouba fonts with full suffix to view this text",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranshouba.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranshouba.min.json"
    },
    {
        "name": "ara-quransimple",
        "author": "Quran Simple",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://api.alquran.cloud/v1/quran/quran-simple",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quransimple.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quransimple.min.json"
    },
    {
        "name": "ara-quransoosi",
        "author": "Quran Soosi",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 8 ,The verse numbering of this quran has been changed to Uthmanic version, so that Apps can easily use this, and people can benefit from it, If you want the copy with original verse numbering, please go to https://fonts.qurancomplex.gov.sa/ , The following characters were replaced (to open fathatan,dammatan and kasratan) to conform to unicode standard,'ٖ'(u+0656)->'ࣲ'(u+08f2),'ٗ'(u+0657)->'ࣰ'(u+08f0),'ٞ'(u+065E)->'ࣱ'(u+08f1) and also 'ۭ'(u+06ED)->'ٜ'(u+065c), You can use soosi fonts with full suffix to view this text",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quransoosi.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quransoosi.min.json"
    },
    {
        "name": "ara-quransoosinonun",
        "author": "Quran Soosi Non Unicode",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 8 ,The verse numbering of this quran has been changed to Uthmanic version, so that Apps can easily use this, and people can benefit from it, If you want the copy with original verse numbering, please go to https://fonts.qurancomplex.gov.sa/, Please use the quran complex soosi fonts to view this text properly",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quransoosinonun.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quransoosinonun.min.json"
    },
    {
        "name": "ara-quranuthmanienc",
        "author": "Quran Uthmani Enc",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://quranenc.com",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanienc.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanienc.min.json"
    },
    {
        "name": "ara-quranuthmanihaf",
        "author": "Quran Uthmani Hafs",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 13, Please use the quran complex Uthamnic fonts to view this text properly, The following characters were replaced (to open fathatan,dammatan and kasratan) to conform to unicode standard,'ٖ'(u+0656)->'ࣲ'(u+08f2),'ٗ'(u+0657)->'ࣰ'(u+08f0),'ٞ'(u+065E)->'ࣱ'(u+08f1) , You can use uthamic hafs fonts with full suffix to view this text",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanihaf.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanihaf.min.json"
    },
    {
        "name": "ara-quranuthmanihaf1",
        "author": "Quran Uthmani Hafs No Diacritics",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanihaf1.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanihaf1.min.json"
    },
    {
        "name": "ara-quranwarsh",
        "author": "Quran Warsh",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://qurancomplex.gov.sa/",
        "comments": "Version 8, The verse numbering of this quran has been changed to Uthmanic version, so that Apps can easily use this, and people can benefit from it, If you want the copy with original verse numbering, please go to https://fonts.qurancomplex.gov.sa/, The following characters were replaced (to open fathatan,dammatan and kasratan) to conform to unicode standard,'ٖ'(u+0656)->'ࣲ'(u+08f2),'ٗ'(u+0657)->'ࣰ'(u+08f0),'ٞ'(u+065E)->'ࣱ'(u+08f1) , You can use warsh fonts with full suffix to view this text",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranwarsh.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranwarsh.min.json"
    },
    {
        "name": "ara-sirajtafseer",
        "author": "Siraj Tafseer",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://quranenc.com",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-sirajtafseer.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-sirajtafseer.min.json"
    },
    {
        "name": "ara-sirajtafseernod",
        "author": "Siraj Tafseer No Diacritics",
        "language": "Arabic",
        "direction": "rtl",
        "source": "https://quranenc.com",
        "comments": "Diacritics removed for easier searching",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-sirajtafseernod.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-sirajtafseernod.min.json"
    },
    {
        "name": "eng-abdelhaleem",
        "author": "Abdel Haleem",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdelhaleem.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdelhaleem.min.json"
    },
    {
        "name": "eng-abdulhye",
        "author": "Abdul Hye",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdulhye.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdulhye.min.json"
    },
    {
        "name": "eng-abdullahyusufal",
        "author": "Abdullah Yusuf Ali",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdullahyusufal.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdullahyusufal.min.json"
    },
    {
        "name": "eng-abdulmajiddarya",
        "author": "Abdul Majid Daryabadi",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdulmajiddarya.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdulmajiddarya.min.json"
    },
    {
        "name": "eng-abulalamaududi",
        "author": "Abul Ala Maududi",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abulalamaududi.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abulalamaududi.min.json"
    },
    {
        "name": "eng-ahmedali",
        "author": "Ahmed Ali",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ahmedali.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ahmedali.min.json"
    },
    {
        "name": "eng-aishabewley",
        "author": "Aisha Bewley",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aishabewley.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aishabewley.min.json"
    },
    {
        "name": "eng-ajarberry",
        "author": "A. J. Arberry",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "The Author is of non-muslim faith",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ajarberry.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ajarberry.min.json"
    },
    {
        "name": "eng-albilalmuhammad",
        "author": "Al Bilal Muhammad Et Al",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-albilalmuhammad.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-albilalmuhammad.min.json"
    },
    {
        "name": "eng-alibakhtiarinej",
        "author": "Ali Bakhtiari Nejad",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-alibakhtiarinej.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-alibakhtiarinej.min.json"
    },
    {
        "name": "eng-aliquliqarai",
        "author": "Ali Quli Qarai",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aliquliqarai.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aliquliqarai.min.json"
    },
    {
        "name": "eng-aliquliqarai1",
        "author": "Ali Quli Qarai",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aliquliqarai1.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aliquliqarai1.min.json"
    },
    {
        "name": "eng-aliunal",
        "author": "Ali Unal",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aliunal.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-aliunal.min.json"
    },
    {
        "name": "eng-almuntakhabfita",
        "author": "Almuntakhab Fi Tafsir Alquran Alkarim",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-almuntakhabfita.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-almuntakhabfita.min.json"
    },
    {
        "name": "eng-drkamalomar",
        "author": "Dr Kamal Omar",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-drkamalomar.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-drkamalomar.min.json"
    },
    {
        "name": "eng-drlalehbakhtiar",
        "author": "Dr Laleh Bakhtiar",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-drlalehbakhtiar.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-drlalehbakhtiar.min.json"
    },
    {
        "name": "eng-drmunirmunshey",
        "author": "Dr Munir Munshey",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-drmunirmunshey.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-drmunirmunshey.min.json"
    },
    {
        "name": "eng-edwardhenrypalm",
        "author": "Edward Henry Palmer",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "The Author is of non-muslim faith",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-edwardhenrypalm.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-edwardhenrypalm.min.json"
    },
    {
        "name": "eng-farookmalik",
        "author": "Farook Malik",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-farookmalik.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-farookmalik.min.json"
    },
    {
        "name": "eng-georgesale",
        "author": "George Sale",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "The Author is of non-muslim faith",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-georgesale.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-georgesale.min.json"
    },
    {
        "name": "eng-hamidsaziz",
        "author": "Hamid S Aziz",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-hamidsaziz.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-hamidsaziz.min.json"
    },
    {
        "name": "eng-johnmedowsrodwe",
        "author": "John Medows Rodwell",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "The Author is of non-muslim faith",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-johnmedowsrodwe.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-johnmedowsrodwe.min.json"
    },
    {
        "name": "eng-literal",
        "author": "Literal",
        "language": "English",
        "direction": "ltr",
        "source": "http://www.qurandatabase.org",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-literal.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-literal.min.json"
    },
    {
        "name": "eng-maududi",
        "author": "Maududi",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-maududi.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-maududi.min.json"
    },
    {
        "name": "eng-miraneesorigina",
        "author": "Mir Anees Original",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-miraneesorigina.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-miraneesorigina.min.json"
    },
    {
        "name": "eng-miraneesuddin",
        "author": "Mir Aneesuddin",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "This is modifed version of original translation, for example I replaced prophet names to their biblical variants",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-miraneesuddin.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-miraneesuddin.min.json"
    },
    {
        "name": "eng-mohammadhabibsh",
        "author": "Mohammad Habib Shakir",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mohammadhabibsh.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mohammadhabibsh.min.json"
    },
    {
        "name": "eng-mohammadshafi",
        "author": "Mohammad Shafi",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mohammadshafi.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mohammadshafi.min.json"
    },
    {
        "name": "eng-mohammedmarmadu",
        "author": "Mohammed Marmaduke William Pickthall",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mohammedmarmadu.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mohammedmarmadu.min.json"
    },
    {
        "name": "eng-muftitaqiusmani",
        "author": "Mufti Taqi Usmani",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muftitaqiusmani.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muftitaqiusmani.min.json"
    },
    {
        "name": "eng-muhammadasad",
        "author": "Muhammad Asad",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadasad.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadasad.min.json"
    },
    {
        "name": "eng-muhammadmahmoud",
        "author": "Muhammad Mahmoud Ghali",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadmahmoud.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadmahmoud.min.json"
    },
    {
        "name": "eng-muhammadsarwar",
        "author": "Muhammad Sarwar",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadsarwar.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadsarwar.min.json"
    },
    {
        "name": "eng-muhammadtaqiudd",
        "author": "Muhammad Taqi Ud Din Al Hilali And Muhammad Muhsin Khan",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadtaqiudd.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadtaqiudd.min.json"
    },
    {
        "name": "eng-muhammadtaqiusm",
        "author": "Muhammad Taqi Usmani",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadtaqiusm.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-muhammadtaqiusm.min.json"
    },
    {
        "name": "eng-mustafakhattaba",
        "author": "Mustafa Khattab Allah Edition",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mustafakhattaba.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mustafakhattaba.min.json"
    },
    {
        "name": "eng-mustafakhattabg",
        "author": "Mustafa Khattab God Edition",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mustafakhattabg.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-mustafakhattabg.min.json"
    },
    {
        "name": "eng-njdawood",
        "author": "N J Dawood",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "The Author is of non-muslim faith",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-njdawood.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-njdawood.min.json"
    },
    {
        "name": "eng-rowwadtranslati",
        "author": "Rowwad Translation Center",
        "language": "English",
        "direction": "ltr",
        "source": "https://quranenc.com/en/browse/english_rwwad",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-rowwadtranslati.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-rowwadtranslati.min.json"
    },
    {
        "name": "eng-safikaskas",
        "author": "Safi Kaskas",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-safikaskas.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-safikaskas.min.json"
    },
    {
        "name": "eng-safiurrahmanalm",
        "author": "Safi Ur Rahman Al Mubarakpuri",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-safiurrahmanalm.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-safiurrahmanalm.min.json"
    },
    {
        "name": "eng-shabbirahmed",
        "author": "Shabbir Ahmed",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-shabbirahmed.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-shabbirahmed.min.json"
    },
    {
        "name": "eng-syedvickarahame",
        "author": "Syed Vickar Ahamed",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-syedvickarahame.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-syedvickarahame.min.json"
    },
    {
        "name": "eng-talalaitaninewt",
        "author": "Talal A Itani New Translation",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-talalaitaninewt.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-talalaitaninewt.min.json"
    },
    {
        "name": "eng-talalitani",
        "author": "Talal Itani",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-talalitani.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-talalitani.min.json"
    },
    {
        "name": "eng-tbirving",
        "author": "Tbirving",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-tbirving.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-tbirving.min.json"
    },
    {
        "name": "eng-themonotheistgr",
        "author": "The Monotheist Group Edition",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-themonotheistgr.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-themonotheistgr.min.json"
    },
    {
        "name": "eng-themonotheistgr1",
        "author": "The Monotheist Group Edition",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-themonotheistgr1.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-themonotheistgr1.min.json"
    },
    {
        "name": "eng-thestudyquran",
        "author": "The Study Quran",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-thestudyquran.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-thestudyquran.min.json"
    },
    {
        "name": "eng-ummmuhammad",
        "author": "Umm Muhammad",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ummmuhammad.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-ummmuhammad.min.json"
    },
    {
        "name": "eng-wahiduddinkhan",
        "author": "Wahiduddin Khan",
        "language": "English",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-wahiduddinkhan.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-wahiduddinkhan.min.json"
    },
    {
        "name": "eng-yusufaliorig",
        "author": "Yusuf Ali Orig",
        "language": "English",
        "direction": "ltr",
        "source": "",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-yusufaliorig.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-yusufaliorig.min.json"
    },
    {
        "name": "hau-abubakarmahmood-la",
        "author": "Abubakar Mahmood Jummi",
        "language": "Hausa",
        "direction": "ltr",
        "source": "https://quranenc.com/check/hausa_gummi/v1.2.0-csv.1 , https://quranenc.com/en/browse/hausa_gummi , https://quranenc.com ,",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/hau-abubakarmahmood-la.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/hau-abubakarmahmood-la.min.json"
    },
    {
        "name": "hau-abubakarmahmood",
        "author": "Abubakar Mahmood Jummi",
        "language": "Hausa",
        "direction": "ltr",
        "source": "https://quranenc.com/check/hausa_gummi/v1.2.0-csv.1 , https://quranenc.com/en/browse/hausa_gummi , https://quranenc.com ,",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/hau-abubakarmahmood.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/hau-abubakarmahmood.min.json"
    },
    {
        "name": "hau-abubakarmahmoud-la",
        "author": "Abubakar Mahmoud Gumi",
        "language": "Hausa",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/hau-abubakarmahmoud-la.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/hau-abubakarmahmoud-la.min.json"
    },
    {
        "name": "hau-abubakarmahmoud",
        "author": "Abubakar Mahmoud Gumi",
        "language": "Hausa",
        "direction": "ltr",
        "source": "http://tanzil.net",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/hau-abubakarmahmoud.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/hau-abubakarmahmoud.min.json"
    },
    {
        "name": "yor-shaykhaburahima-la",
        "author": "Shaykh Abu Rahimah Mikael Aykyuni",
        "language": "Yoruba",
        "direction": "ltr",
        "source": "https://quranenc.com/check/yoruba_mikail/v1.0.0-csv.1 , https://quranenc.com/en/browse/yoruba_mikail , https://quranenc.com ,",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/yor-shaykhaburahima-la.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/yor-shaykhaburahima-la.min.json"
    },
    {
        "name": "yor-shaykhaburahima",
        "author": "Shaykh Abu Rahimah Mikael Aykyuni",
        "language": "Yoruba",
        "direction": "ltr",
        "source": "https://quranenc.com/check/yoruba_mikail/v1.0.0-csv.1 , https://quranenc.com/en/browse/yoruba_mikail , https://quranenc.com ,",
        "comments": "",
        "link": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/yor-shaykhaburahima.json",
        "linkmin": "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/yor-shaykhaburahima.min.json"
    }
]

const getChapter = async (quranEditionId, surahNum) => {
    const chapterNum = `${Number(surahNum)}`
    const req = await fetchQuran(`/editions/${quranEditionId}/${chapterNum}.json`)
    const res = await req.json()
    return res ?? null
}

const getVerse = async (quranEditionId, surahNum, verseNum) => {
    const chapterNum = `${Number(surahNum)}`
    const verseNumber = `${Number(verseNum)}`
    const req = await fetchQuran(`/editions/${quranEditionId}/${chapterNum}/${verseNumber}.json`)
    const res = await req.json()
    return res ?? null
}

const getJuz = async (quranEditionId, juzNum) => {
    const juzNumber = `${Number(juzNum)}`
    const req = await fetchQuran(`/editions/${quranEditionId}/juzs/${juzNumber}.json`)
    const res = await req.json()
    return res ?? null
}

const getPage = async (quranEditionId, pageNum) => {
    const pageNumber = `${Number(pageNum)}`
    const req = await fetchQuran(`/editions/${quranEditionId}/pages/${pageNumber}.json`)
    const res = await req.json()
    return res ?? null
}

const getRuku = async (quranEditionId, rukuNo) => {
    if (Number(rukuNo) > 558) return null
    const rukuNumber = `${Number(rukuNo)}`
    const req = await fetchQuran(`/editions/${quranEditionId}/rukus/${rukuNumber}.json`)
    const res = await req.json()
    return res ?? null
}

const getQuranInfo = () => {
    return {
        chapters: [{
            "chapter": 1,
            "name": {"ar": "سُوْرَةُ الْفَاتِحَةِ", "en": "The Opening"},
            "revelation": "Mecca",
            "versesCount": 7
        }, {
            "chapter": 2,
            "name": {"ar": "سُوْرَةُ البَقَرَةِ", "en": "The Cow"},
            "revelation": "Madina",
            "versesCount": 286
        }, {
            "chapter": 3,
            "name": {"ar": "سُوْرَةُ اٰلِ عِمْرٰنَ", "en": "The Family of Imraan"},
            "revelation": "Madina",
            "versesCount": 200
        }, {
            "chapter": 4,
            "name": {"ar": "سُوْرَةُ النِّسَآءِ", "en": "The Women"},
            "revelation": "Madina",
            "versesCount": 176
        }, {
            "chapter": 5,
            "name": {"ar": "سُوْرَةُ المَآئِدَةِ", "en": "The Table"},
            "revelation": "Madina",
            "versesCount": 120
        }, {
            "chapter": 6,
            "name": {"ar": "سُوْرَةُ الْاَنْعَامِ", "en": "The Cattle"},
            "revelation": "Mecca",
            "versesCount": 165
        }, {
            "chapter": 7,
            "name": {"ar": "سُوْرَةُ الْاَعْرَافِ", "en": "The Heights"},
            "revelation": "Mecca",
            "versesCount": 206
        }, {
            "chapter": 8,
            "name": {"ar": "سُوْرَةُ الْاَنْفَالِ", "en": "The Spoils of War"},
            "revelation": "Madina",
            "versesCount": 75
        }, {
            "chapter": 9,
            "name": {"ar": "سُوْرَةُ التَّوْبَةِ", "en": "The Repentance"},
            "revelation": "Madina",
            "versesCount": 129
        }, {
            "chapter": 10,
            "name": {"ar": "سُوْرَةُ يُوْنُسَ", "en": "Jonas"},
            "revelation": "Mecca",
            "versesCount": 109
        }, {
            "chapter": 11,
            "name": {"ar": "سُوْرَةُ هُوْدٍ", "en": "Hud"},
            "revelation": "Mecca",
            "versesCount": 123
        }, {
            "chapter": 12,
            "name": {"ar": "سُوْرَةُ يُوسُفَ", "en": "Joseph"},
            "revelation": "Mecca",
            "versesCount": 111
        }, {
            "chapter": 13,
            "name": {"ar": "سُوْرَةُ الرَّعْدِ", "en": "The Thunder"},
            "revelation": "Madina",
            "versesCount": 43
        }, {
            "chapter": 14,
            "name": {"ar": "سُوْرَةُ اِبْرَاهِيْمَ", "en": "Abraham"},
            "revelation": "Mecca",
            "versesCount": 52
        }, {
            "chapter": 15,
            "name": {"ar": "سُوْرَةُ الْحِجْرِ", "en": "The Rock"},
            "revelation": "Mecca",
            "versesCount": 99
        }, {
            "chapter": 16,
            "name": {"ar": "سُوْرَةُ النَّحْلِ", "en": "The Bee"},
            "revelation": "Mecca",
            "versesCount": 128
        }, {
            "chapter": 17,
            "name": {"ar": "سُوْرَةُ الإِسۡرَاءِ", "en": "The Night Journey"},
            "revelation": "Mecca",
            "versesCount": 111
        }, {
            "chapter": 18,
            "name": {"ar": "سُوْرَةُ الْكَهْفِ", "en": "The Cave"},
            "revelation": "Mecca",
            "versesCount": 110
        }, {
            "chapter": 19,
            "name": {"ar": "سُوْرَةُ مَرْيَمَ", "en": "Mary"},
            "revelation": "Mecca",
            "versesCount": 98
        }, {
            "chapter": 20,
            "name": {"ar": "سُوْرَةُ طٰهٰ", "en": "Taa-Haa"},
            "revelation": "Mecca",
            "versesCount": 135
        }, {
            "chapter": 21,
            "name": {"ar": "سُوْرَةُ الْاَنْۣبِيَآءِ", "en": "The Prophets"},
            "revelation": "Mecca",
            "versesCount": 112
        }, {
            "chapter": 22,
            "name": {"ar": "سُوْرَةُ الْحَجِّ", "en": "The Pilgrimage"},
            "revelation": "Madina",
            "versesCount": 78
        }, {
            "chapter": 23,
            "name": {"ar": "سُوْرَةُ الْمُؤْمِنُوْنَ", "en": "The Believers"},
            "revelation": "Mecca",
            "versesCount": 118
        }, {
            "chapter": 24,
            "name": {"ar": "سُوْرَةُ النُّوْرِ", "en": "The Light"},
            "revelation": "Madina",
            "versesCount": 64
        }, {
            "chapter": 25,
            "name": {"ar": "سُوْرَةُ الْفُرْقَانِ", "en": "The Criterion"},
            "revelation": "Mecca",
            "versesCount": 77
        }, {
            "chapter": 26,
            "name": {"ar": "سُوْرَةُ الشُّعَرَآءِ", "en": "The Poets"},
            "revelation": "Mecca",
            "versesCount": 227
        }, {
            "chapter": 27,
            "name": {"ar": "سُوْرَةُ النَّمْلِ", "en": "The Ant"},
            "revelation": "Mecca",
            "versesCount": 93
        }, {
            "chapter": 28,
            "name": {"ar": "سُوْرَةُ الْقَصَصِ", "en": "The Stories"},
            "revelation": "Mecca",
            "versesCount": 88
        }, {
            "chapter": 29,
            "name": {"ar": "سُوْرَةُ الْعَنْكَبُوْتِ", "en": "The Spider"},
            "revelation": "Mecca",
            "versesCount": 69
        }, {
            "chapter": 30,
            "name": {"ar": "سُوْرَةُ الرُّوْمِ", "en": "The Romans"},
            "revelation": "Mecca",
            "versesCount": 60
        }, {
            "chapter": 31,
            "name": {"ar": "سُوْرَةُ لُقْمَانَ", "en": "Luqman"},
            "revelation": "Mecca",
            "versesCount": 34
        }, {
            "chapter": 32,
            "name": {"ar": "سُوْرَةُ السَّجْدَةِ", "en": "The Prostration"},
            "revelation": "Mecca",
            "versesCount": 30
        }, {
            "chapter": 33,
            "name": {"ar": "سُوْرَةُ الْاَحْزَابِ", "en": "The Clans"},
            "revelation": "Madina",
            "versesCount": 73
        }, {
            "chapter": 34,
            "name": {"ar": "سُوْرَةُ سَبَاٍ", "en": "Sheba"},
            "revelation": "Mecca",
            "versesCount": 54
        }, {
            "chapter": 35,
            "name": {"ar": "سُوْرَةُ فَاطِرٍ", "en": "The Originator"},
            "revelation": "Mecca",
            "versesCount": 45
        }, {
            "chapter": 36,
            "name": {"ar": "سُوْرَةُ يٰسٓ", "en": "Yaseen"},
            "revelation": "Mecca",
            "versesCount": 83
        }, {
            "chapter": 37,
            "name": {"ar": "سُوْرَةُ الصَّافَّاتِ", "en": "Those drawn up in Ranks"},
            "revelation": "Mecca",
            "versesCount": 182
        }, {
            "chapter": 38,
            "name": {"ar": "سُوْرَةُ صٓ", "en": "The letter Saad"},
            "revelation": "Mecca",
            "versesCount": 88
        }, {
            "chapter": 39,
            "name": {"ar": "سُوْرَةُ الزُّمَرِ", "en": "The Groups"},
            "revelation": "Mecca",
            "versesCount": 75
        }, {
            "chapter": 40,
            "name": {"ar": "سُوْرَةُ الْمُؤْمِنِ", "en": "The Forgiver"},
            "revelation": "Mecca",
            "versesCount": 85
        }, {
            "chapter": 41,
            "name": {"ar": "سُوْرَةُ فُصِّلَتۡ", "en": "Explained in detail"},
            "revelation": "Mecca",
            "versesCount": 54
        }, {
            "chapter": 42,
            "name": {"ar": "سُوْرَةُ الشُّوْرٰي", "en": "Consultation"},
            "revelation": "Mecca",
            "versesCount": 53
        }, {
            "chapter": 43,
            "name": {"ar": "سُوْرَةُ الزُّخْرُفِ", "en": "Ornaments of gold"},
            "revelation": "Mecca",
            "versesCount": 89
        }, {
            "chapter": 44,
            "name": {"ar": "سُوْرَةُ الدُّخَانِ", "en": "The Smoke"},
            "revelation": "Mecca",
            "versesCount": 59
        }, {
            "chapter": 45,
            "name": {"ar": "سُوْرَةُ الْجَاثِيَةِ", "en": "Crouching"},
            "revelation": "Mecca",
            "versesCount": 37
        }, {
            "chapter": 46,
            "name": {"ar": "سُوْرَةُ الْاَحْقَافِ", "en": "The Dunes"},
            "revelation": "Mecca",
            "versesCount": 35
        }, {
            "chapter": 47,
            "name": {"ar": "سُوْرَةُ مُحَمَّدٍ", "en": "Muhammad"},
            "revelation": "Madina",
            "versesCount": 38
        }, {
            "chapter": 48,
            "name": {"ar": "سُوْرَةُ الْفَتْحِ", "en": "The Victory"},
            "revelation": "Madina",
            "versesCount": 29
        }, {
            "chapter": 49,
            "name": {"ar": "سُوْرَةُ الْحُجُراتِ", "en": "The Inner Apartments"},
            "revelation": "Madina",
            "versesCount": 18
        }, {
            "chapter": 50,
            "name": {"ar": "سُوْرَةُ قٓ", "en": "The letter Qaaf"},
            "revelation": "Mecca",
            "versesCount": 45
        }, {
            "chapter": 51,
            "name": {"ar": "سُوْرَةُ الذَّارِياتِ", "en": "The Winnowing Winds"},
            "revelation": "Mecca",
            "versesCount": 60
        }, {
            "chapter": 52,
            "name": {"ar": "سُوْرَةُ الطُّوْرِ", "en": "The Mount"},
            "revelation": "Mecca",
            "versesCount": 49
        }, {
            "chapter": 53,
            "name": {"ar": "سُوْرَةُ النَّجْمِ", "en": "The Star"},
            "revelation": "Mecca",
            "versesCount": 62
        }, {
            "chapter": 54,
            "name": {"ar": "سُوْرَةُ الْقَمَرِ", "en": "The Moon"},
            "revelation": "Mecca",
            "versesCount": 55
        }, {
            "chapter": 55,
            "name": {"ar": "سُوْرَةُ الرَّحْمٰنِ", "en": "The Beneficent"},
            "revelation": "Madina",
            "versesCount": 78
        }, {
            "chapter": 56,
            "name": {"ar": "سُوْرَةُ الْوَاقِعَةِ", "en": "The Inevitable"},
            "revelation": "Mecca",
            "versesCount": 96
        }, {
            "chapter": 57,
            "name": {"ar": "سُوْرَةُ الْحَدِيْدِ", "en": "The Iron"},
            "revelation": "Madina",
            "versesCount": 29
        }, {
            "chapter": 58,
            "name": {"ar": "سُوْرَةُ الْمُجَادَلَةِ", "en": "The Pleading Woman"},
            "revelation": "Madina",
            "versesCount": 22
        }, {
            "chapter": 59,
            "name": {"ar": "سُوْرَةُ الْحَشْرِ", "en": "The Exile"},
            "revelation": "Madina",
            "versesCount": 24
        }, {
            "chapter": 60,
            "name": {"ar": "سُوْرَةُ الْمُمْتَحِنَةِ", "en": "She that is to be examined"},
            "revelation": "Madina",
            "versesCount": 13
        }, {
            "chapter": 61,
            "name": {"ar": "سُوْرَةُ الصَّفِّ", "en": "The Ranks"},
            "revelation": "Madina",
            "versesCount": 14
        }, {
            "chapter": 62,
            "name": {"ar": "سُوْرَةُ الْجُمُعَةِ", "en": "Friday"},
            "revelation": "Madina",
            "versesCount": 11
        }, {
            "chapter": 63,
            "name": {"ar": "سُوْرَةُ الْمُنَافِقُوْنَ", "en": "The Hypocrites"},
            "revelation": "Madina",
            "versesCount": 11
        }, {
            "chapter": 64,
            "name": {"ar": "سُوْرَةُ التَّغَابُنِ", "en": "Mutual Disillusion"},
            "revelation": "Madina",
            "versesCount": 18
        }, {
            "chapter": 65,
            "name": {"ar": "سُوْرَةُ الطَّلَاقِ", "en": "Divorce"},
            "revelation": "Madina",
            "versesCount": 12
        }, {
            "chapter": 66,
            "name": {"ar": "سُوْرَةُ التَّحْرِيْمِ", "en": "The Prohibition"},
            "revelation": "Madina",
            "versesCount": 12
        }, {
            "chapter": 67,
            "name": {"ar": "سُوْرَةُ الْمُلْكِ", "en": "The Sovereignty"},
            "revelation": "Mecca",
            "versesCount": 30
        }, {
            "chapter": 68,
            "name": {"ar": "سُوْرَةُ الْقَلَمِ", "en": "The Pen"},
            "revelation": "Mecca",
            "versesCount": 52
        }, {
            "chapter": 69,
            "name": {"ar": "سُوْرَةُ الْحَآقَّةِ", "en": "The Reality"},
            "revelation": "Mecca",
            "versesCount": 52
        }, {
            "chapter": 70,
            "name": {"ar": "سُوْرَةُ الْمَعَارِجِ", "en": "The Ascending Stairways"},
            "revelation": "Mecca",
            "versesCount": 44
        }, {
            "chapter": 71,
            "name": {"ar": "سُوْرَةُ نُوْحٍ", "en": "Noah"},
            "revelation": "Mecca",
            "versesCount": 28
        }, {
            "chapter": 72,
            "name": {"ar": "سُوْرَةُ الْجِنِّ", "en": "The Jinn"},
            "revelation": "Mecca",
            "versesCount": 28
        }, {
            "chapter": 73,
            "name": {"ar": "سُوْرَةُ الْمُزَّمِّلِ", "en": "The Enshrouded One"},
            "revelation": "Mecca",
            "versesCount": 20
        }, {
            "chapter": 74,
            "name": {"ar": "سُوْرَةُ الْمُدَّثِّرِ", "en": "The Cloaked One"},
            "revelation": "Mecca",
            "versesCount": 56
        }, {
            "chapter": 75,
            "name": {"ar": "سُوْرَةُ الْقِيَامَةِ", "en": "The Resurrection"},
            "revelation": "Mecca",
            "versesCount": 40
        }, {
            "chapter": 76,
            "name": {"ar": "سُوْرَةُ الدَّهْرِ", "en": "Man"},
            "revelation": "Madina",
            "versesCount": 31
        }, {
            "chapter": 77,
            "name": {"ar": "سُوْرَةُ الْمُرْسَلَاتِ", "en": "The Emissaries"},
            "revelation": "Mecca",
            "versesCount": 50
        }, {
            "chapter": 78,
            "name": {"ar": "سُوْرَةُ النَّبَاِ", "en": "The Announcement"},
            "revelation": "Mecca",
            "versesCount": 40
        }, {
            "chapter": 79,
            "name": {"ar": "سُوْرَةُ النَّازِعَاتِ", "en": "Those who drag forth"},
            "revelation": "Mecca",
            "versesCount": 46
        }, {
            "chapter": 80,
            "name": {"ar": "سُوْرَةُ عَبَسَ", "en": "He frowned"},
            "revelation": "Mecca",
            "versesCount": 42
        }, {
            "chapter": 81,
            "name": {"ar": "سُوْرَةُ التَّكْوِيْرِ", "en": "The Overthrowing"},
            "revelation": "Mecca",
            "versesCount": 29
        }, {
            "chapter": 82,
            "name": {"ar": "سُوْرَةُ الْاِنْفِطَارِ", "en": "The Cleaving"},
            "revelation": "Mecca",
            "versesCount": 19
        }, {
            "chapter": 83,
            "name": {"ar": "سُوْرَةُ المُطَفِّفِيْنَ", "en": "Defrauding"},
            "revelation": "Mecca",
            "versesCount": 36
        }, {
            "chapter": 84,
            "name": {"ar": "سُوْرَةُ الاِنْشِقَاقِ", "en": "The Splitting Open"},
            "revelation": "Mecca",
            "versesCount": 25
        }, {
            "chapter": 85,
            "name": {"ar": "سُوْرَةُ الْبُرُوْجِ", "en": "The Constellations"},
            "revelation": "Mecca",
            "versesCount": 22
        }, {
            "chapter": 86,
            "name": {"ar": "سُوْرَةُ الطَّارِقِ", "en": "The Morning Star"},
            "revelation": "Mecca",
            "versesCount": 17
        }, {
            "chapter": 87,
            "name": {"ar": "سُوْرَةُ الْاَعْلٰي", "en": "The Most High"},
            "revelation": "Mecca",
            "versesCount": 19
        }, {
            "chapter": 88,
            "name": {"ar": "سُوْرَةُ الْغَاشِيَةِ", "en": "The Overwhelming"},
            "revelation": "Mecca",
            "versesCount": 26
        }, {
            "chapter": 89,
            "name": {"ar": "سُوْرَةُ الْفَجْرِ", "en": "The Dawn"},
            "revelation": "Mecca",
            "versesCount": 30
        }, {
            "chapter": 90,
            "name": {"ar": "سُوْرَةُ الْبَلَدِ", "en": "The City"},
            "revelation": "Mecca",
            "versesCount": 20
        }, {
            "chapter": 91,
            "name": {"ar": "سُوْرَةُ الشَّمْسِ", "en": "The Sun"},
            "revelation": "Mecca",
            "versesCount": 15
        }, {
            "chapter": 92,
            "name": {"ar": "سُوْرَةُ الَّيْلِ", "en": "The Night"},
            "revelation": "Mecca",
            "versesCount": 21
        }, {
            "chapter": 93,
            "name": {"ar": "سُوْرَةُ الضُّحٰي", "en": "The Morning Hours"},
            "revelation": "Mecca",
            "versesCount": 11
        }, {
            "chapter": 94,
            "name": {"ar": "سُوْرَةُ الشَّرْحِ", "en": "The Consolation"},
            "revelation": "Mecca",
            "versesCount": 8
        }, {
            "chapter": 95,
            "name": {"ar": "سُوْرَةُ التِّيْنِ", "en": "The Fig"},
            "revelation": "Mecca",
            "versesCount": 8
        }, {
            "chapter": 96,
            "name": {"ar": "سُوْرَةُ الْعَلَقِ", "en": "The Clot"},
            "revelation": "Mecca",
            "versesCount": 19
        }, {
            "chapter": 97,
            "name": {"ar": "سُوْرَةُ الْقَدْرِ", "en": "The Power, Fate"},
            "revelation": "Mecca",
            "versesCount": 5
        }, {
            "chapter": 98,
            "name": {"ar": "سُوْرَةُ الْبَيِّنَةِ", "en": "The Evidence"},
            "revelation": "Madina",
            "versesCount": 8
        }, {
            "chapter": 99,
            "name": {"ar": "سُوْرَةُ الزِّلْزَالِ", "en": "The Earthquake"},
            "revelation": "Madina",
            "versesCount": 8
        }, {
            "chapter": 100,
            "name": {"ar": "سُوْرَةُ العٰدِيٰتِ", "en": "The Chargers"},
            "revelation": "Mecca",
            "versesCount": 11
        }, {
            "chapter": 101,
            "name": {"ar": "سُوْرَةُ الْقَارِعَةِ", "en": "The Calamity"},
            "revelation": "Mecca",
            "versesCount": 11
        }, {
            "chapter": 102,
            "name": {"ar": "سُوْرَةُ التَّكَاثُرِ", "en": "Competition"},
            "revelation": "Mecca",
            "versesCount": 8
        }, {
            "chapter": 103,
            "name": {"ar": "سُوْرَةُ الْعَصْرِ", "en": "The Declining Day, Epoch"},
            "revelation": "Mecca",
            "versesCount": 3
        }, {
            "chapter": 104,
            "name": {"ar": "سُوْرَةُ الْهُمَزَةِ", "en": "The Traducer"},
            "revelation": "Mecca",
            "versesCount": 9
        }, {
            "chapter": 105,
            "name": {"ar": "سُوْرَةُ الْفِيْلِ", "en": "The Elephant"},
            "revelation": "Mecca",
            "versesCount": 5
        }, {
            "chapter": 106,
            "name": {"ar": "سُوْرَةُ قُرَيْشٍ", "en": "Quraysh"},
            "revelation": "Mecca",
            "versesCount": 4
        }, {
            "chapter": 107,
            "name": {"ar": "سُوْرَةُ الْمَاعُوْنِ", "en": "Almsgiving"},
            "revelation": "Mecca",
            "versesCount": 7
        }, {
            "chapter": 108,
            "name": {"ar": "سُوْرَةُ الْكَوْثَرِ", "en": "Abundance"},
            "revelation": "Mecca",
            "versesCount": 3
        }, {
            "chapter": 109,
            "name": {"ar": "سُوْرَةُ الْكَافِرُوْنَ", "en": "The Disbelievers"},
            "revelation": "Mecca",
            "versesCount": 6
        }, {
            "chapter": 110,
            "name": {"ar": "سُوْرَةُ النَّصْرِ", "en": "Divine Support"},
            "revelation": "Madina",
            "versesCount": 3
        }, {
            "chapter": 111,
            "name": {"ar": "سُوْرَةُ المَسَدِ", "en": "The Palm Fibre"},
            "revelation": "Mecca",
            "versesCount": 5
        }, {
            "chapter": 112,
            "name": {"ar": "سُوْرَةُ الْاِخْلَاصِ", "en": "Sincerity"},
            "revelation": "Mecca",
            "versesCount": 4
        }, {
            "chapter": 113,
            "name": {"ar": "سُوْرَةُ الْفَلَقِ", "en": "The Dawn"},
            "revelation": "Mecca",
            "versesCount": 5
        }, {
            "chapter": 114,
            "name": {"ar": "سُوْرَةُ النَّاسِ", "en": "Mankind"},
            "revelation": "Mecca",
            "versesCount": 6
        }]
    }
}