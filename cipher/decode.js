const fs = require('fs');
const readline = require('readline');

async function decodeFile(shift) {

    const fileStream = fs.createReadStream('challenge.txt');

    const rl = readline.createInterface({
        input: fileStream,
        cflfDelay: Infinity 
    });

    /* 
       Keyed Caesar
       Start with an ALPHABET 
       For each character from the KEY:
          You want to shift the alphabet left
          Insert Key character
          pop char out of the ALPHABET, shifting the remainder of the alphabet left
        ( eg.  Key="HEY" -> ALphabet becomes "HEYABCDFGIJKLMNOPQRSTUVWXZ" ---> HEY is transposed from Alphabet to beginning of array) )        
    */


    var decodedSentences = [];   // Populate this array with word arrays

    for await (const line of rl) {   // Go through the challenge file line by line
        
        // Create a Decoder Array
        var decoder=[];

        // Push in standard alphabet character codes (lowercase)
        for (var i = 0; i < 26; i++) {
            decoder.push(String.fromCharCode(97+i));
        }

        // Break up words so we don't mess with spaces detection
        var words = line.split(" ");

        // Convert uppercase to lowercase to make things easier
        var key = words[0].toLowerCase();

        // Prime the Key Prefix Array
        var prefix = [];

        // Walk through the Keyword letter by letter
        for(var i=0; i<key.length; i++) {

            
            if ( prefix.find( (e)=>e==key[i] ) === undefined ) { // Only add unique characters not yet added
                prefix.push(key[i]);      // Add key chars to prefix
                decoder.splice(           // Cut the key letter out of the alphabet entirely
                    decoder.findIndex(    // Find the letters' position in the array 
                        (x) => x==key[i]  // Comparison, must be same letter exactly
                    ), 
                    1                     // 1=Delete 1 character from the array
                );   
            }   // Condition complete

        }  // Move onto the next character in the key or continue ahead if done.
        
        var codex = prefix.concat(decoder);  // Create our final codex array for substitutions by 
                                             // prefixing the remaining decoder array with the key
                                             //  KEY+REST_OF_ALPHABET
        
        // Codex Defined, lets walk thru words and do character lookup and substitution
        var decodedWords=[ words[0] ];     // We will add the Key as the first word without decryption required
        for (var j=1; j<words.length; j++) {    // Iterate through the rest of the words
            var wordOut="";                     // Initialize decrypted word output string
            var thisword=words[j].toLowerCase();  // Convert all characters to lower-case
            for (var k=0; k<thisword.length; k++ ) {    // Iterate over each letter in the encrypted word
                var c_CHAR=thisword[k];                 // Take the individual character one at a time 
                var o_CHAR="";                          // Initialize the Decrypted Output Character string
                var i_LOOK= c_CHAR.charCodeAt(0) - 97;  // Determine the character makeup by alphabetical position index
                
                // Only Sub Chars within 0-26, anything else is a symbol and should be left alone
                if(i_LOOK>=0 && i_LOOK<=26) {
                    // Run the lookup
                    o_CHAR=String.fromCharCode(    // Generate a new character using a Character Code
                        97 + parseInt(codex.findIndex( (x)=>x==c_CHAR ))   // 97=a -> add the position the lookup char
                    );                                                     // is found in the codex to get the output letter
                    
                } else {
                    // If the Char Code isn't in the alphabet, it's out of bounds, pass it through as-is
                    o_CHAR=thisword[k];
                }
                wordOut+=o_CHAR;    // Add the decrypted output character to the Word to be outputted.
            }   // Done decrypting this WORD, loop or move on if done.

            decodedWords.push(wordOut);   // Add our decoded word to the words list for this key/sentence.

        }   // Loop to next word or move on to next key/sentence

        // Add our decrypted sentences to the the final output response
        // Include the Codex used for each challenge line
        decodedSentences.push({ 'Codex': codex.join(""), 'sentence': decodedWords.join(" ") });   
    }

    // Generate a table
    console.table(decodedSentences);
}

decodeFile();