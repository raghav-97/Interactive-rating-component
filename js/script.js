let ratingBtn = document.querySelectorAll(".btn_style");
let submitBtn = document.querySelector(".submit_btn");
let ratingPage = document.getElementById("rating-page");
let thankYouPage = document.getElementById("thank-you-page");
let ratingText = document.getElementById("selected-rating");
let selectedRating = "";

for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener("click", function(e) {
        selectedRating = e.target.innerHTML;
        console.log(selectedRating);
    })
}


submitBtn.addEventListener("click", function() {

    if (selectedRating === "") {
        alert("Please Select Rating");
    }

    else {
        ratingPage.classList.add("d-none");
        thankYouPage.classList.remove("d-none");
     
        ratingText.innerHTML = `${selectedRating}`;
    }
}) 
