import {fetchEveryAyah} from "$lib/sources/requests/requests.js";

const reciters = [
    {
        "label": "Abdul Basit Abdul Samad",
        "value": "AbdulSamad_64kbps_QuranExplorer.Com"
    },
    {
        "label": "Abdul Basit Mujawwad",
        "value": "Abdul_Basit_Mujawwad_128kbps"
    },
    {
        "label": "Abdul Basit Murattal",
        "value": "Abdul_Basit_Murattal_192kbps"
    },
    {
        "label": "Abdul Basit Murattal",
        "value": "Abdul_Basit_Murattal_64kbps"
    },
    {
        "label": "Abdullaah Awaad Al-Juhaynee",
        "value": "Abdullaah_3awwaad_Al-Juhaynee_128kbps"
    },
    {
        "label": "Abdullah Basfar",
        "value": "Abdullah_Basfar_192kbps"
    },
    {
        "label": "Abdullah Basfar",
        "value": "Abdullah_Basfar_32kbps"
    },
    {
        "label": "Abdullah Basfar",
        "value": "Abdullah_Basfar_64kbps"
    },
    {
        "label": "Abdullah Matroud",
        "value": "Abdullah_Matroud_128kbps"
    },
    {
        "label": "Abdurrahmaan As-Sudais",
        "value": "Abdurrahmaan_As-Sudais_192kbps"
    },
    {
        "label": "Abdurrahmaan As-Sudais",
        "value": "Abdurrahmaan_As-Sudais_64kbps"
    },
    {
        "label": "Abu Bakr Ash-Shaatree",
        "value": "Abu_Bakr_Ash-Shaatree_128kbps"
    },
    {
        "label": "Abu Bakr_Ash-Shaatree",
        "value": "Abu_Bakr_Ash-Shaatree_64kbps"
    },
    {
        "label": "Ahmed Neana",
        "value": "Ahmed_Neana_128kbps"
    },
    {
        "label": "Ahmed Ibn Ali Al-Ajamy",
        "value": "Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net"
    },
    {
        "label": "Ahmed Ibn Ali Al-Ajamy",
        "value": "Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com"
    },
    {
        "label": "Akram AlAlaqimy",
        "value": "Akram_AlAlaqimy_128kbps"
    },
    {
        "label": "Alafasy",
        "value": "Alafasy_128kbps"
    },
    {
        "label": "Alafasy",
        "value": "Alafasy_64kbps"
    },
    {
        "label": "Ali Hajjaj AlSuesy",
        "value": "Ali_Hajjaj_AlSuesy_128kbps"
    },
    {
        "label": "Ali Jaber",
        "value": "Ali_Jaber_64kbps"
    },
    {
        "label": "Ayman Sowaid",
        "value": "Ayman_Sowaid_64kbps"
    },
    {
        "label": "Sahih Ibrahim",
        "value": "English/Sahih_Intnl_Ibrahim_Walk_192kbps"
    },
    {
        "label": "Fares Abbad",
        "value": "Fares_Abbad_64kbps"
    },
    {
        "label": "Ghamadi",
        "value": "Ghamadi_40kbps"
    },
    {
        "label": "Hani Rifai",
        "value": "Hani_Rifai_192kbps"
    },
    {
        "label": "Hani Rifai",
        "value": "Hani_Rifai_64kbps"
    },
    {
        "label": "Hudhaify",
        "value": "Hudhaify_128kbps"
    },
    {
        "label": "Hudhaify",
        "value": "Hudhaify_32kbps"
    },
    {
        "label": "Hudhaify",
        "value": "Hudhaify_64kbps"
    },
    {
        "label": "Al Husary",
        "value": "Husary_128kbps"
    },
    {
        "label": "Al Husary - Mujawwad",
        "value": "Husary_128kbps_Mujawwad"
    },
    {
        "label": "Al Husary",
        "value": "Husary_64kbps"
    },
    {
        "label": "Al Husary - Muallim",
        "value": "Husary_Muallim_128kbps"
    },
    {
        "label": "Al Husary - Mujawwad",
        "value": "Husary_Mujawwad_64kbps"
    },
    {
        "label": "Ibrahim Akhdar",
        "value": "Ibrahim_Akhdar_32kbps"
    },
    {
        "label": "Ibrahim Akhdar",
        "value": "Ibrahim_Akhdar_64kbps"
    },
    {
        "label": "Karim Mansoori",
        "value": "Karim_Mansoori_40kbps"
    },
    {
        "label": "Khaalid Abdullaah Al-Qahtaanee",
        "value": "Khaalid_Abdullaah_al-Qahtaanee_192kbps"
    },
    {
        "label": "Maher AlMuaiqly",
        "value": "MaherAlMuaiqly128kbps"
    },
    {
        "label": "Maher AlMuaiqly",
        "value": "Maher_AlMuaiqly_64kbps"
    },
    {
        "label": "Al Menshawi",
        "value": "Menshawi_16kbps"
    },
    {
        "label": "Al Menshawi",
        "value": "Menshawi_32kbps"
    },
    {
        "label": "Al Minshawy - Mujawwad",
        "value": "Minshawy_Mujawwad_192kbps"
    },
    {
        "label": "Al Minshawy - Mujawwad",
        "value": "Minshawy_Mujawwad_64kbps"
    },
    {
        "label": "Al Minshawy - Murattal",
        "value": "Minshawy_Murattal_128kbps"
    },
    {
        "label": "Mohammad Al Tablaway",
        "value": "Mohammad_al_Tablaway_128kbps"
    },
    {
        "label": "Mohammad Al Tablaway",
        "value": "Mohammad_al_Tablaway_64kbps"
    },
    {
        "label": "Muhammad AbdulKareem",
        "value": "Muhammad_AbdulKareem_128kbps"
    },
    {
        "label": "Muhammad Ayyoub",
        "value": "Muhammad_Ayyoub_128kbps"
    },
    {
        "label": "Muhammad Ayyoub",
        "value": "Muhammad_Ayyoub_32kbps"
    },
    {
        "label": "Muhammad Ayyoub",
        "value": "Muhammad_Ayyoub_64kbps"
    },
    {
        "label": "Muhammad Jibreel",
        "value": "Muhammad_Jibreel_128kbps"
    },
    {
        "label": "Muhammad Jibreel",
        "value": "Muhammad_Jibreel_64kbps"
    },
    {
        "label": "Muhsin Al Qasim",
        "value": "Muhsin_Al_Qasim_192kbps"
    },
    {
        "label": "Basfar - MultiLanguage",
        "value": "MultiLanguage/Basfar_Walk_192kbps"
    },
    {
        "label": "Mustafa Ismail",
        "value": "Mustafa_Ismail_48kbps"
    },
    {
        "label": "Nabil Rifa3i",
        "value": "Nabil_Rifa3i_48kbps"
    },
    {
        "label": "Nasser Alqatami",
        "value": "Nasser_Alqatami_128kbps"
    },
    {
        "label": "Parhizgar",
        "value": "Parhizgar_48kbps"
    },
    {
        "label": "Sahl Yassin",
        "value": "Sahl_Yassin_128kbps"
    },
    {
        "label": "Salaah AbdulRahman Bukhatir",
        "value": "Salaah_AbdulRahman_Bukhatir_128kbps"
    },
    {
        "label": "Salah Al Budair",
        "value": "Salah_Al_Budair_128kbps"
    },
    {
        "label": "Saood Ash-Shuraym",
        "value": "Shuraym_128kbps"
    },
    {
        "label": "Saood Ash-Shuraym",
        "value": "Shuraym_64kbps"
    },
    {
        "label": "Yaser Salamah",
        "value": "Yaser_Salamah_128kbps"
    },
    {
        "label": "Yasser Ad-Dussary",
        "value": "Dussary_128kbps"
    },
    {
        "label": "Ahmed Ibn Ali Al-Ajamy",
        "value": "ahmed_ibn_ali_al_ajamy_128kbps"
    },
    {
        "label": "Aziz Alili",
        "value": "aziz_alili_128kbps"
    },
    {
        "label": "Khalefa Al Tunaiji",
        "value": "khalefa_al_tunaiji_64kbps"
    },
    {
        "label": "Mahmoud Ali Al Banna",
        "value": "mahmoud_ali_al_banna_32kbps"
    },
    {
        "label": "Hedayatfar - with translations by Fooladvand",
        "value": "translations/Fooladvand_Hedayatfar_40Kbps"
    },
    {
        "label": "Makarem Kabiri - with translations",
        "value": "translations/Makarem_Kabiri_16Kbps"
    },
    {
        "label": "Balayev - with azerbaijani translations",
        "value": "translations/azerbaijani/balayev"
    },
    {
        "label": "Besim Korkut - with translations",
        "value": "translations/besim_korkut_ajet_po_ajet"
    },
    {
        "label": "Farhat Hashmi - with Urdu translations",
        "value": "translations/urdu_farhat_hashmi"
    },
    {
        "label": "Shamshad Ali Khan - with Urdu translations",
        "value": "translations/urdu_shamshad_ali_khan_46kbps"
    },
    {
        "label": "Abdul Basit - warsh",
        "value": "warsh/warsh_Abdul_Basit_128kbps"
    },
    {
        "label": "Ibrahim Al Dosary - warsh",
        "value": "warsh/warsh_ibrahim_aldosary_128kbps"
    },
    {
        "label": "Yassin Al Jazaery - warsh",
        "value": "warsh/warsh_yassin_al_jazaery_64kbps"
    }
]

/**
 *
 * @param {number} surahNum
 * @param {number} verseNum
 * @param {string} reciterId
 * @returns {Promise<string | null>} Audio URL
 */
const getVerseAudio = async (surahNum, verseNum, reciterId) => {
    let surahNumber;
    const surahNumLength = `${surahNum}`.length
    if (surahNumLength === 1) surahNumber = `00${surahNum}`
    else if (surahNumLength === 2) surahNumber = `0${surahNum}`
    else surahNumber = `0${surahNum}`


    let verseNumber;
    const verseNumLength = `${verseNum}`.length
    if (verseNumLength === 1) verseNumber = `00${verseNum}`
    else if (verseNumLength === 2) verseNumber = `0${verseNum}`
    else verseNumber = `0${verseNum}`
    return `https://everyayah.com/data/${reciterId}/${surahNumber}${verseNumber}.mp3`
}


/**
 *
 * @param {number} pageNum
 * @param {string} reciterId
 * @returns {Promise<string | null>} Audio URL
 */
const getPageAudio = async (pageNum, reciterId) => {
    let pageNumber;
    const pageNumLength = `${pageNum}`.length
    if (pageNumLength === 1) pageNumber = `00${pageNum}`
    else if (pageNumLength === 2) pageNumber = `0${pageNum}`
    else pageNumber = `0${pageNum}`
    return `https://everyayah.com/data/${reciterId}/PageMp3s/Page${pageNumber}.mp3`
}

