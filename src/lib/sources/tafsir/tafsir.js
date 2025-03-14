import {fetcher} from "$lib/sources/requests/requests.js";

async function fetchTafsir (endpoint) {
    let allEndpoints = [endpoint.startsWith('/') ? endpoint : `/${endpoint}`]
    if (endpoint.endsWith('.min.json')) allEndpoints = [...allEndpoints, `${endpoint}`.replace('.min.json', '.json')]
    else if (endpoint.endsWith('.json')) allEndpoints = [...allEndpoints, `${endpoint}`.replace('.json', '.min.json')]
    else allEndpoints = [...allEndpoints, `${endpoint}.json`]

    const firstType = allEndpoints.map(endpoint => `https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir${endpoint}`)
    const secondType = allEndpoints.map(endpoint => `https://rawcdn.githack.com/spa5k/tafsir_api/bf42646e16973c59a0789b7a3ad065ff6ad6b0bf/tafsir${endpoint}`)
    const thirdType = allEndpoints.map(endpoint => `https://cdn.statically.io/gh/spa5k/tafsir_api/main/tafsir${endpoint}`)
    const fourthType = allEndpoints.map(endpoint => `https://raw.githubusercontent.com/spa5k/tafsir_api/main/tafsir${endpoint}`)
    const fifthType = allEndpoints.map(endpoint => `https://gitloaf.com/cdn/spa5k/tafsir_api/main/tafsir${endpoint}`)
    return await fetcher([
        ...firstType,
        ...secondType,
        ...thirdType,
        ...fourthType,
        ...fifthType
    ], {}, 3)
}

const tafsirEditions = [
    {
        "author_name": "AbdulRahman Bin Hasan Al-Alshaikh",
        "id": 381,
        "language_name": "bengali",
        "name": "Tafsir Fathul Majid",
        "slug": "bn-tafisr-fathul-majid",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Hafiz Ibn Kathir",
        "id": 169,
        "language_name": "english",
        "name": "Tafsir Ibn Kathir (abridged)",
        "slug": "en-tafisr-ibn-kathir",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Hafiz Ibn Kathir",
        "id": 14,
        "language_name": "arabic",
        "name": "Tafsir Ibn Kathir",
        "slug": "ar-tafsir-ibn-kathir",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Tawheed Publication",
        "id": 164,
        "language_name": "bengali",
        "name": "Tafseer ibn Kathir",
        "slug": "bn-tafseer-ibn-e-kaseer",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Bayaan Foundation",
        "id": 165,
        "language_name": "bengali",
        "name": "Tafsir Ahsanul Bayaan",
        "slug": "bn-tafsir-ahsanul-bayaan",
        "source": "https://quran.com/"
    },
    {
        "author_name": "King Fahd Quran Printing Complex",
        "id": 166,
        "language_name": "bengali",
        "name": "Tafsir Abu Bakr Zakaria",
        "slug": "bn-tafsir-abu-bakr-zakaria",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Mufti Muhammad Shafi",
        "id": 168,
        "language_name": "english",
        "name": "Maarif-ul-Quran",
        "slug": "en-tafsir-maarif-ul-quran",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Saddi",
        "id": 170,
        "language_name": "russian",
        "name": "Tafseer Al Saddi",
        "slug": "ru-tafseer-al-saddi",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Saddi",
        "id": 91,
        "language_name": "arabic",
        "name": "Tafseer Al Saddi",
        "slug": "ar-tafseer-al-saddi",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Baghawy",
        "id": 94,
        "language_name": "arabic",
        "name": "Tafseer Al-Baghawi",
        "slug": "ar-tafsir-al-baghawi",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Tanweer",
        "id": 92,
        "language_name": "arabic",
        "name": "Tafseer Tanwir al-Miqbas",
        "slug": "ar-tafseer-tanwir-al-miqbas",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Waseet",
        "id": 93,
        "language_name": "arabic",
        "name": "Tafsir Al Wasit",
        "slug": "ar-tafsir-al-wasit",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Tabari",
        "id": 15,
        "language_name": "arabic",
        "name": "Tafsir al-Tabari",
        "slug": "ar-tafsir-al-tabari",
        "source": "https://quran.com/"
    },
    {
        "author_name": "المیسر",
        "id": 16,
        "language_name": "arabic",
        "name": "Tafsir Muyassar",
        "slug": "ar-tafsir-muyassar",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Qurtubi",
        "id": 90,
        "language_name": "arabic",
        "name": "Tafseer Al Qurtubi",
        "slug": "ar-tafseer-al-qurtubi",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Sayyid Ibrahim Qutb",
        "id": 157,
        "language_name": "urdu",
        "name": "Fi Zilal al-Quran",
        "slug": "ur-tafsir-fe-zalul-quran-syed-qatab",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Hafiz Ibn Kathir",
        "id": 160,
        "language_name": "urdu",
        "name": "Tafsir Ibn Kathir",
        "slug": "ur-tafseer-ibn-e-kaseer",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Dr. Israr Ahmad",
        "id": 159,
        "language_name": "urdu",
        "name": "Tafsir Bayan ul Quran",
        "slug": "ur-tafsir-bayan-ul-quran",
        "source": "https://quran.com/"
    },
    {
        "author_name": "Kashf Al-Asrar Tafsir",
        "id": 109,
        "language_name": "english",
        "name": "Kashf Al-Asrar Tafsir",
        "slug": "en-kashf-al-asrar-tafsir",
        "source": "https://www.altafsir.com/"
    },
    {
        "author_name": "Al Qushairi Tafsir",
        "id": 108,
        "language_name": "english",
        "name": "Al Qushairi Tafsir",
        "slug": "en-al-qushairi-tafsir",
        "source": "https://www.altafsir.com/"
    },
    {
        "author_name": "Tafsir al-Tustari",
        "id": 93,
        "language_name": "english",
        "name": "Tafsir al-Tustari",
        "slug": "en-tafsir-al-tustari",
        "source": "https://www.altafsir.com/"
    },
    {
        "author_name": "Asbab Al-Nuzul by Al-Wahidi",
        "id": 86,
        "language_name": "english",
        "name": "Asbab Al-Nuzul by Al-Wahidi",
        "slug": "en-asbab-al-nuzul-by-al-wahidi",
        "source": "https://www.altafsir.com/"
    },
    {
        "author_name": "Tanwîr al-Miqbâs min Tafsîr Ibn ‘Abbâs",
        "id": 73,
        "language_name": "english",
        "name": "Tanwîr al-Miqbâs min Tafsîr Ibn ‘Abbâs",
        "slug": "en-tafsir-ibn-abbas",
        "source": "https://www.altafsir.com/"
    },
    {
        "author_name": "Al-Jalalayn",
        "id": 74,
        "language_name": "english",
        "name": "Al-Jalalayn",
        "slug": "en-al-jalalayn",
        "source": "https://www.altafsir.com/"
    }
]

async function getSurahTafsir (tafsirEditionId, surahNum) {
    const chapterNum = `${Number(surahNum)}`
    const req = await fetchTafsir(`/${tafsirEditionId}/${chapterNum}.json`)
    const res = await req.json()
    return res ?? null
}

async function getVerseTafsir (tafsirEditionId, surahNum, verseNum) {
    const chapterNum = `${Number(surahNum)}`
    const verseNumber = `${Number(verseNum)}`
    const req = await fetchTafsir(`/${tafsirEditionId}/${chapterNum}/${verseNumber}.json`)
    const res = await req.json()
    return res ?? null
}

export { getVerseTafsir, getSurahTafsir, tafsirEditions }
