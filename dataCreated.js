const data = [
    {
        "id": 1,
        "title": "Red Printed T-Shirt by HRX",
        "price": 1299,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "T-Shirt",
        "image": "./image/product-1.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "HRX Sport Shoes",
        "price": 999,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "Shoes",
        "image": "./image/product-2.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Adidas Track Pant",
        "price": 250,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "Trousers",
        "image": "./image/product-3.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Gym Tshirt",
        "price": 100,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "T-Shirt",
        "image": "./image/product-4.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "Sneakers",
        "price": 250,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "Shoes",
        "image": "./image/product-5.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 6,
        "title": "Puma T-Shirt",
        "price": 320,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "T-Shirt",
        "image": "./image/product-6.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 7,
        "title": "HRK Socks",
        "price": 70,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "socks",
        "image": "./image/product-7.jpg",
        "rating": {
            "rate": 3,
            "count": 400
        }
    },
    {
        "id": 8,
        "title": "Fossil Watch",
        "price": 999,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "watch",
        "image": "./image/product-8.jpg",
        "rating": {
            "rate": 1.9,
            "count": 100
        }
    },
    {
        "id": 9,
        "title": "Roadster Watch",
        "price": 800,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "watch",
        "image": "./image/product-9.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        }
    },
    {
        "id": 10,
        "title": "hrx Shoes",
        "price": 700,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "Shoes",
        "image": "./image/product-10.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        }
    },
    {
        "id": 11,
        "title": "Skecher Shoes",
        "price": 600,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "Shoes",
        "image": "./image/product-11.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 12,
        "title": "Nike Track Pant",
        "price": 300,
        "description": "Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
        "category": "Trousers",
        "image": "./image/product-12.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    // jewelwey
    {
        "id": 13,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 14,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 15,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3,
            "count": 400
        }
    },
    {
        "id": 16,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 1.9,
            "count": 100
        }
    },
    {
        "id": 17,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
            "rate": 3.3,
            "count": 203
        }
    },
    {
        "id": 18,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 470
        }
    },
    {
        "id": 19,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 20,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 21,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 250
        }
    },
    {
        "id": 22,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.2,
            "count": 140
        }
    },
    // women's clothing
    {
        "id": 23,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
            "rate": 2.6,
            "count": 235
        }
    },
    {
        "id": 24,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 340
        }
    },
    {
        "id": 25,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.8,
            "count": 679
        }
    },
    {
        "id": 26,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 130
        }
    },
    {
        "id": 27,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.5,
            "count": 146
        }
    },
    {
        "id": 28,
        "title": "PUMA Women Maroon Round Neck Optical T-Shirt",
        "price": 1299,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }
]

let cardsContainer = document.getElementById("ccc")

function cardsDisplays(filteredData) {
    cardsContainer.innerHTML = ""

    filteredData.forEach((i) => {
        let card = document.createElement("div");
        card.className = "card"
        card.innerHTML = `
         <img src="${i.image}" width="50%" style="margin-top: 20px" id="Image" />
            <h2 id="title" onclick="title()">${i.title}</h2>
            <p id="price" style="color:black">₹${i.price}</p>
            <p id="rating" style="color:black">Rating: ${i.rating.rate}/5</p>
            <button id="cart">Add to cart</button>
            <button id="buynow"> Buy now </button>
            `

        let titleElement = card.querySelector("h2")
        titleElement.style.fontSize = "18px"

        const x = titleElement.textContent = i.title.slice(0, 19) + "..."

        let togggle = false
        titleElement.onclick = function (e) {
            e.stopImmediatePropagation()

            if (i.title.length > 20) {
                if (togggle) {
                    titleElement.textContent = x
                    console.log(titleElement)
                } else {
                    titleElement.textContent = i.title.slice(0)
                }
                togggle = !togggle;
            }
        }

        let cart = card.querySelector("#cart")
        cart.style.padding = "5px"

        cart.addEventListener("click", (e) => {
            console.log("clicked")
            e.stopImmediatePropagation()

            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
            cartItems.push(i)

            localStorage.setItem("cartItems", JSON.stringify(cartItems))
            location.href = "../addtocartPage/cart.html"

            let conformData = confirm("add to cart clicked")
            if (conformData) {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
            }
            else {
                location.href = "productDetails.html"
            }
        })

        card.addEventListener("click", (e) => {
            console.log("clicked")
            e.stopPropagation()

            localStorage.setItem("singleProduct", JSON.stringify(i))
            location.href = "singleCardPage.html"
        })

        BuyNow = card.querySelector("#buynow")
        BuyNow.style.padding = "5px"

        cardsContainer.style.display = "flex"
        cardsContainer.style.justifyContent = "center"
        cardsContainer.style.alignItems = "center"
        cardsContainer.style.marginTop = "50px"

        cardsContainer.style.flexWrap = "wrap"

        card.style.textAlign = "center"
        card.style.gap = "40px"
        card.style.justifyContent = "space-between"
        card.style.alignItems = "center"
        card.style.border = "1px solid black"
        card.style.margin = "5px"
        card.style.maxWidth = "250px"
        card.style.background = "skyblue"
        card.style.lineHeight = "1.5"

        cardsContainer.append(card)
    })
}

data.forEach((i) => {
    let card = document.createElement("div");
    card.className = "card"
    card.innerHTML = `
        <img src="${i.image}" width="50%" style="margin-top: 20px" id="Image" />
        <h2 id="title" onclick="title()">${i.title}</h2>
        <p id="price" style="color:black">₹${i.price}</p>
        <p id="rating" style="color:black">Rating: ${i.rating.rate}/5</p>
        <button id="cart">Add to cart</button>
        <button id="buynow"> Buy now </button>
    `

    let cart = card.querySelector("#cart")
    cart.style.padding = "5px"

    cart.addEventListener("click", (e) => {
        console.log("clicked")
        e.stopImmediatePropagation()

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
        cartItems.push(i)

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        location.href = "./addtocartPage/cart.html"

        let conformData = confirm("add to cart clicked")

        if (conformData) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
        }
        else {
            location.href = "productDetails.html"
        }
    })

    card.addEventListener("click", (e) => {
        console.log("clicked")
        e.stopPropagation()

        localStorage.setItem("singleProduct", JSON.stringify(i))
        location.href = "singleCardPage.html"
    })

    let titleElement = card.querySelector("h2")
    titleElement.style.fontSize = "18px"

    const x = titleElement.textContent = i.title.slice(0, 19) + "..."

    let togggle = false
    titleElement.onclick = function (e) {
        e.stopImmediatePropagation()

        if (i.title.length > 20) {
            if (togggle) {
                titleElement.textContent = x
                console.log(titleElement)
            } else {
                titleElement.textContent = i.title.slice(0)
            }
            togggle = !togggle;
        }
    }

    let BuyNow = card.querySelector("#buynow")
    BuyNow.style.padding = "5px"

    BuyNow.addEventListener("click", () => {
        location.href = "../addtocartPage/cart.html"
    })

    cardsContainer.style.display = "flex"
    cardsContainer.style.justifyContent = "center"
    cardsContainer.style.alignItems = "center"
    cardsContainer.style.marginTop = "50px"

    cardsContainer.style.flexWrap = "wrap"

    card.style.textAlign = "center"
    card.style.gap = "40px"
    card.style.justifyContent = "space-between"
    card.style.alignItems = "center"
    card.style.border = "1px solid black"
    card.style.margin = "5px"
    card.style.maxWidth = "250px"
    card.style.background = "skyblue"
    card.style.lineHeight = "1.5"

    cardsContainer.append(card)
}
)

let category = document.querySelectorAll(".list")
console.log(category)

category.forEach(btn => {
    const btnText = btn.textContent;
    console.log(btnText)
    btn.addEventListener("click", () => {
        const filteredData = data.filter(element => element.category.toLowerCase() === btnText.toLowerCase())
        console.log(filteredData)
        cardsDisplays(filteredData)
    })
})

let input = document.querySelector("input")

input.addEventListener("keypress", (e) => {
    let inputValue = input.value
    if (e.key == "Enter") {
        const searchData = data.filter(x => x.category.toLowerCase() === inputValue.toLowerCase())
        console.log(searchData);
        cardsDisplays(searchData)
    }
})

function toggleMenu() {
    var menuItems = document.getElementById("MenuItems");
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
    }
}