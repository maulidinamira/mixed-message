// create function to select random element from array
function randomQuote(quote){
    return Math.floor(Math.random() * quote)
}

const collectiveQuote = {
    firstQuote: ['goals', 'ambitions', 'spirits'],
    secondQuote: ['is your objective',  'is your fuel', 'is in you'],
    finalQuote: ['go get it', 'keep going', 'this is for you']
}

// create empty array to store the quote
let yourQuote = []




for(let quotes in collectiveQuote){
    let optionIdx = randomQuote(collectiveQuote[quotes].length)

    switch (quotes) {
        case 'firstQuote':
            yourQuote.push(`first quote is : ${collectiveQuote[quotes][optionIdx]}`) 
            break;
        case 'secondQuote':
            yourQuote.push(`second quote is : ${collectiveQuote[quotes][optionIdx]}`) 
            break;
        case 'finalQuote':
            yourQuote.push(`final quote is : ${collectiveQuote[quotes][optionIdx]}`) 
            break;
        default:
            yourQuote.push('Try again later!') 
            break;
    }
}

// create a format quote
function formatQuotes(text) {
    const format = yourQuote.join('\n')
    console.log(format)
    
}

formatQuotes(yourQuote)