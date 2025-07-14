let str = "viiiiiii shakk llllllll adnnmdd dnnnd";
let count = {};
let maxchar =0;

for (let i = 0; i < str.length; i++) {
    
    if (count[str[i]]) {
        count[str[i]]++;
    } 
    else {
        count[str[i]] = 1;
    }

    if(maxchar >count){
        console.log(maxchar);
    }
    else(
        console.log(count(str[i]))
    )
}

for (let key in count) {
    console.log(key + " = " + count[key]);
}


