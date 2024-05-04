
let data = [
    {
        id: 1,
        nombre: "AT-walker",
        categoria: "Star Wars",
        estado: "en stock",
        tipo: "remera",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 50,
        colores: ["Gris", "Azul"],
        imagen: "./img/at-walker-r.webp",
        creado: ""
    },
    {
        id: 2,
        nombre: "Binary computer",
        categoria: "Electronic",
        estado: "sin stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 0,
        colores: ["Gris", "Azul", "Negro"],
        imagen: "./img/binary-computer-c.webp",
        creado: ""
    },

    {
        id: 3,
        nombre: "Electronic components",
        categoria: "Electronic",
        estado: "en stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 75,
        colores: ["Verde", "Azul"],
        imagen: "./img/electronic-components-c.webp",
        creado: ""
    },
    {
        id: 4,
        nombre: "Hello Darkness",
        categoria: "Casual",
        estado: "en stock",
        tipo: "remera",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 47,
        colores: ["Negro"],
        imagen: "./img/hello-darkness-r.webp",
        creado: ""
    },
    {
        id: 5,
        nombre: "Rabbit or duck",
        categoria: "Funny",
        estado: "en stock",
        tipo: "remera",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 18,
        colores: ["Negro", "Azul"],
        imagen: "./img/rabbit-or-duck-r.webp",
        creado: ""
    },
    {
        id: 6,
        nombre: "Intelligence",
        categoria: "Sci-Phi",
        estado: "en stock",
        tipo: "remera",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 16,
        colores: ["Gris", "Negro"],
        imagen: "./img/intelligence-r.webp",
        creado: ""
    },

    {
        id: 7,
        nombre: "Walkers Hawaiian",
        categoria: "Star Wars",
        estado: "en stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 12,
        colores: ["Azul"],
        imagen: "./img/atwalker-hawaiian-c.webp",
        creado: ""
    },
    {
        id: 8,
        nombre: "Capibara",
        categoria: "Animals",
        estado: "en stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 4,
        colores: ["Gris", "Azul"],
        imagen: "./img/capybara-c.webp",
        creado: ""
    },
    {
        id: 9,
        nombre: "Circuit Board",
        categoria: "Electronic",
        estado: "en stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 15,
        colores: ["Verde"],
        imagen: "./img/circuit-board-green2-c.webp",
        creado: ""
    },
    {
        id: 10,
        nombre: "Rabbit Hands Shadow",
        categoria: "Funny",
        estado: "en stock",
        tipo: "remera",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 7,
        colores: ["Azul"],
        imagen: "./img/funny-rabbit-hand-shadow-r.webp",
        creado: ""
    },
    {
        id: 11,
        nombre: "Lunar Surface",
        categoria: "Astronomy",
        estado: "en stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 3,
        colores: ["Gris"],
        imagen: "./img/lunar-surface-c.jpg",
        creado: ""
    },
    {
        id: 12,
        nombre: "Nebula",
        categoria: "Astronomy",
        estado: "en stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 6,
        imagen: "./img/nebula-outer-space-c.webp",
        creado: ""
    },
    {
        id: 13,
        nombre: "Six Instruments",
        categoria: "Aviation",
        estado: "en stock",
        tipo: "remera",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 6,
        imagen: "./img/six-instruments-r.jpg",
        creado: ""
    },
    {
        id: 14,
        nombre: "Octopus & Jellyfish",
        categoria: "Ocean",
        estado: "en stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 3,
        imagen: "./img/octopus-jellyfish-c.webp",
        creado: ""
    },
    {
        id: 15,
        nombre: "UFO'S",
        categoria: "Sci-Phi",
        estado: "sin stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 0,
        imagen: "./img/ufos-blueprint-c.webp",
        creado: ""
    },
    {
        id: 16,
        nombre: "The Matrix",
        categoria: "Sci-Phi",
        estado: "en stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 16,
        colores: ["Verde", "Negro"],
        imagen: "./img/the-matrix-c.webp",
        creado: ""
    },
    {
        id: 17,
        nombre: "No Signal",
        categoria: "Sci-Phi",
        estado: "en stock",
        tipo: "remera",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 12,
        colores: ["Azul"],
        imagen: "./img/no-signal-r.webp ",
        creado: ""
    },
    {
        id: 18,
        nombre: "Tie Fighter at Sunset",
        categoria: "Star Wars",
        estado: "en stock",
        tipo: "camisa",
        talles: ['S', 'M', 'L', 'XL'],
        stock: 4,
        colores: ["Gris", "Azul"],
        imagen: "./img/tie-fighter-sunset-r.webp",
        creado: ""
    }
];


/*
 let formatDate = (date) => {
    const sDOW = ""+ DOW( date.getDay() );
    const year = ""+ date.getFullYear();
    const month = String( date.getMonth() + 1).padStart(2, '0');
    const day   = String( date.getDate()).padStart(2, '0');
    const hour  = String( date.getHours()).padStart(2, '0');
    const mins  = String( date.getMinutes()).padStart(2, '0');
    let localDate = `${sDOW} ${day}/${month}/${year} - ${hour}:${mins}`;
//    let myDate = sDOW + "  " + day +"/"+ month +"/"+ year +" - "+ hour +":"+ mins ;
  return myDate
 };
*/

 function formatFecha( date) 
 {
    const sDOW = ""+ DOW( date.getDay() );
    const year = ""+ date.getFullYear();
    const month = String( date.getMonth() + 1).padStart(2, '0');
    const day   = String( date.getDate()).padStart(2, '0');
    const hour  = String( date.getHours()).padStart(2, '0');
    const mins  = String( date.getMinutes()).padStart(2, '0');
 //   let myDate = `${sDOW} ${day}/${month}/${year} - ${hour}:${mins}`;
    let myDate = sDOW + "  " + day +"/"+ month +"/"+ year +" - "+ hour +":"+ mins ;
  return myDate;
 }

//-----------------------------
 function DOW( nDay, base =0 ) {
  let sResult= "";
 const aDay=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

  if( base == 1)
      nDay++;

  if( nDay >= 0  || nDay < 7)
      sResult = aDay[ nDay];
  return sResult;
 }


//document.querySelector("#version").innerHTML = formatFecha( dToday);





//---- arma las cards 
 cad = ``;

function drawCards()
{
  for( let item of data) {

    ini = `<div class="tarjeta">
     <img src=${item.imagen} alt=${item.nombre}>
     <div class="cuerpo">
        <h4>${item.nombre}</h4> `;
 
     med = (item.stock < 1) ? `<h5 class='red'>${item.estado}</h5> ` :`<h5>${item.estado}</h5>` +  
     `<h5 style="text-align:left;"> #${(item.id)+1500}</h5> ` ;
    end = `</div> </div> `;
    cad = cad + ini + med + end;
  }
 return cad;
}

//document.querySelector(".contenedor").innerHTML = cad;



// document.getElementById("fotos") = cad;
// document.querySelector("#fotos").innerHTML = cad;

/*
const myJSON = JSON.stringify(data);
document.getElementById("demo").innerHTML = myJSON;
*/


