function firstNonRepeatedChar(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return null;
    }

    const charCount = {};
    
    // First pass: count character occurrences
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Second pass: find first character with count 1
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));