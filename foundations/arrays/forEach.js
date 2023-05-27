let cacadoresDeOni = [
    {name: "Tanjiro", age: 12}, 
    {name: "Inosuke"}, 
    {name: "Cara de Porco"}
];




let sortedHunters = cacadoresDeOni.sort((a, b) => {
    return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;
})

console.log(sortedHunters);