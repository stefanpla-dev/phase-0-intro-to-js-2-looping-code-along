// Code your solutions in this file
const besties = ["Nick", "Drew", "Kate"];

function writeCards(besties){
    const thankYouMessages = [];

    for (let i=0; i <besties.length; i++){
        const thankYouMessage = `Thank you, ${besties[i]}, for the wonderful surprise gift!`;
        thankYouMessages.push(thankYouMessage);
    }
    return thankYouMessages;
}

function countDown(number){
    let i = number;
    while (i>=0) {
        console.log(i);
        i--;
    }
}
// Making small change to see if resaving/resubmitting this to Canvas solves the problem.