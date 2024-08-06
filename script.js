function isPalindrome(word){
    if(typeof word === 'string'){
        let reverseWord = word.trim().toLowerCase().split('').reverse().join('');
        if(reverseWord === word.toLowerCase()){
            console.log('yes')
            return true
        }else{
            console.log('no')
            return false
        }
    }else{
        console.log('not a string')
    }
}

isPalindrome('Racecar')
isPalindrome('string')
isPalindrome(24)