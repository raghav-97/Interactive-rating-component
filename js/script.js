let ratingBtn = document.querySelectorAll(".btn_style");
let submitBtn = document.querySelector(".submit_btn");
let ratingPage = document.getElementById("rating-page");
let thankYouPage = document.getElementById("thank-you-page");
let ratingText = document.getElementById("selected-rating");
let psRating = document.getElementById("ps-rating");
let selectedRating = "";

for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener("click", function(e) {
        selectedRating = e.target.innerHTML;
        console.log(selectedRating);
    })
}


submitBtn.addEventListener("click", function() {

    if (selectedRating === "") {
    
        for (let i = 0; i < ratingBtn.length; i++) {
            ratingBtn[i].classList.add("error");
            psRating.classList.remove("d-none");

            setInterval(() => {
                ratingBtn[i].classList.remove("error");
                psRating.classList.add("d-none");
            }, 1000);
        }
    }

    else {
        ratingPage.classList.add("d-none");
        thankYouPage.classList.remove("d-none");
     
        ratingText.innerHTML = `${selectedRating}`;
    }
}) 
