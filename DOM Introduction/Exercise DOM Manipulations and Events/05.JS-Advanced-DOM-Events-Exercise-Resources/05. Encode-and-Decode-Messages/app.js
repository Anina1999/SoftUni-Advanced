function encodeAndDecodeMessages() {
    const firstDiv = document.getElementById("main").children[0];
    const [, senderText, senderBtn] = firstDiv.children;

    const secondDiv = document.getElementById("main").children[1];
    const [, recieverText, recieverBtn] = secondDiv.children;

    senderBtn.addEventListener('click', onEncodeAndSend);

    // this func should: 
    //get input and encode it by getting ascii values
    // add 1 to all ch values
    // display to recieverText with updated ch
    //clear recieverText
    function onEncodeAndSend(e) {
        const data = senderText.value;
        const asciiValues = Array.from(data).map(ch => ch.charCodeAt(0));
        const incrementValues = asciiValues.map(c => c + 1);
        const encodedMessage = incrementValues.map(char => String.fromCharCode(char)).join('');
        recieverText.value = encodedMessage;
        senderText.value = '';
    }

    recieverBtn.addEventListener('click', onDecodeAndRead);

    // convert recieverText.value to ascii
    // subtract 1 from each value
    // update recieverText.value with updated ascii (the original message from sender)
    function onDecodeAndRead(e) {
        const data = recieverText.value;
        const asciiValues = Array.from(data).map(ch => ch.charCodeAt(0));
        const decrementValues = asciiValues.map(c => c - 1);
        const decodedMessage = decrementValues.map(char => String.fromCharCode(char)).join('');
        recieverText.value = decodedMessage;
    }
}