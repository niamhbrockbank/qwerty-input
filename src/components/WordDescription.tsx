import { hasAVowel } from "../utils/hasAVowel"
import hasUpperCase from "../utils/hasUpperCase"
import hasLowerCase from "../utils/hasLowerCase"

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastSevenCharacters = wordToDescribe.length > 7;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const containsSpecialCharacter = wordToDescribe.includes('!') || wordToDescribe.includes('?') || wordToDescribe.includes('$')
  const containsUpperCase = hasUpperCase(wordToDescribe)
  const containsLowerCase = hasLowerCase(wordToDescribe)
  const isInputStrong = containsSpecialCharacter && hasAtLeastSevenCharacters && containsLowerCase && containsUpperCase

  return (
    <ul>
      {hasAtLeastSevenCharacters && <li>Has at least seven characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {containsSpecialCharacter && <li>Contains special character</li>}
      {isInputStrong && <li>Impressively strong input!</li>}
    </ul>
  )
}

export default WordDescription