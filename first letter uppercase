//first letter of every word should be in upper case

function capitalize(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
}
const inputString = "hello world this is a sample string";
const capitalizedString = capitalize(inputString);
console.log(capitalizedString)


// Using build in methods

function capitalizedWord(sentence){
	return sentence.split(' ').map(word=>word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizedWord('my name is khan'))
