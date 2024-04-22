async function main() {
    const str = "bleh, went to. \" cats are cool \". hahaha"
    const wordArray = str.split(/[,\s."]+/);
    for(let i = 0; i < wordArray.length; ++i)
        console.log('word: ' , wordArray[i]);
    console.log('finished executing');
}

main();