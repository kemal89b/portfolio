// Create a Map with 10 key-value pairs for translation (English -> Turkish)
const translator = new Map([
  ['hello', 'selam'],
  ['goodbye', 'gulegule'],
  ['please', 'lutfen'],
  ['thank you', 'tessekur ederim'],
  ['yes', 'evet'],
  ['no', 'hayir'],
  ['dog', 'kopek'],
  ['cat', 'kedi'],
  ['apple', 'elma'],
  ['book', 'kitap']
]);

// Ask user for the word they want to translate
const wordToTranslate = prompt("Enter an English word to translate into Turkish:").toLowerCase();

// Check if the word exists in the translator map and output the translation
if (translator.has(wordToTranslate)) {
  alert(`The translation of "${wordToTranslate}" is "${translator.get(wordToTranslate)}"`);
} else {
  alert(`Sorry, the word "${wordToTranslate}" does not exist.`);
}