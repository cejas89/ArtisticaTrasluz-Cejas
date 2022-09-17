
const productos = [
    {
        id : "01",
        img: `https://picsum.photos/200/300?random=1`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'blue',
        tittle: "Acrilico Blue",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'china',
        categoria: 'libreria',
        subcategoria: 'pinturas',
        stock: '250'
    },

    {
        id : '02',
        img: `https://picsum.photos/200/300?random=2`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'red',
        tittle: "Acrilico Red",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '150',
        origen: 'eeuu',
        categoria: 'artistica',
        subcategoria: 'pinturas',
        stock: '150'
    },

    {
        id : '03',
        img: `https://picsum.photos/200/300?random=3`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'green',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'eeuu',
        categoria: 'libreria',
        subcategoria: 'pinturas',
        stock: '100'
    },

    {
        id : '04',
        img: `https://picsum.photos/200/300?random=4`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'pink',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'brasil',
        categoria: 'libreria',
        subcategoria: 'pinturas',
        stock: '50'
    },

    {
        id : '05',
        img: `https://picsum.photos/200/300?random=5`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'blue',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'china',
        categoria: 'libreria',
        subcategoria: 'pinturas',
        stock: '250'
    },

    {
        id : '06',
        img: `https://picsum.photos/200/300?random=6`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'red',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'eeuu',
        categoria: 'libreria',
        subcategoria: 'pinturas',
        stock: '150'
    },

    {
        id : '07',
        img: `https://picsum.photos/200/300?random=7`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'green',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'eeuu',
        categoria: 'libreria',
        subcategoria: 'pinturas',
        stock: '100'
    },

    {
        id : '08',
        img: `https://picsum.photos/200/300?random=8`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'pink',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'brasil',
        categoria: 'libreria',
        subcategoria: 'pinturas',
        stock: '50'
    },

    {
        id : '09',
        img: `https://picsum.photos/200/300?random=9`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'blue',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'china',
        categoria: 'artistica',
        subcategoria: 'pinturas',
        stock: '250'
    },

    {
        id : '10',
        img: `https://picsum.photos/200/300?random=10`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'red',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'eeuu',
        categoria: 'artistica',
        subcategoria: 'pinturas',
        stock: '150'
    },

    {
        id : '11',
        img: `https://picsum.photos/200/300?random=11`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'green',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'eeuu',
        categoria: 'libreria',
        subcategoria: 'pinturas',
        stock: '100'
    },

    {
        id : '12',
        img: `https://picsum.photos/200/300?random=12`,
        name: 'ACRÍLICOS DECORATIVOS',
        color: 'pink',
        tittle: "Acrilico",
        description: 'Producto formulado con emulsiones acrílicas y pigmentos puros. Sus colores son intensos, luminosos, resistente a la luz y mezclables entre sí. Por su viscosidad y alto poder cubritivo pueden ser aplicados sobre todo tipo de superficies (madera, yeso, bizcocho cerámico, papel, cartón). Diluído con agua y medium retardador AD, pueden ser utilizados en técnicas de acuarela. Se aplica a pincel sobre superficies previamente selladas.',
        price: '200',
        origen: 'brasil',
        categoria: 'artistica',
        subcategoria: 'pinturas',
        stock: '50'
    }
]

export default productos;