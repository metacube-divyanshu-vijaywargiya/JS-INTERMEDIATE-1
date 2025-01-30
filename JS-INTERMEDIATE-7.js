function text_truncate(str, length = str.length, ellipsis = '...') {
    // if string length is less than the given length then return whole string as it is
    if (str.length <= length) {
        return str;
    }

    // Now , Truncate the string till the given length and append the ellipsis or specified characters if given
    return str.substring(0, length - ellipsis.length) + ellipsis;
}

// Testing
console.log(text_truncate('We are doing JS string exercises.')); 
console.log(text_truncate('We are doing JS string exercises.', 19));
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
