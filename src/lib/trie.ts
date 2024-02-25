class TrieNode {
  letter: string | null;
  prevLetter: TrieNode | null;
  nextLetters: { [key: string]: TrieNode };
  isComplete: boolean;

  constructor(letter: string | null) {
    this.letter = letter;
    this.prevLetter = null;
    this.nextLetters = {};
    this.isComplete = false;
  }

  // Method to iterate through nodes to get word prediction
  getWord(): string {
    let node: TrieNode | null = this;
    const wordLetters: string[] = [];
    while (node && node.prevLetter) {
      if (node.letter) {
        wordLetters.unshift(node.letter);
      }
      node = node.prevLetter;
    }
    return wordLetters.join("");
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode(null);
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
    const output: string[] = [];
    for (let i = 0; i < clueLetters.length; i++) {
      const clueLetter = clueLetters[i];
      let nextNode = node.nextLetters[clueLetter];
      if (nextNode) {
        node = nextNode;
      } else {
        return output;
      }
    }

    this.findAllWords(node, output);
    return output;
  }

  // Helper method that finds next possible words
  private findAllWords(node: TrieNode, arr: string[]): void {
    if (node.isComplete) {
      arr.unshift(node.getWord());
    }

    for (const nextLetter in node.nextLetters) {
      this.findAllWords(node.nextLetters[nextLetter], arr);
    }
  }
}

export default Trie;
