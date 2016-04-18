var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// using the array 'animals' print out the following:

// rat
// cat
// butterfly
// marmot

for (var i=0; i<animals.length-1;i++) {
    console.log(animals[i]);
}

// rat
// butterfly
// ocelot

for (var i=0; i<animals.length; i+=2) {
    console.log(animals[i]);
}

// ocelot
// marmot
// butterfly
// cat
// rat

for (var i=animals.length-1; i>=0; i--) {
    console.log(animals[i]);
}

// rat
// cat
// cat
// butterfly
// butterfly
// marmot
// marmot
// ocelot

for (var i=0; i<animals.length; i++) {
    if(i>0 && i<animals.length-1) {
        console.log(animals[i]);
        console.log(animals[i]);
    }
    else {
        console.log(animals[i]);
    }
}
