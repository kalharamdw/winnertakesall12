function rateGame(ratingId, stars) {
    let starsContainer = document.getElementById(ratingId);
    starsContainer.innerHTML = "★".repeat(stars) + "☆".repeat(5 - stars);
    alert(`You rated this game ${stars} stars!`);
}