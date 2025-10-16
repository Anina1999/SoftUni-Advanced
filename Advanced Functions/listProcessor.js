function listProcessor(input) {
    let innerCollection = [];

    const commands = {
        add: (text) => innerCollection.push(text),
        remove: (text) => innerCollection = innerCollection.filter(x => x !== text),
        print: () => console.log(innerCollection.join(','))
    };

    for (let comm of input) {
        let [command, text] = comm.split(' ');
        commands[command](text);
    }
}

// listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

 


