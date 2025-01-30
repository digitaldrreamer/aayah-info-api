https://app.whatthediff.ai/changelog/An80viG

API for aayah.info. see DOCS.md for API documentation. Or go to api.aayah.info for docs

AI
Use Gemini 1.5 PRO
for search, use system instructions like: ill send you a quran recitation. write out the full recited text and the surah and verse number
for correction and tracking, modify this system prompt for use: I'll send you a quran recitation. tell me if there are mistakes (in content, not sound), like using kasrah instead of fatiha, or mixing up the recitation or joining two non-consecutive different verses, or reading an entirely different place, or any other content mistake. track the recitation to find mistakes

Quran Sources:
- https://github.com/fawazahmed0/quran-api
- fallback formats:
  Fetch https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.min.json
  If above url fails, then try fetching https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json
  If above url fails, then try fetching https://raw.githubusercontent.com/fawazahmed0/quran-api/1/editions/ben-muhiuddinkhan.min.json
  If above url fails, then try fetching https://raw.githubusercontent.com/fawazahmed0/quran-api/1/editions/ben-muhiuddinkhan.json

- https://everyayah.com/ (Audio and Images)

Hadith Sources:
- https://hadithapi.com/docs/hadiths
- https://github.com/fawazahmed0/hadith-api

Tafsir Sources
- https://github.com/spa5k/tafsir_api

Dua/Dhikr Sources:
- https://github.com/digitaldrreamer/dua

https://github.com/spa5k/tafsir_api?tab=readme-ov-file#readme
rejected books:
Tazkirul Quran(Maulana Wahiduddin Khan) by Maulana Wahid Uddin Khan - Modernist issues
Kashf Al-Asrar Tafsir by Kashf Al-Asrar Tafsir - Likely Shia
Kashani Tafsir by Kashani Tafsir - Shia
Tanwîr al-Miqbâs min Tafsîr Ibn ‘Abbâs by Tanwîr al-Miqbâs min Tafsîr Ibn ‘Abbâs - Authenticity issues

acceptable books:
Tafsir Ibn Kathir (abridged) by Hafiz Ibn Kathir
Maarif-ul-Quran by Mufti Muhammad Shafi
Al Qushairi Tafsir by Al Qushairi Tafsir
Tafsir al-Tustari by Tafsir al-Tustari
Asbab Al-Nuzul by Al-Wahidi by Asbab Al-Nuzul by Al-Wahidi
Al-Jalalayn by Al-Jalalayn
