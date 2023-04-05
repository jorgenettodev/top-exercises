let answer = parseInt(prompt('please, enter the number you would like the FuzzBuzz up to: '));

for(let i = 1; i <= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FUZZ-BUZZ');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    

}