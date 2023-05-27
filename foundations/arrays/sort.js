let arr = [ "w", "c", "d", "A", "b" ];

arr.sort((a,b ) => {
    console.log(a, " ", b);
    return a.localeCompare(b);
})

console.log(arr);