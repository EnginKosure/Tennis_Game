/*Extend the dictionary with a method,
that returns a list of words matching a pattern.
This pattern may contain letters (lowercase) and placeholders ("?").
A placeholder stands for exactly one arbitrary letter.
*/

function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.getMatchingWords = function (pattern) {
    //(method) Array<any>.every(callbackfn: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean
    const test = ([...word]) => word.every((e, i) =>
        (e === pattern[i] || pattern[i] === '?') ? true : false);
    const result = this.words.filter(w => test(w) && w.length === pattern.length)
    console.log(result);
    return result
}

const fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
fruits.getMatchingWords('lemon');     // must return []
fruits.getMatchingWords('cherr??');   // must return []
fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']