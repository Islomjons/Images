let elImage = document.querySelector(".image");
let elBtn = document.querySelector(".btn");

elBtn.addEventListener("click", function(click) {
    
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(function(response) {
            return response.json()
        }).then(function(data) {
            elImage.src = data[0].url
        })
})