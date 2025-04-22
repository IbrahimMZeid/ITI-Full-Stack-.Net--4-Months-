const handler = {
    set(target, prop, value) {
        if (prop === 'name')
        {
            if (value.length == 7)
                target[prop] = value;
            else
                throw new Error("Name must be 7 characters long");
        }
        else if (prop === 'age') {
            if (!isNaN(value) && value >= 25 && value <= 60)
                target[prop] = value;
            else
                throw new Error('Age must be between 25 and 60');
        }
        else if (prop === 'address') {
            if (isNaN(value))
                target[prop] = value;
            else
                throw new Error('Address cannot be a number');
        }
    }
}
let proxyObj = new Proxy({}, handler);
proxyObj.name = 'Mohamed';
proxyObj.age = 30;
proxyObj.address = 'Alex';
console.log(proxyObj);
// proxyObj.name = 'Aya';
// proxyObj.age = 18;
// proxyObj.address = '123';
