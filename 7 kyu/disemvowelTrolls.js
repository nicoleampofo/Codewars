// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// params: string array
// returns: new string array without vowels
// example: "this is a string" => "ths s strng"
// loop through the array
// conditional: if a vowel, cut it out and continue on string

function noVowels(str){
    console.log(str.replace(/[aeiou]/gi, ''))
}
noVowels("This is a string")