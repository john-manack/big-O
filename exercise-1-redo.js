'use strict';

const nemo = ['marlin', 'dory', 'nemo', 'nigel'];

const findNemo = (array1) => {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === 'nemo') {
            console.log('YOU FOUND NEMO')
        } else {
            console.log('Sorry, no nemo')
        }
    };
};

findNemo(nemo);