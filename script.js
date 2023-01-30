let url = "https://fakestoreapi.com/products"

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