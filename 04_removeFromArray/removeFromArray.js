const removeFromArray = function() {

    let returner = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        returner = returner.filter(e => e !== arguments[i]);
    }

    return returner;
    
};

// Do not edit below this line
module.exports = removeFromArray;
