//Za pomocą nowej notacji stwórz obiekt literał translateToEN który zawiera:
// - właściwość wordsPL - tablica 5 słów po Polsku
// - właściwość wordsEN - tablica 5 słów po Angielsku
// - metodę translate - która przyjmie 1 parametr - pojedyncze słowo.
// Jeżeli to słowo znajduje się w tablicy wordsEN to metoda niech zwraca słowo o danym indeksie z tablicy wordsPL. Jeżeli danego słowa nie ma w tablicy wordsPL, funkcja niech zwraca "nieznane słowo"

let translateToEng = function (word) {
    const words = {
        wordsPL: ['dom', 'samochód', 'drzewo', 'telefon', 'myszka'],
        wordsEN: ['house', 'car', 'tree', 'phone', 'mouse'],
        Translate: function (wordToTranslate) {
            if (this.wordsPL.includes(wordToTranslate)) {     
                let translated = this.wordsPL.indexOf(wordToTranslate);
                return this.wordsEN[translated]       
            }
            else {
                return 'nieznane słowo';
            }
        }
    }
    return [words.Translate(word), words]
}

let TranslateToEn = translateToEng('samochód');
console.log(TranslateToEn[0]);

// Stwórz duplikat powyższego obiektu o nazwie translateToPL.
// Nadpisz metodę translate. Tym razem niech metoda sprawdza istnienie słowa w tablicy wordsEN. Jeżeli takie słowo jest, niech zwraca odpowiednie słowo z wordsEN. W przeciwnym razie niech zwraca "unknown word"
// Pokaż rozwiązanie

let translateToPL = function (word) {
    const newWords = Object.assign({}, translateToEng);
    newWords.Translate = function (wordToTranslate) {
        if (this.wordsEN.includes(wordToTranslate)) {     
            let translated = this.wordsEN.indexOf(wordToTranslate);
            return this.wordsPL[translated]       
        }
        else {
            return "unknown word";
        }
    }
    return newWords.Translate(word)
}

let TranslatePl = translateToPL('car');
console.log(translatePl);
