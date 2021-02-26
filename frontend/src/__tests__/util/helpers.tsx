import { CartItem } from '../../../../common/types/CartItem';

import mockProducts from '../.././../../common/mockData/product.json';
import mockVariants from '../../../../common/mockData/variant.json';
import mockUsers from '../../../../common/mockData/user.json';

test.skip('skip', () => {});


export const products = [
  {
    "id": 210,
    "name": "LED High Tops",
    "description": "Black high top shoes with green LED lights in the sole, tied up with laces and a buckle.",
    "price": "74",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/putting-on-your-shoes_925x_f71c19ac-c091-4c7f-bbfe-a43d6a0456b7.jpg?v=1545334661",
    "gender": "men",
    "variants": [
      {
        "id": 55,
        "name": "US 9",
        "quantity": 4
      },
      {
        "id": 56,
        "name": "US 10",
        "quantity": 14
      },
      {
        "id": 57,
        "name": "US 11",
        "quantity": 6
      },
      {
        "id": 58,
        "name": "US 12",
        "quantity": 4
      }
    ]
  },
  {
    "id": 211,
    "name": "Striped Skirt and Top",
    "description": "Black cotton top with matching striped skirt.",
    "price": "57",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/woman-in-the-city_925x_34c54a7d-e2a0-48fe-a169-fde33a735aef.jpg?v=1545335011",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 0
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 1
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 11
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 8
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 14
      }
    ]
  },
  {
    "id": 212,
    "name": "Olive Green Jacket",
    "description": "Loose fitting olive green jacket with buttons and large pockets. Multicoloured pattern on the front of the shoulders.",
    "price": "49",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/urban-fashion_925x_353f971d-ec3e-4218-9437-28cc7cdb0af2.jpg?v=1545334827",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 12
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 9
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 2
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 16
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 14
      }
    ]
  },
  {
    "id": 213,
    "name": "Red Sports Tee",
    "description": "Women's red sporty t-shirt with colorful details on the sleeves and a small white pocket.",
    "price": "40",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/womens-red-t-shirt_925x_bcf81605-4475-46c0-a85c-2f8b2fca729a.jpg?v=1545334853",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 8
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 18
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 15
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 20
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 16
      }
    ]
  },
  {
    "id": 214,
    "name": "Blue Silk Tuxedo",
    "description": "Blue silk tuxedo with marbled aquatic pattern and dark lining. Sleeves are complete with rounded hem and black buttons.",
    "price": "78",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/man-adjusts-blue-tuxedo-bowtie_925x_656f2a36-34a8-4db2-9701-c01e49e9e5c0.jpg?v=1545334369",
    "gender": "men",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 9
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 14
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 17
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 10
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 2
      }
    ]
  },
  {
    "id": 215,
    "name": "White Cotton Shirt",
    "description": "Plain white cotton long sleeved shirt with loose collar. Small buttons and front pocket.",
    "price": "67",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/smiling-woman-poses_925x_14ecaa8e-2b1e-4b49-bbaf-470b9b3a8407.jpg?v=1545335038",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 17
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 3
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 7
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 5
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 0
      }
    ]
  },
  {
    "id": 216,
    "name": "Chequered Red Shirt",
    "description": "Classic mens plaid flannel shirt with long sleeves, in chequered style, with two chest pockets.",
    "price": "68",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/red-plaid-shirt_925x_95025b1f-2c44-4e88-a102-cf1d98afa514.jpg?v=1545334435",
    "gender": "men",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 12
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 6
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 19
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 15
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 14
      }
    ]
  },
  {
    "id": 217,
    "name": "Long Sleeve Cotton Top",
    "description": "Black cotton womens top, with long sleeves, no collar and a thick hem.",
    "price": "52",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/woman-outside-brownstone_925x_cbc014a2-b37b-4eda-bd6c-71c0ec7249b3.jpg?v=1545334696",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 6
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 2
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 20
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 1
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 15
      }
    ]
  },
  {
    "id": 218,
    "name": "Silk Summer Top",
    "description": "Silk womens top with short sleeves and number pattern.",
    "price": "40",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/young-hip-woman-at-carnival_925x_710974da-04df-42cc-9917-0b560eca41b7.jpg?v=1545334886",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 19
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 10
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 17
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 5
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 8
      }
    ]
  },
  {
    "id": 219,
    "name": "Zipped Jacket",
    "description": "Dark navy and light blue men's zipped waterproof jacket with an outer zipped chestpocket for easy storeage.",
    "price": "76",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/menswear-blue-zip-up-jacket_925x_e0818abb-a8f8-4085-89ef-456eb0dfe832.jpg?v=1545335142",
    "gender": "men",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 3
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 15
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 18
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 4
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 4
      }
    ]
  },
  {
    "id": 220,
    "name": "Soft Winter Jacket",
    "description": "Thick black winter jacket, with soft fleece lining. Perfect for those cold weather days.",
    "price": "52",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/smiling-woman-on-snowy-afternoon_925x_ad2c8ae3-c078-494a-a484-40f5ae728f55.jpg?v=1545334921",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 8
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 14
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 18
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 20
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 4
      }
    ]
  },
  {
    "id": 221,
    "name": "Navy Sports Jacket",
    "description": "Long-sleeved navy waterproof jacket in thin, polyester fabric with a soft mesh inside. The durable water-repellent finish means you'll be kept comfortable and protected when out in all weathers.",
    "price": "63",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/mens-fall-fashion-jacket_925x_2d391ff5-5a8d-489b-ad4c-db655113c9a3.jpg?v=1545334741",
    "gender": "men",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 9
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 2
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 5
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 11
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 7
      }
    ]
  },
  {
    "id": 222,
    "name": "Dark Denim Top",
    "description": "Classic dark denim top with chest pockets, long sleeves with buttoned cuffs, and a ripped hem effect.",
    "price": "66",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/young-female-models-denim_925x_a726eac9-219c-4d70-b448-9c807a49feeb.jpg?v=1545334576",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 13
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 6
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 8
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 6
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 17
      }
    ]
  },
  {
    "id": 223,
    "name": "Classic Leather Jacket",
    "description": "Womans zipped leather jacket. Adjustable belt for a comfortable fit, complete with shoulder pads and front zip pocket.",
    "price": "40",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/leather-jacket-and-tea_925x_e917107c-d13e-4260-91a6-0ed33f12e7e1.jpg?v=1545334470",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 19
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 15
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 7
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 3
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 14
      }
    ]
  },
  {
    "id": 224,
    "name": "Floral White Top",
    "description": "Stylish sleeveless white top with a floral pattern.",
    "price": "60",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/city-woman-fashion_925x_2x_ee873798-6f63-4d75-932d-297a182d9047.jpg?v=1545334611",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 20
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 13
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 18
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 0
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 8
      }
    ]
  },
  {
    "id": 225,
    "name": "Striped Silk Blouse",
    "description": "Ultra-stylish black and red striped silk blouse with buckle collar and matching button pants.",
    "price": "56",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/striped-blouse-fashion_925x_56d1714f-a5d7-4d75-b5cf-64845bbe0025.jpg?v=1545334951",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 7
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 8
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 4
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 10
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 7
      }
    ]
  },
  {
    "id": 226,
    "name": "Yellow Wool Jumper",
    "description": "Knitted jumper in a soft wool blend with low dropped shoulders and wide sleeves and think cuffs. Perfect for keeping warm during Fall.",
    "price": "48",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/autumn-photographer-taking-picture_925x_575b7499-1d00-45f0-9d4d-98b1d90ae9a4.jpg?v=1545335092",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 4
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 11
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 7
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 14
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 13
      }
    ]
  },
  {
    "id": 227,
    "name": "Classic Varsity Top",
    "description": "Womens casual varsity top, This grey and black buttoned top is a sport-inspired piece complete with an embroidered letter.",
    "price": "76",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/casual-fashion-woman_925x_400a5af0-2457-49d9-9ef2-029a9850d738.jpg?v=1545334520",
    "gender": "women",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 7
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 6
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 20
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 7
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 6
      }
    ]
  },
  {
    "id": 228,
    "name": "Ocean Blue Shirt",
    "description": "Ocean blue cotton shirt with a narrow collar and buttons down the front and long sleeves. Comfortable fit and tiled kalidoscope patterns.",
    "price": "37",
    "image": "https://cdn.shopify.com/s/files/1/0018/5617/6150/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg?v=1545334792",
    "gender": "men",
    "variants": [
      {
        "id": 59,
        "name": "small",
        "quantity": 4
      },
      {
        "id": 60,
        "name": "medium",
        "quantity": 5
      },
      {
        "id": 61,
        "name": "large",
        "quantity": 1
      },
      {
        "id": 62,
        "name": "xl",
        "quantity": 13
      },
      {
        "id": 63,
        "name": "xxl",
        "quantity": 3
      }
    ]
  }
]

export const cartItems: CartItem[] = mockProducts.slice(5).map((mockProduct, index) => {
  return ({
    product: {...mockProduct, id: index, price: `${mockProduct.price}`},
    variant: { ...mockVariants[index], id: index, quantity: index + 1 },
    quantity: index,
  })
})

export const users = mockUsers;
