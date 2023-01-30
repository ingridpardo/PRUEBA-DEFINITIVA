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
                    category: 'basketball'}
                    )
                    
                })
                .then(res=>res.json())
                .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: "Atlanta Hawks",
                    price: "79,95$",
                    description: "Camiseta NBA Atlanta Hawks",
                    image: "https://estaticos-cdn.sport.es/clip/da15651a-4df3-494e-9d71-32811948c1f5_media-libre-aspect-ratio_default_0.jpg",
                    category: "Basketball"
                }
            )
        })
        .then(res=>res.json())
        .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: "Boston Celtics",
                    price: "79,95$",
                    description: "Camiseta NBA Boston Celtics",
                    image: "https://estaticos-cdn.sport.es/clip/669cce56-adcb-4bf5-9a78-f2d0d48683e0_media-libre-aspect-ratio_default_0.jpg",
                    category: "Basketball",
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

fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: "Brooklyn Nets",
                    price: "79,95$",
                    description: "Camiseta NBA Brooklyn Nets",
                    image: "https://estaticos-cdn.sport.es/clip/dc730622-5b2f-43fa-89cc-250c0abe4140_media-libre-aspect-ratio_default_0.jpg",
                    category: "Basketball"
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
                    category: 'Basketball'}
            )
            
        })
        .then(res=>res.json())
        .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: "Chicago Bulls",
                    price: "79,954",
                    description: "Camiseta NBA Chicago Bulls",
                    image: "https://estaticos-cdn.sport.es/clip/6af3b586-fc9b-442c-9ab7-64774beaa7d3_media-libre-aspect-ratio_default_0.jpg",
                    category: "Basketball"
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

fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: "Los Angeles Lakers",
                    price: "79,95$",
                    description: "Camiseta NBA Los Angeles Lakers",
                    image: "https://estaticos-cdn.sport.es/clip/a105da65-4504-40cd-8106-1adbb75dc684_media-libre-aspect-ratio_default_0.jpg",
                    category: "Basketball",
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
