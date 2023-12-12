const car = {
    brand:"Ford",
    model:"Musang",
};

const car2 = {
    brand: "Rolls Royce",
    model: "Phantom",
};

// WAY - 1
// module.exports = car;

// WAY - 2
// exports.data = car; // if only one obj to be exported
// exports.data = {car, car2};

//WAY - 3
exports.car = {
    brand:"Ford",
    model:"Musang",
};

exports.car2 = {
    brand: "Rolls Royce",
    model: "Phantom",
};
//No need for exports statement separately
