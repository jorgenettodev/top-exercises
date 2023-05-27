let cacadoresDeOni = [
    {name: "Tanjiro", age: 12}, 
    {name: "Inosuke"}, 
    {name: "Cara de Porco"}
];


let Tanjiro = cacadoresDeOni.find((cacador => cacador["name"] === "Tanjiro"));


cacadoresDeOni.map(cacador => console.log(cacador));
