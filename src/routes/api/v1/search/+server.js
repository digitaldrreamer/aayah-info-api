import { json } from '@sveltejs/kit';
import logger from '$lib/logger.js';
import { latinize } from "modern-diacritics";
import { getDua } from "$lib/sources/hisnul-muslim/hisnul-muslim.js";


const juzs = [
    { number: 1, name: 'Alif Lam Mim', surahs: '1:1 - 2:141' },
    { number: 2, name: 'Sayaqul', surahs: '2:142 - 2:252' },
    { number: 3, name: 'Tilka \'r-Rusul', surahs: '2:253 - 3:92' },
    { number: 4, name: 'Lantanalu', surahs: '3:93 - 4:23' },
    { number: 5, name: 'Wal Mohsanat', surahs: '4:24 - 4:147' },
    { number: 6, name: 'Ya Ayyuha \'lladhina Amanu', surahs: '4:148 - 5:81' },
    { number: 7, name: 'Wa Iza Sami\'u', surahs: '5:82 - 6:110' },
    { number: 8, name: 'Wa Lau Annana', surahs: '6:111 - 7:87' },
    { number: 9, name: 'Qad Aflaha', surahs: '7:88 - 8:40' },
    { number: 10, name: 'Wa A’lamu', surahs: '8:41 - 9:92' },
    { number: 11, name: 'Ya’tadhiruna', surahs: '9:93 - 11:5' },
    { number: 12, name: 'Wa Mamin Da’aba', surahs: '11:6 - 12:52' },
    { number: 13, name: 'Wa Ma Ubrioo', surahs: '12:53 - 14:52' },
    { number: 14, name: 'Rubama', surahs: '15:1 - 16:128' },
    { number: 15, name: 'Subhana \'lladhi', surahs: '17:1 - 18:74' },
    { number: 16, name: 'Qal Alam', surahs: '18:75 - 20:135' },
    { number: 17, name: 'Aqtarabat', surahs: '21:1 - 22:78' },
    { number: 18, name: 'Qadd Aflaha', surahs: '23:1 - 25:20' },
    { number: 19, name: 'Wa Qalalladhina', surahs: '25:21 - 27:55' },
    { number: 20, name: 'A’man Khalaq', surahs: '27:56 - 29:45' },
    { number: 21, name: 'Utlu Ma Oohiya', surahs: '29:46 - 33:30' },
    { number: 22, name: 'Wa Manyaqnut', surahs: '33:31 - 36:21' },
    { number: 23, name: 'Wa Mali', surahs: '36:22 - 39:31' },
    { number: 24, name: 'Faman Azlam', surahs: '39:32 - 41:46' },
    { number: 25, name: 'Ilayhi Yuraddu', surahs: '41:47 - 45:37' },
    { number: 26, name: 'Ha Meem', surahs: '46:1 - 51:30' },
    { number: 27, name: 'Qala Fama Khatbukum', surahs: '51:31 - 57:29' },
    { number: 28, name: 'Qadd Sami’ Allah', surahs: '58:1 - 66:12' },
    { number: 29, name: 'Tabarakalladhi', surahs: '67:1 - 77:50' },
    { number: 30, name: 'Amma Yatasa’alun', surahs: '78:1 - 114:6' }
];
const surahs = [
    { number: 1, name: 'Al-Fatihah', arabicName: 'الفاتحة', versesCount: 7 },
    { number: 2, name: 'Al-Baqarah', arabicName: 'البقرة', versesCount: 286 },
    { number: 3, name: 'Ali \'Imran', arabicName: 'آل عمران', versesCount: 200 },
    { number: 4, name: 'An-Nisa', arabicName: 'النساء', versesCount: 176 },
    { number: 5, name: 'Al-Ma\'idah', arabicName: 'المائدة', versesCount: 120 },
    { number: 6, name: 'Al-An\'am', arabicName: 'الأنعام', versesCount: 165 },
    { number: 7, name: 'Al-A\'raf', arabicName: 'الأعراف', versesCount: 206 },
    { number: 8, name: 'Al-Anfal', arabicName: 'الأنفال', versesCount: 75 },
    { number: 9, name: 'At-Tawbah', arabicName: 'التوبة', versesCount: 129 },
    { number: 10, name: 'Yunus', arabicName: 'يونس', versesCount: 109 },
    { number: 11, name: 'Hud', arabicName: 'هود', versesCount: 123 },
    { number: 12, name: 'Yusuf', arabicName: 'يوسف', versesCount: 111 },
    { number: 13, name: 'Ar-Ra\'d', arabicName: 'الرعد', versesCount: 43 },
    { number: 14, name: 'Ibrahim', arabicName: 'إبراهيم', versesCount: 52 },
    { number: 15, name: 'Al-Hijr', arabicName: 'الحجر', versesCount: 99 },
    { number: 16, name: 'An-Nahl', arabicName: 'النحل', versesCount: 128 },
    { number: 17, name: 'Al-Isra', arabicName: 'الإسراء', versesCount: 111 },
    { number: 18, name: 'Al-Kahf', arabicName: 'الكهف', versesCount: 110 },
    { number: 19, name: 'Maryam', arabicName: 'مريم', versesCount: 98 },
    { number: 20, name: 'Taha', arabicName: 'طه', versesCount: 135 },
    { number: 21, name: 'Al-Anbiya', arabicName: 'الأنبياء', versesCount: 112 },
    { number: 22, name: 'Al-Hajj', arabicName: 'الحج', versesCount: 78 },
    { number: 23, name: 'Al-Mu’minun', arabicName: 'المؤمنون', versesCount: 118 },
    { number: 24, name: 'An-Nur', arabicName: 'النور', versesCount: 64 },
    { number: 25, name: 'Al-Furqan', arabicName: 'الفرقان', versesCount: 77 },
    { number: 26, name: 'Ash-Shu\'ara', arabicName: 'الشعراء', versesCount: 227 },
    { number: 27, name: 'An-Naml', arabicName: 'النمل', versesCount: 93 },
    { number: 28, name: 'Al-Qasas', arabicName: 'القصص', versesCount: 88 },
    { number: 29, name: 'Al-Ankabut', arabicName: 'العنكبوت', versesCount: 69 },
    { number: 30, name: 'Ar-Rum', arabicName: 'الروم', versesCount: 60 },
    { number: 31, name: 'Luqman', arabicName: 'لقمان', versesCount: 34 },
    { number: 32, name: 'As-Sajdah', arabicName: 'السجدة', versesCount: 30 },
    { number: 33, name: 'Al-Ahzab', arabicName: 'الأحزاب', versesCount: 73 },
    { number: 34, name: 'Saba', arabicName: 'سبأ', versesCount: 54 },
    { number: 35, name: 'Fatir', arabicName: 'فاطر', versesCount: 45 },
    { number: 36, name: 'Ya-Sin', arabicName: 'يس', versesCount: 83 },
    { number: 37, name: 'As-Saffat', arabicName: 'الصافات', versesCount: 182 },
    { number: 38, name: 'Sad', arabicName: 'ص', versesCount: 88 },
    { number: 39, name: 'Az-Zumar', arabicName: 'الزمر', versesCount: 75 },
    { number: 40, name: 'Ghafir', arabicName: 'غافر', versesCount: 85 },
    { number: 41, name: 'Fussilat', arabicName: 'فصلت', versesCount: 54 },
    { number: 42, name: 'Ash-Shura', arabicName: 'الشورى', versesCount: 53 },
    { number: 43, name: 'Az-Zukhruf', arabicName: 'الزخرف', versesCount: 89 },
    { number: 44, name: 'Ad-Dukhan', arabicName: 'الدخان', versesCount: 59 },
    { number: 45, name: 'Al-Jathiyah', arabicName: 'الجاثية', versesCount: 37 },
    { number: 46, name: 'Al-Ahqaf', arabicName: 'الأحقاف', versesCount: 35 },
    { number: 47, name: 'Muhammad', arabicName: 'محمد', versesCount: 38 },
    { number: 48, name: 'Al-Fath', arabicName: 'الفتح', versesCount: 29 },
    { number: 49, name: 'Al-Hujurat', arabicName: 'الحجرات', versesCount: 18 },
    { number: 50, name: 'Qaf', arabicName: 'ق', versesCount: 45 },
    { number: 51, name: 'Adh-Dhariyat', arabicName: 'الذاريات', versesCount: 60 },
    { number: 52, name: 'At-Tur', arabicName: 'الطور', versesCount: 49 },
    { number: 53, name: 'An-Najm', arabicName: 'النجم', versesCount: 62 },
    { number: 54, name: 'Al-Qamar', arabicName: 'القمر', versesCount: 55 },
    { number: 55, name: 'Ar-Rahman', arabicName: 'الرحمن', versesCount: 78 },
    { number: 56, name: 'Al-Waqi’ah', arabicName: 'الواقعة', versesCount: 96 },
    { number: 57, name: 'Al-Hadid', arabicName: 'الحديد', versesCount: 29 },
    { number: 58, name: 'Al-Mujadilah', arabicName: 'المجادلة', versesCount: 22 },
    { number: 59, name: 'Al-Hashr', arabicName: 'الحشر', versesCount: 24 },
    { number: 60, name: 'Al-Mumtahanah', arabicName: 'الممتحنة', versesCount: 13 },
    { number: 61, name: 'As-Saff', arabicName: 'الصف', versesCount: 14 },
    { number: 62, name: 'Al-Jumu\'ah', arabicName: 'الجمعة', versesCount: 11 },
    { number: 63, name: 'Al-Munafiqun', arabicName: 'المنافقون', versesCount: 11 },
    { number: 64, name: 'At-Taghabun', arabicName: 'التغابن', versesCount: 18 },
    { number: 65, name: 'At-Talaq', arabicName: 'الطلاق', versesCount: 12 },
    { number: 66, name: 'At-Tahrim', arabicName: 'التحريم', versesCount: 12 },
    { number: 67, name: 'Al-Mulk', arabicName: 'الملك', versesCount: 30 },
    { number: 68, name: 'Al-Qalam', arabicName: 'القلم', versesCount: 52 },
    { number: 69, name: 'Al-Haqqah', arabicName: 'الحاقة', versesCount: 52 },
    { number: 70, name: 'Al-Ma\'arij', arabicName: 'المعارج', versesCount: 44 },
    { number: 71, name: 'Nuh', arabicName: 'نوح', versesCount: 28 },
    { number: 72, name: 'Al-Jinn', arabicName: 'الجن', versesCount: 28 },
    { number: 73, name: 'Al-Muzzammil', arabicName: 'المزمل', versesCount: 20 },
    { number: 74, name: 'Al-Muddathir', arabicName: 'المدثر', versesCount: 56 },
    { number: 75, name: 'Al-Qiyamah', arabicName: 'القيامة', versesCount: 40 },
    { number: 76, name: 'Al-Insan', arabicName: 'الإنسان', versesCount: 31 },
    { number: 77, name: 'Al-Mursalat', arabicName: 'المرسلات', versesCount: 50 },
    { number: 78, name: 'An-Naba', arabicName: 'النبأ', versesCount: 40 },
    { number: 79, name: 'An-Nazi\'at', arabicName: 'النازعات', versesCount: 46 },
    { number: 80, name: 'Abasa', arabicName: 'عبس', versesCount: 42 },
    { number: 81, name: 'At-Takwir', arabicName: 'التكوير', versesCount: 29 },
    { number: 82, name: 'Al-Infitar', arabicName: 'الإنفطار', versesCount: 19 },
    { number: 83, name: 'Al-Mutaffifin', arabicName: 'المطففين', versesCount: 36 },
    { number: 84, name: 'Al-Inshiqaq', arabicName: 'الإنشقاق', versesCount: 25 },
    { number: 85, name: 'Al-Buruj', arabicName: 'البروج', versesCount: 22 },
    { number: 86, name: 'At-Tariq', arabicName: 'الطارق', versesCount: 17 },
    { number: 87, name: 'Al-A\'la', arabicName: 'الأعلى', versesCount: 19 },
    { number: 88, name: 'Al-Ghashiyah', arabicName: 'الغاشية', versesCount: 26 },
    { number: 89, name: 'Al-Fajr', arabicName: 'الفجر', versesCount: 30 },
    { number: 90, name: 'Al-Balad', arabicName: 'البلد', versesCount: 20 },
    { number: 91, name: 'Ash-Shams', arabicName: 'الشمس', versesCount: 15 },
    { number: 92, name: 'Al-Lail', arabicName: 'الليل', versesCount: 21 },
    { number: 93, name: 'Ad-Duhaa', arabicName: 'الضحى', versesCount: 11 },
    { number: 94, name: 'Ash-Sharh', arabicName: 'الشرح', versesCount: 8 },
    { number: 95, name: 'At-Tin', arabicName: 'التين', versesCount: 8 },
    { number: 96, name: 'Al-\'Alaq', arabicName: 'العلق', versesCount: 19 },
    { number: 97, name: 'Al-Qadr', arabicName: 'القدر', versesCount: 5 },
    { number: 98, name: 'Al-Bayyinah', arabicName: 'البينة', versesCount: 8 },
    { number: 99, name: 'Az-Zalzalah', arabicName: 'الزلزلة', versesCount: 8 },
    { number: 100, name: 'Al-Adiyat', arabicName: 'العاديات', versesCount: 11 },
    { number: 101, name: 'Al-Qari\'ah', arabicName: 'القارعة', versesCount: 11 },
    { number: 102, name: 'At-Takathur', arabicName: 'التكاثر', versesCount: 8 },
    { number: 103, name: 'Al-Asr', arabicName: 'العصر', versesCount: 3 },
    { number: 104, name: 'Al-Humazah', arabicName: 'الهمزة', versesCount: 9 },
    { number: 105, name: 'Al-Fil', arabicName: 'الفيل', versesCount: 5 },
    { number: 106, name: 'Quraish', arabicName: 'قريش', versesCount: 4 },
    { number: 107, name: 'Al-Ma\'un', arabicName: 'الماعون', versesCount: 7 },
    { number: 108, name: 'Al-Kawthar', arabicName: 'الكوثر', versesCount: 3 },
    { number: 109, name: 'Al-Kafirun', arabicName: 'الكافرون', versesCount: 6 },
    { number: 110, name: 'An-Nasr', arabicName: 'النصر', versesCount: 3 },
    { number: 111, name: 'Al-Masad', arabicName: 'المسد', versesCount: 5 },
    { number: 112, name: 'Al-Ikhlas', arabicName: 'الإخلاص', versesCount: 4 },
    { number: 113, name: 'Al-Falaq', arabicName: 'الفلق', versesCount: 5 },
    { number: 114, name: 'An-Nas', arabicName: 'الناس', versesCount: 6 }
];
/**
 * Efficiently generates a range of numbers
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
const range = (start, end) => {
    logger.debug(`Generating range from ${start} to ${end}`);
    if (start > end) [start, end] = [end, start];
    const result = [...Array(end - start + 1)].map((_, i) => start + i);
    logger.debug(`Generated ${result.length} numbers`);
    return result;
};
const pages = range(1, 604);
const duas = [
    {
        "name": "Upon Waking Up",
        "index": 0
    },
    {
        "name": "Upon Waking Up (2)",
        "index": 1
    },
    {
        "name": "Upon Waking Up (3)",
        "index": 2
    },
    {
        "name": "Seeking Forgiveness Upon Waking Up",
        "index": 3
    },
    {
        "name": "Upon Wearing Clothes",
        "index": 4
    },
    {
        "name": "Upon Wearing New Clothes",
        "index": 5
    },
    {
        "name": "Upon Wearing New Clothes (Alternative 1)",
        "index": 6
    },
    {
        "name": "Upon Wearing New Clothes (Alternative 2)",
        "index": 7
    },
    {
        "name": "Upon Removing Clothes",
        "index": 8
    },
    {
        "name": "Upon Entering the Restroom",
        "index": 9
    },
    {
        "name": "Upon Exiting the Restroom",
        "index": 10
    },
    {
        "name": "Before Ablution",
        "index": 11
    },
    {
        "name": "After Ablution (1)",
        "index": 12
    },
    {
        "name": "After Ablution (2)",
        "index": 13
    },
    {
        "name": "After Ablution (3)",
        "index": 14
    },
    {
        "name": "Upon Leaving the House (1)",
        "index": 15
    },
    {
        "name": "Upon Leaving the House (2)",
        "index": 16
    },
    {
        "name": "Upon Entering the House",
        "index": 17
    },
    {
        "name": "Going to the Mosque (1)",
        "index": 18
    },
    {
        "name": "Going to the Mosque (2)",
        "index": 19
    },
    {
        "name": "Going to the Mosque (3)",
        "index": 20
    },
    {
        "name": "Going to the Mosque (4)",
        "index": 21
    },
    {
        "name": "Entering the Mosque (1)",
        "index": 22
    },
    {
        "name": "Entering the Mosque (2)",
        "index": 23
    },
    {
        "name": "Exiting the Mosque",
        "index": 24
    },
    {
        "name": "During the Call to Prayer (1)",
        "index": 25
    },
    {
        "name": "During the Call to Prayer (2)",
        "index": 26
    },
    {
        "name": "During the Call to Prayer (3)",
        "index": 27
    },
    {
        "name": "During the Call to Prayer (4)",
        "index": 28
    },
    {
        "name": "During the Call to Prayer (5)",
        "index": 29
    },
    {
        "name": "Opening Supplication of Prayer (1)",
        "index": 30
    },
    {
        "name": "Opening Supplication of Prayer (2)",
        "index": 31
    },
    {
        "name": "Opening Supplication of Prayer (3)",
        "index": 32
    },
    {
        "name": "Opening Supplication of Prayer (4)",
        "index": 33
    },
    {
        "name": "Opening Supplication of Prayer (5)",
        "index": 34
    },
    {
        "name": "Opening Supplication of Prayer (6)",
        "index": 35
    },
    {
        "name": "During Bowing (1)",
        "index": 36
    },
    {
        "name": "During Bowing (2)",
        "index": 37
    },
    {
        "name": "During Bowing (3)",
        "index": 38
    },
    {
        "name": "During Bowing (4)",
        "index": 39
    },
    {
        "name": "During Bowing (5)",
        "index": 40
    },
    {
        "name": "Rising from Bowing (1)",
        "index": 41
    },
    {
        "name": "Rising from Bowing (2)",
        "index": 42
    },
    {
        "name": "Rising from Bowing (3)",
        "index": 43
    },
    {
        "name": "During Prostration (1)",
        "index": 44
    },
    {
        "name": "During Prostration (2)",
        "index": 45
    },
    {
        "name": "During Prostration (3)",
        "index": 46
    },
    {
        "name": "During Prostration (4)",
        "index": 47
    },
    {
        "name": "During Prostration (5)",
        "index": 48
    },
    {
        "name": "During Prostration (6)",
        "index": 49
    },
    {
        "name": "During Prostration (7)",
        "index": 50
    },
    {
        "name": "Between the Two Prostrations (1)",
        "index": 51
    },
    {
        "name": "Between the Two Prostrations (2)",
        "index": 52
    },
    {
        "name": "Prostration of Recitation",
        "index": 53
    },
    {
        "name": "Prostration of Recitation (2)",
        "index": 54
    },
    {
        "name": "Testimony of Faith (Tashahhud)",
        "index": 55
    },
    {
        "name": "Blessings upon the Prophet (1)",
        "index": 56
    },
    {
        "name": "Blessings upon the Prophet (2)",
        "index": 57
    },
    {
        "name": "After Tashahhud (1)",
        "index": 58
    },
    {
        "name": "After Tashahhud (2)",
        "index": 59
    },
    {
        "name": "After Tashahhud (3)",
        "index": 60
    },
    {
        "name": "After Tashahhud (4)",
        "index": 61
    },
    {
        "name": "After Tashahhud (5)",
        "index": 62
    },
    {
        "name": "After Tashahhud (6)",
        "index": 63
    },
    {
        "name": "After Tashahhud (7)",
        "index": 64
    },
    {
        "name": "After Tashahhud (8)",
        "index": 65
    },
    {
        "name": "After Tashahhud (9)",
        "index": 66
    },
    {
        "name": "After Tashahhud (10)",
        "index": 67
    },
    {
        "name": "After Tashahhud (11)",
        "index": 68
    },
    {
        "name": "After Prayer (1)",
        "index": 69
    },
    {
        "name": "After Prayer (2)",
        "index": 70
    },
    {
        "name": "After Prayer (3)",
        "index": 71
    },
    {
        "name": "After Prayer (4)",
        "index": 72
    },
    {
        "name": "After Prayer (5)",
        "index": 73
    },
    {
        "name": "After Prayer (6)",
        "index": 74
    },
    {
        "name": "After Prayer (7)",
        "index": 75
    },
    {
        "name": "After Fajr Prayer",
        "index": 76
    },
    {
        "name": "Istikhara (2)",
        "index": 77
    },
    {
        "name": "Morning and Evening Remembrances (1)",
        "index": 78
    },
    {
        "name": "Morning and Evening Remembrances (2)",
        "index": 79
    },
    {
        "name": "Morning and Evening Remembrances (3)",
        "index": 80
    },
    {
        "name": "Morning and Evening Remembrances (4)",
        "index": 81
    },
    {
        "name": "Morning and Evening Remembrances (5)",
        "index": 82
    },
    {
        "name": "Morning and Evening Remembrances (6)",
        "index": 83
    },
    {
        "name": "Morning and Evening Remembrances (7)",
        "index": 84
    },
    {
        "name": "Morning and Evening Remembrances (8)",
        "index": 85
    },
    {
        "name": "Morning and Evening Remembrances (9)",
        "index": 86
    },
    {
        "name": "Morning and Evening Remembrances (10)",
        "index": 87
    },
    {
        "name": "Morning and Evening Remembrances (11)",
        "index": 88
    },
    {
        "name": "Morning and Evening Remembrances (12)",
        "index": 89
    },
    {
        "name": "Morning and Evening Remembrances (13)",
        "index": 90
    },
    {
        "name": "Morning and Evening Remembrances (14)",
        "index": 91
    },
    {
        "name": "Morning and Evening Remembrances (15)",
        "index": 92
    },
    {
        "name": "Morning and Evening Remembrances (16)",
        "index": 93
    },
    {
        "name": "Morning and Evening Remembrances (17)",
        "index": 94
    },
    {
        "name": "Morning and Evening Remembrances (18)",
        "index": 95
    },
    {
        "name": "Morning and Evening Remembrances (19)",
        "index": 96
    },
    {
        "name": "Morning and Evening Remembrances (20)",
        "index": 97
    },
    {
        "name": "Morning and Evening Remembrances (21)",
        "index": 98
    },
    {
        "name": "Morning and Evening Remembrances (22)",
        "index": 99
    },
    {
        "name": "Morning and Evening Remembrances (23)",
        "index": 100
    },
    {
        "name": "Morning and Evening Remembrances (24)",
        "index": 101
    },
    {
        "name": "Morning and Evening Remembrances (25)",
        "index": 102
    },
    {
        "name": "Before Sleeping (2)",
        "index": 103
    },
    {
        "name": "Before Sleeping (3)",
        "index": 104
    },
    {
        "name": "Before Sleeping (4)",
        "index": 105
    },
    {
        "name": "Before Sleeping (5)",
        "index": 106
    },
    {
        "name": "Before Sleeping (6)",
        "index": 107
    },
    {
        "name": "Before Sleeping (7)",
        "index": 108
    },
    {
        "name": "Before Sleeping (8)",
        "index": 109
    },
    {
        "name": "Before Sleeping (9)",
        "index": 110
    },
    {
        "name": "Before Sleeping (10)",
        "index": 111
    },
    {
        "name": "Before Sleeping (11)",
        "index": 112
    },
    {
        "name": "Before Sleeping (12)",
        "index": 113
    },
    {
        "name": "Before Sleeping (13)",
        "index": 114
    },
    {
        "name": "Turning Over in Bed",
        "index": 115
    },
    {
        "name": "Anxiety/Fear in Sleep",
        "index": 116
    },
    {
        "name": "Bad Dreams (1)",
        "index": 117
    },
    {
        "name": "Bad Dreams (2)",
        "index": 118
    },
    {
        "name": "Bad Dreams (3)",
        "index": 119
    },
    {
        "name": "Bad Dreams (4)",
        "index": 120
    },
    {
        "name": "Bad Dreams (5)",
        "index": 121
    },
    {
        "name": "Qunut in Witr",
        "index": 122
    },
    {
        "name": "Qunut in Witr (2)",
        "index": 123
    },
    {
        "name": "Qunut in Witr (3)",
        "index": 124
    },
    {
        "name": "After Witr Prayer",
        "index": 125
    },
    {
        "name": "Distress and Sorrow",
        "index": 126
    },
    {
        "name": "Distress and Sorrow (2)",
        "index": 127
    },
    {
        "name": "Hardship (1)",
        "index": 128
    },
    {
        "name": "Hardship (2)",
        "index": 129
    },
    {
        "name": "Hardship (3)",
        "index": 130
    },
    {
        "name": "Hardship (4)",
        "index": 131
    },
    {
        "name": "Meeting an Enemy/Authority (1)",
        "index": 132
    },
    {
        "name": "Meeting an Enemy/Authority (2)",
        "index": 133
    },
    {
        "name": "Meeting an Enemy/Authority (3)",
        "index": 134
    },
    {
        "name": "Fear of Oppression (1)",
        "index": 135
    },
    {
        "name": "Fear of Oppression (2)",
        "index": 136
    },
    {
        "name": "Against an Enemy",
        "index": 137
    },
    {
        "name": "Fearing a Group",
        "index": 138
    },
    {
        "name": "Doubts in Faith (1)",
        "index": 139
    },
    {
        "name": "Doubts in Faith (2)",
        "index": 140
    },
    {
        "name": "Doubts in Faith (3)",
        "index": 141
    },
    {
        "name": "Doubts in Faith (4)",
        "index": 142
    },
    {
        "name": "Repaying Debt (1)",
        "index": 143
    },
    {
        "name": "Repaying Debt (2)",
        "index": 144
    },
    {
        "name": "Whispers in Prayer/Recitation",
        "index": 145
    },
    {
        "name": "Difficulty in a Matter",
        "index": 146
    },
    {
        "name": "After Committing a Sin",
        "index": 147
    },
    {
        "name": "Repelling Satan (1)",
        "index": 148
    },
    {
        "name": "Repelling Satan (2)",
        "index": 149
    },
    {
        "name": "Repelling Satan (3)",
        "index": 150
    },
    {
        "name": "Overwhelmed by Undesirable Situation (1)",
        "index": 151
    },
    {
        "name": "Overwhelmed by Undesirable Situation (2)",
        "index": 152
    },
    {
        "name": "Congratulating on a Newborn",
        "index": 153
    },
    {
        "name": "Protection for Children",
        "index": 154
    },
    {
        "name": "Visiting the Sick (1)",
        "index": 155
    },
    {
        "name": "Visiting the Sick (2)",
        "index": 156
    },
    {
        "name": "Virtue of Visiting the Sick",
        "index": 157
    },
    {
        "name": "Sick Who Have Lost Hope (1)",
        "index": 158
    },
    {
        "name": "Sick Who Have Lost Hope (2)",
        "index": 159
    },
    {
        "name": "Sick Who Have Lost Hope (3)",
        "index": 160
    },
    {
        "name": "Guidance for the Dying",
        "index": 161
    },
    {
        "name": "Afflicted by Calamity",
        "index": 162
    },
    {
        "name": "Closing Eyes of Deceased",
        "index": 163
    },
    {
        "name": "Funeral Prayer (1)",
        "index": 164
    },
    {
        "name": "Funeral Prayer (2)",
        "index": 165
    },
    {
        "name": "Funeral Prayer (3)",
        "index": 166
    },
    {
        "name": "Funeral Prayer (4)",
        "index": 167
    },
    {
        "name": "Oversight in Funeral Prayer (1)",
        "index": 168
    },
    {
        "name": "Oversight in Funeral Prayer (2)",
        "index": 169
    },
    {
        "name": "Oversight in Funeral Prayer (3)",
        "index": 170
    },
    {
        "name": "Condolence (1)",
        "index": 171
    },
    {
        "name": "Condolence (2)",
        "index": 172
    },
    {
        "name": "Placing Deceased in Grave",
        "index": 173
    },
    {
        "name": "After Burying Deceased",
        "index": 174
    },
    {
        "name": "Visiting Graves",
        "index": 175
    },
    {
        "name": "Strong Wind (1)",
        "index": 176
    },
    {
        "name": "Strong Wind (2)",
        "index": 177
    },
    {
        "name": "Thunder",
        "index": 178
    },
    {
        "name": "Rain (1)",
        "index": 179
    },
    {
        "name": "Rain (2)",
        "index": 180
    },
    {
        "name": "Rain (3)",
        "index": 181
    },
    {
        "name": "When Rain Falls",
        "index": 182
    },
    {
        "name": "After Rainfall",
        "index": 183
    },
    {
        "name": "Relief from Thirst",
        "index": 184
    },
    {
        "name": "Sighting the New Moon",
        "index": 185
    },
    {
        "name": "Breaking the Fast (1)",
        "index": 186
    },
    {
        "name": "Breaking the Fast (2)",
        "index": 187
    },
    {
        "name": "Before Eating (1)",
        "index": 188
    },
    {
        "name": "Before Eating (2)",
        "index": 189
    },
    {
        "name": "After Eating (1)",
        "index": 190
    },
    {
        "name": "After Eating (2)",
        "index": 191
    },
    {
        "name": "Guest for the Host",
        "index": 192
    },
    {
        "name": "Someone Who Gives You Drink",
        "index": 193
    },
    {
        "name": "Breaking Fast at Someone's Home",
        "index": 194
    },
    {
        "name": "Fasting Person Cannot Eat",
        "index": 195
    },
    {
        "name": "Fasting Person Insulted",
        "index": 196
    },
    {
        "name": "Seeing First Fruits",
        "index": 197
    },
    {
        "name": "Sneezing",
        "index": 198
    },
    {
        "name": "Disbeliever Sneezes",
        "index": 199
    },
    {
        "name": "Newlywed Couple",
        "index": 200
    },
    {
        "name": "Married Person/Buying Animal",
        "index": 201
    },
    {
        "name": "Before Intimacy with Spouse",
        "index": 202
    },
    {
        "name": "Anger",
        "index": 203
    },
    {
        "name": "Seeing Someone Afflicted",
        "index": 204
    },
    {
        "name": "In a Gathering",
        "index": 205
    },
    {
        "name": "Expiation for a Gathering",
        "index": 206
    },
    {
        "name": "Response to 'May Allah Forgive You'",
        "index": 207
    },
    {
        "name": "Someone Who Has Done You a Favor",
        "index": 208
    },
    {
        "name": "Protection from the Dajjal",
        "index": 209
    },
    {
        "name": "Response to 'I Love You for Allah'",
        "index": 210
    },
    {
        "name": "Someone Offers You Their Wealth",
        "index": 211
    },
    {
        "name": "Repaying a Loan",
        "index": 212
    },
    {
        "name": "Fear of Shirk",
        "index": 213
    },
    {
        "name": "Response to 'May Allah Bless You",
        "index": 214
    },
    {
        "name": "Against Superstition",
        "index": 215
    },
    {
        "name": "Riding an Animal",
        "index": 216
    },
    {
        "name": "Travel",
        "index": 217
    },
    {
        "name": "Entering a Town/City",
        "index": 218
    },
    {
        "name": "Entering the Marketplace",
        "index": 219
    },
    {
        "name": "Mount Has Difficulty",
        "index": 220
    },
    {
        "name": "Traveler for the Resident",
        "index": 221
    },
    {
        "name": "Resident for the Traveler (1)",
        "index": 222
    },
    {
        "name": "Resident for the Traveler (2)",
        "index": 223
    },
    {
        "name": "Travel: Greatness/Glorification",
        "index": 224
    },
    {
        "name": "Traveler at Dawn",
        "index": 225
    },
    {
        "name": "Arriving at a Destination",
        "index": 226
    },
    {
        "name": "Returning from Travel",
        "index": 227
    },
    {
        "name": "Pleasant/Unpleasant Matters",
        "index": 228
    },
    {
        "name": "Virtue of Blessings on Prophet (1)",
        "index": 229
    },
    {
        "name": "Virtue of Blessings on Prophet (2)",
        "index": 230
    },
    {
        "name": "Virtue of Blessings on Prophet (3)",
        "index": 231
    },
    {
        "name": "Virtue of Blessings on Prophet (4)",
        "index": 232
    },
    {
        "name": "Virtue of Blessings on Prophet (5)",
        "index": 233
    },
    {
        "name": "Spreading Peace (1)",
        "index": 234
    },
    {
        "name": "Spreading Peace (2)",
        "index": 235
    },
    {
        "name": "Spreading Peace (3)",
        "index": 236
    },
    {
        "name": "Responding to Disbelievers",
        "index": 237
    },
    {
        "name": "Rooster/Donkey",
        "index": 238
    },
    {
        "name": "Dogs Barking at Night",
        "index": 239
    },
    {
        "name": "Someone Who Has Wronged You",
        "index": 240
    },
    {
        "name": "When Praised",
        "index": 241
    },
    {
        "name": "When Purified (Spiritually)",
        "index": 242
    },
    {
        "name": "Talbiyah",
        "index": 243
    },
    {
        "name": "Reaching the Black Stone",
        "index": 244
    },
    {
        "name": "Between Yemeni Corner and Black Stone",
        "index": 245
    },
    {
        "name": "Sa'y between Safa and Marwa",
        "index": 246
    },
    {
        "name": "Day of Arafah",
        "index": 247
    },
    {
        "name": "Mash'ar al-Haram",
        "index": 248
    },
    {
        "name": "Throwing Stones at Pillars",
        "index": 249
    },
    {
        "name": "Amazement/Joy (1)",
        "index": 250
    },
    {
        "name": "Amazement/Joy (2)",
        "index": 251
    },
    {
        "name": "Pleasant Happens",
        "index": 252
    },
    {
        "name": "Physical Pain",
        "index": 253
    },
    {
        "name": "Fearing Specific Harm",
        "index": 254
    },
    {
        "name": "Startled",
        "index": 255
    },
    {
        "name": "Slaughtering an Animal",
        "index": 256
    },
    {
        "name": "Ward Off Evil of Devils",
        "index": 257
    },
    {
        "name": "Forgiveness/Repentance (1)",
        "index": 258
    },
    {
        "name": "Forgiveness/Repentance (2)",
        "index": 259
    },
    {
        "name": "Forgiveness/Repentance (3)",
        "index": 260
    },
    {
        "name": "Forgiveness/Repentance (4)",
        "index": 261
    },
    {
        "name": "Forgiveness/Repentance (5)",
        "index": 262
    },
    {
        "name": "Forgiveness/Repentance (6)",
        "index": 263
    },
    {
        "name": "Glorifying/Praising (1)",
        "index": 264
    },
    {
        "name": "Glorifying/Praising (2)",
        "index": 265
    },
    {
        "name": "Glorifying/Praising (3)",
        "index": 266
    },
    {
        "name": "Glorifying/Praising (4)",
        "index": 267
    },
    {
        "name": "Glorifying/Praising (5)",
        "index": 268
    },
    {
        "name": "Glorifying/Praising (6)",
        "index": 269
    },
    {
        "name": "Glorifying/Praising (7)",
        "index": 270
    },
    {
        "name": "Glorifying/Praising (8)",
        "index": 271
    },
    {
        "name": "Glorifying/Praising (9)",
        "index": 272
    },
    {
        "name": "Glorifying/Praising (10)",
        "index": 273
    },
    {
        "name": "Glorifying/Praising (11)",
        "index": 274
    },
    {
        "name": "Glorifying/Praising (12)",
        "index": 275
    },
    {
        "name": "How Prophet Glorified Allah",
        "index": 276
    },
    {
        "name": "Various Good Deeds/Etiquettes",
        "index": 277
    },
    {
        "name": "Supplication Before Sleeping",
        "index": 278
    },
    {
        "name": "Supplication Upon Waking Up",
        "index": 279
    },
    {
        "name": "Supplication Entering the Bathroom",
        "index": 280
    },
    {
        "name": "Supplication Leaving the Bathroom",
        "index": 281
    },
    {
        "name": "Supplication Before Eating",
        "index": 282
    },
    {
        "name": "Supplication If Forgetting Bismillah at the Beginning of a Meal",
        "index": 283
    },
    {
        "name": "Supplication After Eating",
        "index": 284
    },
    {
        "name": "Supplication Entering the Mosque",
        "index": 285
    },
    {
        "name": "Supplication Leaving the Mosque",
        "index": 286
    },
    {
        "name": "Supplication Before Performing Ablution",
        "index": 287
    },
    {
        "name": "Supplication After Performing Ablution",
        "index": 288
    },
    {
        "name": "Supplication for Breaking the Fast",
        "index": 289
    },
    {
        "name": "Supplication Entering the House #1",
        "index": 290
    },
    {
        "name": "Supplication Entering the House #2",
        "index": 291
    },
    {
        "name": "Supplication Leaving the House",
        "index": 292
    },
    {
        "name": "Supplication for Protection from Causing or Experiencing Harm Outside the House",
        "index": 293
    },
    {
        "name": "Travel Supplication",
        "index": 294
    },
    {
        "name": "Supplication of a Resident for Someone Who is Traveling",
        "index": 295
    },
    {
        "name": "Supplication for Piety from a Resident to Someone Who is Traveling",
        "index": 296
    },
    {
        "name": "Supplication When Wearing New Clothes",
        "index": 297
    },
    {
        "name": "Supplication When Wearing Clothes",
        "index": 298
    },
    {
        "name": "Supplication When Mounting a Vehicle",
        "index": 299
    },
    {
        "name": "Supplication When it Rains",
        "index": 300
    },
    {
        "name": "Supplication During Heavy Rain",
        "index": 301
    },
    {
        "name": "Supplication After it Rains",
        "index": 302
    },
    {
        "name": "Supplication During Strong Wind",
        "index": 303
    },
    {
        "name": "The Best Supplication for Seeking Forgiveness (Sayyid al-Istighfar)",
        "index": 304
    },
    {
        "name": "Supplication for Ease in All Matters",
        "index": 305
    },
    {
        "name": "Supplication When Afflicted by Calamity",
        "index": 306
    },
    {
        "name": "Supplication When in Debt",
        "index": 307
    },
    {
        "name": "Supplication for Protection from Laziness, Sadness, and Debt",
        "index": 308
    },
    {
        "name": "Supplication After Sneezing",
        "index": 309
    },
    {
        "name": "Supplication Upon Hearing Someone Sneeze",
        "index": 310
    },
    {
        "name": "Response to Someone Who Says 'Yarhamukallah' After You Sneeze",
        "index": 311
    },
    {
        "name": "Supplication for Good Character",
        "index": 312
    },
    {
        "name": "Prayer for Protection from Satan",
        "index": 313
    },
    {
        "name": "Prayer After the Adhan",
        "index": 314
    },
    {
        "name": "Prayer for Forgiveness for Parents",
        "index": 315
    },
    {
        "name": "Istighfar",
        "index": 316
    },
    {
        "name": "Allah, The Giver of Peace",
        "index": 317
    },
    {
        "name": "Allah, The Preventer and The Giver of All Things",
        "index": 318
    },
    {
        "name": "Allah, The Possessor of All and The Only One Worthy of Worship",
        "index": 319
    },
    {
        "name": "Tasbih",
        "index": 320
    },
    {
        "name": "Tahmid",
        "index": 321
    },
    {
        "name": "Takbir",
        "index": 322
    },
    {
        "name": "There is No Partner for Allah, and To Him Belongs All Things",
        "index": 323
    },
    {
        "name": "Ayat al-Kursi",
        "index": 324
    },
    {
        "name": "Al-Ikhlas",
        "index": 325
    },
    {
        "name": "Al-Falaq",
        "index": 326
    },
    {
        "name": "An-Naas",
        "index": 327
    },
    {
        "name": "Supplication for Beneficial Knowledge, Good Provision, and Accepted Deeds",
        "index": 328
    },
    {
        "name": "Ayat al-Kursi",
        "index": 329
    },
    {
        "name": "Al-Ikhlas",
        "index": 330
    },
    {
        "name": "Al-Falaq",
        "index": 331
    },
    {
        "name": "An-Naas",
        "index": 332
    },
    {
        "name": "Entering the Evening in the Kingdom of Allah and Seeking His Protection",
        "index": 333
    },
    {
        "name": "Entering the Evening by Seeking Allah's Mercy",
        "index": 334
    },
    {
        "name": "The Master of Seeking Forgiveness",
        "index": 335
    },
    {
        "name": "Prayer for Health and Protection",
        "index": 336
    },
    {
        "name": "Prayer for Safety in This World and the Hereafter",
        "index": 337
    },
    {
        "name": "Prayer for Seeking Protection from the Whispers of Satan",
        "index": 338
    },
    {
        "name": "Remembrance to Be Protected from All Dangers",
        "index": 339
    },
    {
        "name": "Declaration of Contentment with Allah, Islam, and the Prophet Muhammad (Peace Be Upon Him)",
        "index": 340
    },
    {
        "name": " Asking for Guidance from Allah",
        "index": 341
    },
    {
        "name": "Entering the Evening on the Natural Disposition of Islam",
        "index": 342
    },
    {
        "name": "Remembrance of the Oneness of Allah",
        "index": 343
    },
    {
        "name": "Reciting Praise to Allah",
        "index": 344
    },
    {
        "name": "Daily Praise (Tasbih and Alhamdulillah)",
        "index": 345
    },
    {
        "name": "Seeking Forgiveness 100 Times a Day",
        "index": 346
    },
    {
        "name": "Prayer for Protection from the Evil of Allah's Creation",
        "index": 347
    },
    {
        "name": "Ayatul Kursi",
        "index": 348
    },
    {
        "name": "Al-Ikhlas",
        "index": 349
    },
    {
        "name": "Al-Falaq",
        "index": 350
    },
    {
        "name": "An-Naas",
        "index": 351
    },
    {
        "name": "Upon Entering The Morning by Asking for Protection from Allah",
        "index": 352
    },
    {
        "name": "Upon Entering The Morning with The Grace of Allah",
        "index": 353
    },
    {
        "name": "Sayyid al-Istighfar",
        "index": 354
    },
    {
        "name": "Dua for Protection and Good Health",
        "index": 355
    },
    {
        "name": "Dua for Salvation in The World and Hereafter",
        "index": 356
    },
    {
        "name": "Dua for Protection from Shaytan Whispers",
        "index": 357
    },
    {
        "name": "Asking for Protection from All Harms",
        "index": 358
    },
    {
        "name": "Declaration of Pleasure with Allah, Islam, and the Prophet Muhammad shallallahu 'alaihi wa sallam",
        "index": 359
    },
    {
        "name": "Asking Allah for Guidance",
        "index": 360
    },
    {
        "name": "Entering The Morning Upon The Natural Religion of Islam",
        "index": 361
    },
    {
        "name": "Tawheed Dhikr",
        "index": 362
    },
    {
        "name": "Read Tasbih",
        "index": 363
    },
    {
        "name": "Dua for Useful Knowledge, Good Sustenance, and Accepted Deeds",
        "index": 364
    },
    {
        "name": "Daily Tasbih and Tahmid",
        "index": 365
    },
    {
        "name": "Istighfar 100x a Day",
        "index": 366
    },
    {
        "name": "Dua Seeking Good In This World And In The Hereafter",
        "index": 367
    },
    {
        "name": "Dua To Make Heart Firm Upon Deen #1",
        "index": 368
    },
    {
        "name": "Dua To Make Heart Firm Upon Deen #2",
        "index": 369
    },
    {
        "name": "Dua To Make Heart Firm Upon Deen #3",
        "index": 370
    },
    {
        "name": "Dua To Seek Refuge Against The Loss Of Pleasure",
        "index": 371
    },
    {
        "name": "Dua To Resist Affliction",
        "index": 372
    },
    {
        "name": "Dua To Be Released From Debt, Anxiety, Weakness, Laziness, Fear, And Pressure from Others",
        "index": 373
    },
    {
        "name": "Dua When Getting Good News",
        "index": 374
    }
]


// Constants
const QURAN_API_BASE_URL = 'https://api.aayah.info/api/v1';
const QURAN_PAGES_COUNT = 604;

// Caching variables
let cachedSitemap = null;
let cachedSitemapTimestamp = 0;
const CACHE_DURATION_MS = 3600 * 1000; // 1 hour

/**
 * A corrected async pool implementation to limit concurrency
 * @param {number} poolLimit - maximum number of concurrent promises
 * @param {Array} array - array of items to process
 * @param {function} iteratorFn - async function to process each item
 * @returns {Promise<Array>} - resolves to an array of results
 */
const asyncPool = async (poolLimit, array, iteratorFn) => {
    const ret = [];
    const executing = [];
    for (const item of array) {
        const p = Promise.resolve().then(() => iteratorFn(item));
        const wrappedP = p.then((result) => {
            executing.splice(executing.indexOf(wrappedP), 1);
            return result;
        });
        ret.push(wrappedP);
        executing.push(wrappedP);
        if (executing.length >= poolLimit) {
            await Promise.race(executing);
        }
    }
    return Promise.all(ret);
};

/**
 * Normalizes text for search
 * @param {string} text
 * @returns {string}
 */
const normalizeSearchText = (text) => {
    return latinize(text, {
        symbols: true,
        lowerCase: true,
        trim: true
    });
};

/**
 * Creates a URL-safe string
 * @param {string[]} parts
 * @returns {string}
 */
const generateUrl = (...parts) => {
    return `https://aayah.info/${parts.map(encodeURIComponent).join('/')}`;
};

/**
 * Creates a URL entry object
 * @param {string} name
 * @param {string} url
 * @param {string} type
 * @param {string} searchableText
 * @returns {Object}
 */
const createUrlEntry = (name, url, type, searchableText = '') => ({
    name,
    url,
    type,
    searchable: searchableText,
    searchable_normal: normalizeSearchText(searchableText)
});

/**
 * Delays execution by specified milliseconds
 * @param {number} ms Milliseconds to delay
 * @returns {Promise<void>}
 */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Rate-limited fetch function
 * @param {string} url URL to fetch
 * @param {Object} options Fetch options
 * @returns {Promise<Response>}
 */
const rateLimitedFetch = async (url, options = {}) => {
    const maxRetries = 3;
    let lastError;

    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response;
        } catch (error) {
            lastError = error;
            await delay(1000 * (i + 1)); // Exponential backoff
        }
    }
    throw lastError;
};

/**
 * Fetches verse data for a given surah and verse
 * @param {number|string} surahNum
 * @param {number} verse
 * @returns {Promise<Object>}
 */
const fetchVerseData = async (surahNum, verse) => {
    try {
        const [engRes, araRes] = await Promise.all([
            rateLimitedFetch(`${QURAN_API_BASE_URL}/quran/eng-yusufaliorig/surah/${surahNum}/verse/${verse}?audio=Alafasy_128kbps&tafsir=en-tafisr-ibn-kathir`),
            rateLimitedFetch(`${QURAN_API_BASE_URL}/quran/ara-qurandoorinonun/surah/${surahNum}/verse/${verse}?audio=Alafasy_128kbps&tafsir=en-tafisr-ibn-kathir`)
        ]);

        const [engData, araData] = await Promise.all([
            engRes.json(),
            araRes.json()
        ]);

        return {
            englishText: engData?.data?.verse?.text || '',
            arabicText: araData?.data?.verse?.text || '',
            tafsir: engData?.data?.tafsir || ''
        };
    } catch (error) {
        logger.error(`Error fetching verse data for ${surahNum}:${verse}`, error);
        return { englishText: '', arabicText: '', tafsir: '' };
    }
};

/**
 * Fetches hadith data for a given book and number
 * @param {string} bookId
 * @param {number} num
 * @returns {Promise<Object>}
 */
const fetchHadithData = async (bookId, num) => {
    try {
        const response = await fetch(`${QURAN_API_BASE_URL}/hadith/${bookId}/section/1/${num}`);
        const data = await response.json();
        const hadith = data?.data?.hadith?.hadiths[0] || {};

        return {
            englishText: hadith?.text?.en || '',
            arabicText: hadith?.text?.ar || '',
            grades: hadith?.grades?.map(grade => `${grade.name} ${grade.grade}`).join(' ') || ''
        };
    } catch (error) {
        logger.error(`Error fetching hadith data for ${bookId}:${num}`, error);
        return { englishText: '', arabicText: '', grades: '' };
    }
};

/**
 * Generates Quran-related URLs
 * @param {Array} surahs
 * @param {Array} juzs
 * @returns {Promise<Array>}
 */
const generateQuranUrls = async (surahs, juzs) => {
    logger.start('Generating Quran URLs');
    const urls = [];

    // Base URLs
    urls.push(
        createUrlEntry('Quran Home', generateUrl('quran'), 'Sections', 'Quran Koran Keu Kewu Home'),
        createUrlEntry('Quran Quiz', generateUrl('quran', 'quiz'), 'Sections', 'Quran Koran Keu Kewu Quiz')
    );

    // Juz URLs
    logger.debug(`Processing ${juzs.length} juzs`);
    juzs.forEach(juz => {
        const searchableText = `Quran Juz ${juz.number} ${juz.name}`;
        urls.push(createUrlEntry(
            `Juz ${juz.number} - ${juz.name}`,
            generateUrl('quran', 'juz', juz.number.toString()),
            'Quran Juz',
            searchableText
        ));
    });

    // Surah and Verse URLs using asyncPool for concurrency
    logger.debug(`Processing ${surahs.length} surahs`);
    for (const surah of surahs) {
        const surahNum = surah.number.toString();
        const surahName = `${surah.name} (${surah.arabicName})`;

        // Surah main page
        urls.push(createUrlEntry(
            `Surah ${surahName}`,
            generateUrl('quran', 'surah', surahNum),
            'Quran Surah',
            `Quran Surah ${surahNum} - ${surahName}`
        ));

        // Process verses with a concurrency limit (e.g., 5 at a time)
        const verseNumbers = Array.from({ length: surah.versesCount }, (_, i) => i + 1);
        const verseUrls = await asyncPool(5, verseNumbers, async verse => {
            const verseData = await fetchVerseData(surahNum, verse);
            return createUrlEntry(
                `Surah ${surahName} - Verse ${verse}`,
                `${generateUrl('quran', 'surah', surahNum)}#verse:${verse}`,
                'Quran Verse',
                `Quran Surah ${surahNum} ${surahName} verse ${verse} ${verseData.englishText} ${verseData.tafsir} ${verseData.arabicText}`
            );
        });
        urls.push(...verseUrls);
    }

    // Page URLs
    logger.debug('Generating page URLs');
    for (let page = 1; page <= QURAN_PAGES_COUNT; page++) {
        urls.push(createUrlEntry(
            `Quran Page ${page}`,
            generateUrl('quran', 'page', page.toString()),
            'Quran Page'
        ));
    }

    logger.success(`Generated ${urls.length} Quran URLs`);
    return urls;
};

/**
 * Generates Hadith-related URLs
 * @param {Object} booksData
 * @returns {Promise<Array>}
 */
const generateHadithUrls = async (booksData) => {
    logger.start('Generating Hadith URLs');
    const urls = [
        createUrlEntry('Hadith Collections', generateUrl('hadith'), 'Sections', 'All Hadith Collections')
    ];

    if (!booksData?.success || !booksData?.data?.books || typeof booksData.data?.books !== 'object') {
        logger.warn('Invalid books data provided', booksData);
        return urls;
    }

    const books = Object.values(booksData.data.books);
    logger.info(`Processing ${books.length} hadith books`);

    for (const book of books) {
        if (!book?.id || !book?.name || typeof book?.last_hadithnumber !== 'number') {
            logger.warn(`Skipping invalid book: ${book?.id}`);
            continue;
        }

        urls.push(createUrlEntry(
            `Hadith Book: ${book.name}`,
            generateUrl('hadith', book.id),
            'Hadith Books',
            `Hadith Book ${book.name}`
        ));

        if (book.sections && book.section_details) {
            Object.entries(book.sections)
                .filter(([key, title]) => {
                    const details = book.section_details[key];
                    return details && details.hadithnumber_last > 0;
                })
                .forEach(([key, title]) => {
                    urls.push(createUrlEntry(
                        `Hadith Book: ${book.name} - ${title || `Section ${key}`}`,
                        generateUrl('hadith', book.id, 'chapter', key),
                        'Hadith Sections',
                        `Hadith ${book.name} ${title || `Section ${key}`}`
                    ));
                });
        }

        if (book.last_hadithnumber > 0) {
            const hadithNumbers = Array.from({ length: book.last_hadithnumber }, (_, i) => i + 1);
            const hadithUrls = await asyncPool(5, hadithNumbers, async num => {
                const hadithData = await fetchHadithData(book.id, num);
                return createUrlEntry(
                    `Hadith ${num} from ${book.name}`,
                    generateUrl('hadith', book.id, 'number', num.toString()),
                    'Hadiths',
                    `Hadith ${num} from ${book.name} ${hadithData.englishText} ${hadithData.arabicText} ${hadithData.grades}`
                );
            });
            urls.push(...hadithUrls);
        }
    }

    logger.success(`Generated ${urls.length} Hadith URLs`);
    return urls;
};

/**
 * Generates Dua-related URLs
 * @param {Object[]} duas
 * @returns {Array}
 */
const generateDuaUrls = (duas) => {
    logger.start('Generating Dua URLs');
    const urls = [
        createUrlEntry('Duas Collection', generateUrl('dua'), 'Sections', 'Duas Dua Collection Hisnul Muslim Prayer Adhkar Askar Adua')
    ];

    logger.debug(`Processing ${duas.length} duas`);
    duas.forEach(dua => {
        const fullDua = getDua(dua.index);
        const searchableText = `Hisnul Muslim Dua Adhkar Adua Prayer Askar Collection Duas ${fullDua.title} ${fullDua.arabic} ${fullDua.latin} ${fullDua.translation} ${fullDua.benefits}`;

        urls.push(createUrlEntry(
            dua.name,
            generateUrl('dua', dua.index.toString()),
            'Dua',
            searchableText
        ));
    });

    logger.success(`Generated ${urls.length} Dua URLs`);
    return urls;
};

export const GET = async ({ fetch, setHeaders }) => {
    // Return cached sitemap if it exists and is fresh
    if (cachedSitemap && (Date.now() - cachedSitemapTimestamp < CACHE_DURATION_MS)) {
        setHeaders({
            'Cache-Control': 'public, max-age=3600',
            'Content-Type': 'application/json'
        });
        return json(cachedSitemap);
    }

    logger.start('Sitemap generation process');
    const startTime = performance.now();

    try {
        // Fetch hadith data
        const hadithRes = await fetch(`${QURAN_API_BASE_URL}/hadith`);
        if (!hadithRes.ok) {
            throw new Error('Failed to fetch hadith data');
        }
        const hadithData = await hadithRes.json();

        // Generate all URLs concurrently
        const [quranUrls, hadithUrls, duaUrls] = await Promise.all([
            generateQuranUrls(surahs, juzs),
            generateHadithUrls(hadithData),
            generateDuaUrls(duas)
        ]);

        logger.info('Quran Count', quranUrls.length);
        logger.info('Hadith Count', hadithUrls.length);
        logger.info('Dua Count', duaUrls.length);

        const allUrls = [...quranUrls, ...hadithUrls, ...duaUrls];

        logger.success(`Sitemap generation completed in ${((performance.now() - startTime) / 1000).toFixed(2)}s`);
        // Cache the result
        cachedSitemap = allUrls;
        cachedSitemapTimestamp = Date.now();

        setHeaders({
            'Cache-Control': 'public, max-age=3600',
            'Content-Type': 'application/json'
        });
        return json(allUrls);

    } catch (error) {
        logger.error('Sitemap generation failed', error);
        return json(
            { error: 'Failed to generate sitemap', details: error.message },
            { status: 500 }
        );
    }
};