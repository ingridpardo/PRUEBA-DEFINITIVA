let url = "https://fakestoreapi.com/products"

function apiCall(url)

fetch('https://fakestoreapi.com/products', {
    method:"POST",
    body:JSON.stringify(
                {
                    title: 'Dallas Mavericks',
                    price: "79.95$",
                    description: 'Camiseta NBA Dallas Mavericks',
                    image: "https://estaticos-cdn.sport.es/clip/c7802d23-0525-4b8d-83f6-fb51f62cb9ca_media-libre-aspect-ratio_default_0.jpg", 
                    category: 'basketball'
                }
            )
            
        })
        .then(res=>res.json())
        .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products', {
    method:"POST",
    body:JSON.stringify(
                {
                    title: 'Denver Nuggets',
                    price: "79.95$",
                    description: 'Camiseta NBA Denver Nuggets',
                    image: "https://estaticos-cdn.sport.es/clip/099ea639-6bc2-4549-8acd-de76a5b4717d_media-libre-aspect-ratio_default_0.jpg",
                    category: 'basketball'
                }
            )
        })

        .then(res=>res.json())
        .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products', {
    method:"POST",
    body:JSON.stringify(
                {
                    title: 'Golden State Warriors',
                    price: "79.95$",
                    description: 'Camiseta NBA Golden State Warriors',
                    image: "https://estaticos-cdn.sport.es/clip/0ce840a9-4a56-435e-ac6c-67bca1ea74f6_media-libre-aspect-ratio_default_0.jpg",
                    category: 'basketball'
                }
            )
        })

        .then(res=>res.json())
        .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products', {
    method:"POST",
    body:JSON.stringify(
                {
                    title: 'Memphis Grizzlies',
                    price: "79.95$",
                    description: 'Camiseta NBA Memphis Grizzlies',
                    image: "https://estaticos-cdn.sport.es/clip/5431b524-953b-4f9f-8bdc-8e31476482a5_media-libre-aspect-ratio_default_0.jpg",
                    category: 'basketball'
                }
            )
        })

        .then(res=>res.json())
        .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products', {
    method:"POST",
    body:JSON.stringify(
                {
                    title: 'Miami Heat',
                    price: "79.95$",
                    description: 'Camiseta NBA Miami Heat',
                    image: "https://estaticos-cdn.sport.es/clip/9c619dbf-473e-469b-8384-5e349fdc9ad3_media-libre-aspect-ratio_default_0.jpg",
                    category: 'basketball'
                }
            )
        })

        .then(res=>res.json())
        .then(json=>console.log(json))