let url = "https://fakestoreapi.com/products"

function apiCall(url)

fetch('https://fakestoreapi.com/products', {
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'Dallas Mavericks',
                    price: "79.95$",
                    description: 'Camiseta NBA Dallas Mavericks',
                    image: 'https://estaticos-cdn.sport.es/clip/c7802d23-0525-4b8d-83f6-fb51f62cb9ca_media-libre-aspect-ratio_default_0.jpg',
                    category: 'basketball'
                }
            )
        })
            .then(res=>res.json())
            .then(res => {
                document.querySelector("div").innerHTML = `
                <h1>${title}</h1>
                `
            
            })
        

apiCall(url);