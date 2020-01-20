"use strict";

const card = function(props) {
  let isDetailShown = props.isOpen;
  const card = props.element;
  const cardArrow = card.querySelector(".js-card-arrow");
  const cardBody = card.querySelector(".js-card-body");
  const cardContent = card.querySelector(".js-card-content");
  const searchInput = card.querySelector(".js-search-input");
  const searchButton = card.querySelector(".js-search-button");
  const searchCancel = card.querySelector(".js-search-cancel");
  const logo = card.querySelector(".js-card-logo");

  const closeDetail = function() {
    isDetailShown = false;
    cardBody.style.height = "0";
    cardArrow.classList.add("close");
  };

  const showDetail = function() {
    isDetailShown = true;
    cardBody.style.height = cardContent.offsetHeight + "px";
    cardArrow.classList.remove("close");
  };

  const showSearch = function() {
    searchInput.classList.add("open");
    searchCancel.style.display = "block";
    cardArrow.style.display = "none";
    logo.classList.add("small");
    searchInput.focus();
  };

  const hideSearch = function() {
    searchInput.classList.remove("open");
    searchCancel.style.display = "none";
    cardArrow.style.display = "block";
    logo.classList.remove("small");
    searchInput.value = "";
  };

  const countries = [
    "Minsk, <span>Belarus</span>",
    "Mineralnye vody, <span>Russia<span>",
    "Moscow, <span>Russia</span>"
  ];
  autocomplete(searchInput, countries);

  cardArrow.addEventListener("click", function() {
    isDetailShown ? closeDetail() : showDetail();
  });

  searchButton.addEventListener("click", function() {
    showSearch();
    isDetailShown && closeDetail();
  });

  searchCancel.addEventListener("click", function() {
    hideSearch();
  });

  window.addEventListener("load", function() {
    isDetailShown ? showDetail() : closeDetail();
  });
};
