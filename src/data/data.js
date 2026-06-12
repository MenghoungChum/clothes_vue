import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";

import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"

import Long_Sleeve_Fitted_Shirt_white1 from '../assets/Long_Sleeve_Fitted_Shirt_white1.jpg'
import Long_Sleeve_Fitted_Shirt_white2 from '../assets/Long_Sleeve_Fitted_Shirt_white2.jpg'
import Long_Sleeve_Fitted_Shirt_white3 from '../assets/Long_Sleeve_Fitted_Shirt_white3.jpg'
import Long_Sleeve_Fitted_Shirt_white4 from '../assets/Long_Sleeve_Fitted_Shirt_white4.jpg'
import Long_Sleeve_Fitted_Shirt_white5 from '../assets/Long_Sleeve_Fitted_Shirt_white5.jpg'
import Long_Sleeve_Fitted_Shirt_white6 from '../assets/Long_Sleeve_Fitted_Shirt_white6.jpg'
import Short_Sleeve_Shirt1 from "../assets/Short_Sleeve_Shirt1.jpg"
import Short_Sleeve_Shirt2  from "../assets/Short_Sleeve_Shirt2.jpg"
import Short_Sleeve_Shirt3 from "../assets/Short_Sleeve_Shirt3.jpg"
import Short_Sleeve_Shirt4 from "../assets/Short_Sleeve_Shirt4.jpg"
import Short_Sleeve_Shirt5 from "../assets/Short_Sleeve_Shirt5.jpg"
import Laced_Top1 from '../assets/Laced_Top1.jpg'
import Laced_Top2 from '../assets/Laced_Top2.jpg'
import Laced_Top3 from '../assets/Laced_Top3.jpg'
import Laced_Top4 from '../assets/Laced_Top4.jpg'
import Laced_Top5 from '../assets/Laced_Top5.jpg'
import Loose_Fitted_Shirt1 from '../assets/Loose_Fitted_Shirt1.jpg'
import Loose_Fitted_Shirt2 from '../assets/Loose_Fitted_Shirt2.jpg'
import Loose_Fitted_Shirt3 from '../assets/Loose_Fitted_Shirt3.jpg'
import Loose_Fitted_Shirt4 from '../assets/Loose_Fitted_Shirt4.jpg'
import Loose_Fitted_Shirt5 from '../assets/Loose_Fitted_Shirt5.jpg'
 
import lifeStyle from "../assets/lifeStyle.jpg"
import sportLife from "../assets/sportLife.jpg"
import smartCasual from '../assets/smartCasual.jpg'
import tops from '../assets/tops.jpg'
import softLiving from '../assets/softLiving.jpg'
import shoes from '../assets/shoes.jpg'

export const brandSlide=[
    {
        id: 1,
        image: b1
    },
    {
        id: 2,
        image: b2
    },
    {
        id: 3,
        image: b3
    },
    {
        id: 4,
        image: b4
    },
    {
        id: 5,
        image: b5
    },
    {
        id: 6,
        image: b6
    },
    {
        id: 7,
        image: b7
    },

]

export const bannerData=[
    {
        id:1,
        image: banner1
    },
    {
        id: 2,
        image: banner2
    },
    {
        id: 3,
        image: banner3
    }
]

export const categories=[
    {
        id: 1,
        image: lifeStyle
    },
    {
        id: 2,
        image: sportLife
    },
    {
        id: 3,
        image: smartCasual
    },
    {
        id: 4,
        image: tops
    },
    {
        id: 5,
        image: softLiving
    },
    {
        id: 6,
        image: shoes
    },
]



export const products = [
  {
    id: 1,
    name: "Patch Printed T-Shirt",
    section: "man",
    price: 16.95,
    currency: "USD",
    discount: 10,
    description: "Streetwear patch printed oversized T-shirt with modern faded design.",

    colors: [
      {
        name: "Black",
        value: "#000000",
        images: [
          Long_Sleeve_Fitted_Shirt_white1,
          Long_Sleeve_Fitted_Shirt_white2,
          Long_Sleeve_Fitted_Shirt_white3,
          Long_Sleeve_Fitted_Shirt_white4,
          Long_Sleeve_Fitted_Shirt_white5,
          Long_Sleeve_Fitted_Shirt_white6
        ]
      },
      {
        name: "Purple",
        value: "#6a5acd",
        images: [
          "/images/purple-1.jpg",
          "/images/purple-2.jpg",
          "/images/purple-3.jpg"
        ]
      }
    ],

    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultColor: "Purple",
    defaultSize: "M",
    rating: 4.6,
    reviewsCount: 120,
    inStock: true,
    category: "T-Shirt",
    brand: "Street Wear",
    images: [
      "/images/main-1.jpg",
      "/images/main-2.jpg",
      "/images/main-3.jpg"
    ]
  },

  {
    id: 2,
    name: "Minimal Logo Hoodie",
    price: 29.99,
    section: "man",
    currency: "USD",
    discount: 5,
    description: "Cozy oversized hoodie with minimal chest logo for everyday wear.",

    colors: [
      {
        name: "Gray",
        value: "#808080",
        images: [
          Short_Sleeve_Shirt1,
          Short_Sleeve_Shirt2,
          Short_Sleeve_Shirt3,
          Short_Sleeve_Shirt4,
          Short_Sleeve_Shirt5
        ]
      },
      {
        name: "Black",
        value: "#000000",
        images: [
          "/images/black-hoodie-1.jpg",
          "/images/black-hoodie-2.jpg"
        ]
      }
    ],

    sizes: ["S", "M", "L", "XL"],
    defaultColor: "Black",
    defaultSize: "L",
    rating: 4.8,
    reviewsCount: 250,
    inStock: true,
    category: "Hoodie",
    brand: "Urban Fit",
    images: [
      
    ]
  },

  {
    id: 3,
    name: "Slim Fit Jeans",
    price: 39.5,
    section: "man",
    currency: "USD",
    discount: 15,
    description: "Modern slim-fit denim jeans with stretch comfort fabric.",

    colors: [
      {
        name: "Blue",
        value: "#1e3a8a",
        images: [
            Laced_Top1,
            Laced_Top2,
            Laced_Top3,
            Laced_Top4,
            Laced_Top5
        ]
      },
      {
        name: "Black",
        value: "#000000",
        images: [
          "/images/black-jeans-1.jpg",
          "/images/black-jeans-2.jpg"
        ]
      }
    ],

    sizes: ["28", "30", "32", "34", "36"],
    defaultColor: "Blue",
    defaultSize: "32",
    rating: 4.5,
    reviewsCount: 310,
    inStock: true,
    category: "Jeans",
    brand: "Denim Co",
    images: [
      "/images/jeans-main-1.jpg",
      "/images/jeans-main-2.jpg",
      "/images/jeans-main-3.jpg"
    ]
  },

  {
    id: 4,
    name: "Classic Sneakers",
    price: 49.99,
    section: "man",
    currency: "USD",
    discount: 50,
    description: "Comfortable everyday sneakers with breathable mesh design.",

    colors: [
      {
        name: "White",
        value: "#ffffff",
        images: [
          Loose_Fitted_Shirt1,
          Loose_Fitted_Shirt2,
          Loose_Fitted_Shirt3,
          Loose_Fitted_Shirt4,
          Loose_Fitted_Shirt5
        ]
      },
      {
        name: "Black",
        value: "#000000",
        images: [
          "/images/black-sneaker-1.jpg",
          "/images/black-sneaker-2.jpg"
        ]
      }
    ],

    sizes: ["S", "M", "L", "XL"],
    defaultColor: "White",
    defaultSize: "41",
    rating: 4.7,
    reviewsCount: 540,
    inStock: true,
    category: "Shoes",
    brand: "StepUp",
    images: [
      "/images/sneaker-main-1.jpg",
      "/images/sneaker-main-2.jpg"
    ]
  },
  {
    id: 5,
    name: "Classic Sneakers",
    price: 49.99,
    section: "man",
    currency: "USD",
    discount: 10,
    description: "Comfortable everyday sneakers with breathable mesh design.",

    colors: [
      {
        name: "White",
        value: "#ffffff",
        images: [
          Loose_Fitted_Shirt1,
          Loose_Fitted_Shirt2,
          Loose_Fitted_Shirt3,
          Loose_Fitted_Shirt4,
          Loose_Fitted_Shirt5
        ]
      },
      {
        name: "Black",
        value: "#000000",
        images: [
          "/images/black-sneaker-1.jpg",
          "/images/black-sneaker-2.jpg"
        ]
      }
    ],

    sizes: ["S", "M", "L", "XL"],
    defaultColor: "White",
    defaultSize: "41",
    rating: 4.7,
    reviewsCount: 540,
    inStock: true,
    category: "Shoes",
    brand: "StepUp",
    images: [
      "/images/sneaker-main-1.jpg",
      "/images/sneaker-main-2.jpg"
    ]
  },
  {
    id: 6,
    name: "Classic Sneakers",
    price: 49.99,
    section: "man",
    currency: "USD",
    discount: 5,
    description: "Comfortable everyday sneakers with breathable mesh design.",

    colors: [
      {
        name: "White",
        value: "#ffffff",
        images: [
          Loose_Fitted_Shirt1,
          Loose_Fitted_Shirt2,
          Loose_Fitted_Shirt3,
          Loose_Fitted_Shirt4,
          Loose_Fitted_Shirt5
        ]
      },
      {
        name: "Black",
        value: "#000000",
        images: [
          "/images/black-sneaker-1.jpg",
          "/images/black-sneaker-2.jpg"
        ]
      }
    ],

    sizes: ["S", "M", "L", "XL"],
    defaultColor: "White",
    defaultSize: "41",
    rating: 4.7,
    reviewsCount: 540,
    inStock: true,
    category: "Shoes",
    brand: "StepUp",
    images: [
      "/images/sneaker-main-1.jpg",
      "/images/sneaker-main-2.jpg"
    ]
  },
];

export const navBar=[
  {
    id:1,
    name: "Home",
    path: "/"
  },
  {
    id:2,
    name: "Woman",
    path: "/woman"
  },
  {
    id:3,
    name: "Man",
    path: "/man"
  },
  {
    id:4,
    name: "Young",
    path: "/young"
  },
]