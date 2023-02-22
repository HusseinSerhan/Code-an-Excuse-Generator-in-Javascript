let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function onLoad(who_array, action_array, what_array, when_array) {
    let randomIndex = Math.floor(Math.random() * who_array.length);
    let randomIndex2 = Math.floor(Math.random() * action_array.length);
    let randomIndex3 = Math.floor(Math.random() * what_array.length);
    let randomIndex4 = Math.floor(Math.random() * when_array.length);

    return who_array[randomIndex] + " " + action_array[randomIndex2] + " " + what_array[randomIndex3] + " " + when_array[randomIndex4]
}

console.log(onLoad(who, action, what, when))