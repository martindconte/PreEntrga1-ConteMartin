  const products = [
    {
      id: "hficF",
      marca: "Fender",
      modelo: "Jazz Bass",
      tipo: "Bajo",
      origen: "USA",
      descripcion: "Bajo Fender 014-7372-323 Jazz Bass Player Plus Activo Mn",
      imagen: "producto-fender-jazz-bass.webp",
      precio: 2110832.24,
      category: "bajo",
      stock: 2
    },
    {
      id: "Qxj7p",
      marca: "Fender",
      modelo: "Presicion",
      tipo: "Bajo",
      origen: "USA",
      descripcion: "Bajo Fender Deluxe Act Precision Bass Special Rw Okoume",
      imagen: "producto-fender-presicion.webp",
      precio: 1316570,
      category: "bajo",
      stock: 6
    },
    {
      id: "VVXgj",
      marca: "Fender",
      modelo: "Telecaster",
      tipo: "Guitarra",
      origen: "USA",
      descripcion: "Guitarra eléctrica Fender American Standard Stratocaster de aliso black con diapasón de palo de rosa",
      imagen: "producto-fender-telecaster.webp",
      precio: 2468423.67,
      category: "guitarra",
      stock: 2
    },
    {
      id: "lu3Mq",
      marca: "Focusrite",
      modelo: "Scarlet 2i2",
      tipo: "Placa de Audio",
      origen: "Inglaterra",
      descripcion: "Interfaz de audio Focusrite Scarlett 2i2 220V roja 3.ª gen",
      imagen: "producto-focusrite-scarlet-2i2.webp",
      precio: 207611.84,
      category: "placadeaudio",
      stock: 6
    },
    {
      id: "lrp3K",
      marca: "Gibson",
      modelo: "SG",
      tipo: "Guitarra",
      origen: "USA",
      descripcion: "Gibson Les Paul Standard 2018 Estados Unidos Les Paul - Diestro - Mojave burst - Arce/Caoba - Palo de rosa - Brillante",
      imagen: "producto-gibson-lespaul.webp",
      precio: 6645286.36,
      category: "guitarra",
      stock: 2
    },
    {
      id: "LPlN3",
      marca: "Squier",
      modelo: "Stratocaster",
      tipo: "Guitarra",
      origen: "Indonesia",
      descripcion: "Guitarra Eléctrica Fender Squier Bullet Stratocaster Hardtail Red Sparkle",
      imagen: "producto-squier-telecaster.webp",
      precio: 426887.1,
      category: "guitarra",
      stock: 8
    },
    {
      id: "xfGVo",
      marca: "Tama",
      modelo: "Imperial Star 5",
      tipo: "Bateria",
      origen: "Mexico",
      descripcion: "Bateria Completa Tama Imperial Star 5 Cuerpos Fierros",
      imagen: "producto-tama-imperial.webp",
      precio: 859625.87,
      category: "bateria",
      stock: 5
    },
    {
      id: "jrsss",
      marca: "Roland",
      modelo: "GO:Piano",
      tipo: "Teclado portátil",
      origen: "Japón",
      descripcion: "Teclado portátil con 61 teclas sensibles a la velocidad y 200 sonidos",
      imagen: "producto-roland-go-piano.webp",
      precio: 34892.28,
      category: "teclado",
      stock: 10
    },
    {
      id: "1hsqJ",
      marca: "Yamaha",
      modelo: "PSR-E373",
      tipo: "Teclado portátil",
      origen: "Japón",
      descripcion: "Teclado portátil con 61 teclas sensibles a la velocidad y 574 sonidos",
      imagen: "producto-yamaha-psr-e373.webp",
      precio: 46294.78,
      category: "teclado",
      stock: 15
    },
    {
      id: "TmWrV",
      marca: "Casio",
      modelo: "CT-X3000",
      tipo: "Teclado portátil",
      origen: "Japón",
      descripcion: "Teclado portátil con 61 teclas sensibles a la velocidad y 700 sonidos",
      imagen: "producto-casio-ct-x3000.webp",
      precio: 57629.98,
      category: "teclado",
      stock: 20
    },
    {
      id: "E1Bkc",
      marca: "Alesis",
      modelo: "V49",
      tipo: "Teclado e control MIDI",
      origen: "Estados Unidos",
      descripcion: "Teclado de control MIDI con 49 teclas sensibles a la velocidad",
      imagen: "producto-alesis-v49.webp",
      precio: 22829.88,
      category: "controladormidi",
      stock: 5
    },
    {
      id: "thcms",
      marca: "Native Instruments",
      modelo: "Komplete Kontrol A25",
      tipo: "Teclado e control MIDI",
      origen: "Alemania",
      descripcion: "Teclado de control MIDI con 25 teclas sensibles a la velocidad y pantalla táctil",
      imagen: "producto-native-instruments-komplete-kontrol-a25.webp",
      precio: 45861.88,
      category: "controladormidi",
      stock: 10
    },
    {
      id: "OIa41",
      marca: "Arturia",
      modelo: "KeyLab Essential 49",
      tipo: "Teclado e control MIDI",
      origen: "Francia",
      descripcion: "Teclado de control MIDI con 49 teclas sensibles a la velocidad y controles dedicados",
      imagen: "producto-arturia-keylab-essential-49.webp",
      precio: 28770.78,
      category: "controladormidi",
      stock: 15
    },
    {
      id: "HEq6x",
      marca: "Yamaha",
      modelo: "HS5",
      tipo: "Altavocs de estudio",
      origen: "Japón",
      descripcion: "Altavoces de estudio de 2 vías con woofer de 5 pulgadas y tweeter de 1 pulgada",
      imagen: "producto-yamaha-hs5.webp",
      precio: 299990,
      category: "monitorEstudio",
      stock: 20
    },
    {
      id: "l5nFM",
      marca: "KRK",
      modelo: "Rokit 5 G4",
      tipo: "Altavocs de estudio",
      origen: "Estados Unidos",
      descripcion: "Altavoces de estudio de 2 vías con woofer de 5 pulgadas y tweeter de 1 pulgada",
      imagen: "producto-krk-rokit-5-g4.webp",
      precio: 365847.25,
      category: "monitorEstudio",
      stock: 6
    },
    {
      id: "UNb1u",
      marca: "JBL",
      modelo: "305P MKII",
      tipo: "Altavocs de estudio",
      origen: "Estados Unidos",
      descripcion: "Altavoces de estudio de 2 vías con woofer de 5 pulgadas y tweeter de 1 pulgada",
      imagen: "producto-jbl-305p-mkii.webp",
      precio: 399990,
      category: "monitorEstudio",
      stock: 15
    },
    {
      id: "3eMtC",
      marca: "PreSonus",
      modelo: "Eris E3.5",
      tipo: "Altavocs de estudio",
      origen: "Estados Unidos",
      descripcion: "Altavoces de estudio de 2 vías con woofer de 3,5 pulgadas y tweeter de 1 pulgada",
      imagen: "producto-presonus-eris-e3.5.webp",
      precio: 99990,
      category: "monitorEstudio",
      stock: 20
    },
    {
      id: "bunkt",
      marca: "Shure",
      modelo: "SM58",
      tipo: "Micrófono dinámico",
      origen: "Estados Unidos",
      descripcion: "Micrófono dinámico cardioide de mano",
      imagen: "producto-shure-sm58.webp",
      precio: 129990,
      category: "microfono",
      stock: 5
    },
    {
      id: "w3C5w",
      marca: "AKG",
      modelo: "P220",
      tipo: "Micrófono condensador",
      origen: "Austria",
      descripcion: "Micrófono condensador cardioide de mano",
      imagen: "producto-akg-p220.webp",
      precio: 199990,
      category: "microfono",
      stock: 10
    },
    {
      id: "BFH2Q",
      marca: "Rode",
      modelo: "NT1-A",
      tipo: "Micrófono condensador",
      origen: "Australia",
      descripcion: "Micrófono condensador cardioide de condensador",
      imagen: "producto-rode-nt1-a.webp",
      precio: 299990,
      category: "microfono",
      stock: 15
    },
    {
      id: "aNExL",
      marca: "Zoom",
      modelo: "H2n",
      tipo: "Grabadora multipista",
      origen: "Japón",
      descripcion: "Grabadora multipista portátil con 4 micrófonos internos",
      imagen: "producto-zoom-h2n.webp",
      precio: 299990,
      category: "grabadora",
      stock: 20
    },
    {
      id: "q5jIM",
      marca: "Tascam",
      modelo: "DR-05X",
      tipo: "Grabadora multipista",
      origen: "Japón",
      descripcion: "Grabadora multipista portátil con 2 micrófonos internos",
      imagen: "producto-tascam-dr-05x.webp",
      precio: 149990,
      category: "grabadora",
      stock: 10
    },
    {
      id: "bBr5O",
      marca: "Roland",
      modelo: "GO:Mixer",
      tipo: "Mesa de mezclas",
      origen: "Japón",
      descripcion: "Mesa de mezclas portátil con 2 canales",
      imagen: "producto-roland-go-mixer.webp",
      precio: 99990,
      category: "grabadora",
      stock: 15
    },
    {
      id: "AiA44",
      marca: "Mackie",
      modelo: "Mix8",
      tipo: "Mesa de mezclas",
      origen: "Estados Unidos",
      descripcion: "Mesa de mezclas compacta con 8 canales",
      imagen: "producto-mackie-mix8.webp",
      precio: 199990,
      category: "mezcladora",
      stock: 10
    },
    {
      id: "b1YQ3",
      marca: "Yamaha",
      modelo: "MG10XU",
      tipo: "Mesa de mezclas",
      origen: "Japón",
      descripcion: "Mesa de mezclas compacta con 10 canales",
      imagen: "producto-yamaha-mg10xu.webp",
      precio: 299990,
      category: "mezcladora",
      stock: 15
    },
    {
      id: "VaZpR",
      marca: "Fender",
      modelo: "Mustang GT40",
      tipo: "Amplificadr de guitarra",
      origen: "Estados Unidos",
      descripcion: "Amplificador de guitarra combo con 40 vatios",
      imagen: "producto-fender-mustang-gt40.jpg",
      precio: 399990,
      category: "amplificador",
      stock: 20
    }
  ]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export const getProductsById = (productId) => {
  return new Promise ((resolve) => {
    setTimeout (() => {
      resolve(products.find(prod => prod.id === productId))
    }, 2000)
  })
}

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === productCategory))
    }, 2000);
  });
}