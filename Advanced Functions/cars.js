function cars(arr) {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' ');
        let command = line[0];

    const commands = {
        create(name, inherit, parent) {
            if (inherit === 'inherit') {
                obj[name] = Object.create(obj[parent]);
            } else {
                obj[name] = {};
            }
        },
        set(name, key, value) {
            obj[name][key] = value;
        },
        print(name) {
            const result = [];
            for (let key in obj[name]) {
                result.push(`${key}:${obj[name][key]}`);
            }
            console.log(result.join(','));
        }
    };

        commands[command].bind(commands)(...line.slice(1));
    }
}

// cars(['create c1',

// 'create c2 inherit c1',

// 'set c1 color red',

// 'set c2 model new',

// 'print c1',

// 'print c2']);