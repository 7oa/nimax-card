"use strict";

window.onload = function () {
    let detailShow = true;
    const cardArrow = document.getElementById("card-arrow");
    const cardBody = document.getElementById("card-body");
    const cardContent = document.getElementById("card-content");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchCansel = document.getElementById("search-cansel");
    const logo = document.getElementById("logo");

    setTimeout(() => cardBody.style.height = cardContent.offsetHeight + "px", 1000);

    function closeDetail() {
        detailShow = false;
        cardBody.style.height = "0";
        cardArrow.classList.remove("open");
    }

    function showDetail() {
        detailShow = true;
        cardBody.style.height = cardContent.offsetHeight + "px";
        cardArrow.classList.add("open");
    }

    function showSearch() {
        searchInput.classList.add("open");
        searchCansel.style.display = 'block';
        cardArrow.style.display = 'none';
        logo.classList.add("small");
        searchInput.focus();
    }

    function hideSearch() {
        searchInput.classList.remove("open");
        searchCansel.style.display = 'none';
        cardArrow.style.display = 'block';
        logo.classList.remove("small");
        searchInput.value = "";
    }

    cardArrow.onclick = function () {
        if (detailShow === true) {
            closeDetail();
        } else {
            showDetail();
        }
    };

    searchButton.onclick = function () {
        showSearch();
        if (detailShow === true) closeDetail();
    };

    searchCansel.onclick = function () {
        hideSearch();
    };

    var countries = ["Minsk, <span>Belarus</span>", "Mineralnye vody, <span>Russia<span>", "Moscow, <span>Russia</span>"];
    autocomplete(searchInput, countries);
};