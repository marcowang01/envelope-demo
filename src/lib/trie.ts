class TrieNode {
  letter: string | null;
  prevLetter: TrieNode | null;
  nextLetters: { [key: string]: TrieNode };
  isComplete: boolean;
  word: string | null; // Store the complete word at the end node

  constructor(letter: string | null) {
    this.letter = letter;
    this.prevLetter = null;
    this.nextLetters = {};
    this.isComplete = false;
    this.word = null; // Initially, there's no word
  }
}

class Trie {
  root: TrieNode;
  wordList: string[]; // Maintain a list of inserted words

  constructor() {
    this.root = new TrieNode(null);
    this.wordList = []; // Initialize an empty array to track word insertion order
  }

  // Method to insert a new word in Trie
  insert(word: string): void {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];
      if (!node.nextLetters[currentLetter]) {
        node.nextLetters[currentLetter] = new TrieNode(currentLetter);
        node.nextLetters[currentLetter].prevLetter = node;
      }
      node = node.nextLetters[currentLetter];

      if (i === word.length - 1) {
        node.isComplete = true;
        node.word = word; // Store the complete word at the end node
        this.wordList.push(word); // Add the word to the list to maintain insertion order
      }
    }
  }

  // Method to check if a word exists
  contains(word: string): boolean {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];
      let nextNode = node.nextLetters[currentLetter];
      if (nextNode) {
        node = nextNode;
      } else {
        return false;
      }
    }
    return node.isComplete;
  }

  // Method to find words with similar previous letters
  find(clueLetters: string): string[] {
    let node = this.root;
    for (let i = 0; i < clueLetters.length; i++) {
      const clueLetter = clueLetters[i];
      let nextNode = node.nextLetters[clueLetter];
      if (nextNode) {
        node = nextNode;
      } else {
        return [];
      }
    }

    const output: string[] = [];
    this.findAllWords(node, output);
    // Filter the wordList to return only those words that start with the clueLetters
    const filteredWords = this.wordList.filter((word) =>
      word.startsWith(clueLetters)
    );
    return filteredWords;
  }

  // Helper method that finds next possible words
  private findAllWords(node: TrieNode, arr: string[]): void {
    if (node.isComplete && node.word) {
      arr.push(node.word);
    }

    for (const nextLetter in node.nextLetters) {
      this.findAllWords(node.nextLetters[nextLetter], arr);
    }
  }
}

export default Trie;
