export const sources = {
    hadith: {
        endpoints: 'https://hadithapi.com/api/books?apiKey=$2y$10$XVwSCVt9x5MAxzYzr0k6Lu36zpoWVxz20QT0GhTRScqf5EDtb4G'
    }
}


const getSurah = ({ surahNum, info, audioId, arabic, english, tafsir }) => {
    const surahText = await getChapter
}

const getPage = ({ pageNum, info, audioId, arabic, english, tafsir }) => {}

const getVerse = ({ surahNum, verseNum, info, audioid, arabic, english, tafsir }) => {}

const getJuz = ({ juzNum, info, audioId, arabic, english, tafsir }) => {}

const getHizb = ({ hizbNum, info, audioId, arabic, english, tafsir }) => {}

const getHadith = ({ editionId, sectionId, hadithId, arabic, english }) => {}
