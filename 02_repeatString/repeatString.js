const repeatString = function(str, num) {
    let out = '';

    if (num < 0) {
        return 'ERROR'
    }

    for (let i=0; i < num; i++) {
        out += str;
    }

    return out;
};

// Do not edit below this line
module.exports = repeatString;
