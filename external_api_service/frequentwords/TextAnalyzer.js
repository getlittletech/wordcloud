class TextAnalyzer {

  static getFrequency(text) {
    var words = text.split(" ")

    const allWords = TextAnalyzer.getWordsWithCounts(words)

    const topWords = TextAnalyzer.getTopWords(allWords)

    return topWords
  }

  static getWordsWithCounts(words) {
    const allWords = words.reduce((acc, word) => {
      const wordCount = acc.get(word)
      console.log("word: " + word + ", cnt: " + wordCount)
      if (wordCount) {
        acc.set(word, wordCount + 1)
      } else {
        acc.set(word, 1)
      }
      return acc;
    }, new Map())

    return Array.from(allWords)
  }

  static getTopWords(allWords) {
    allWords.sort(([wordA, countA], [wordB, countB]) => {
      if (countA > countB) {
        return -1
      } else if (countA < countB) {
        return 1
      } else {
        return 0
      }
    })
    return allWords.slice(0, TextAnalyzer.MAX)
  }
}

TextAnalyzer.MAX = 100;

module.exports = TextAnalyzer
