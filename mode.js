const nums = [1,2,2,3,3,3,4,6];

function getMode(array){
    // count the amoun tof occurences of each number

    // create object
    const obj = {}
    // loop over array
    array.forEach(number => {
        // for each number in array,
        // if it doesn't aleady exist as a jet ib the
        // object, create one and set its value to 1
        if(!obj(number)) {
            obj(number) = 1;
        } else{
            //if it already exists as key on the object,
            // increment is corresponding value.
            obj[number] += 1;
        }
    });

    // return object key wih highest value.
    let highestValue = 0;
    let highestValueKey = -Infinity;

    for (let key in obj) {
        const value = obj[key];
        if(value>highestValue){
            highestValue = value;
            highestValueKey = key
        }
    }


}

getMode(nums)