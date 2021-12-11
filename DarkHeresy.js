"use strict";
function loadDoc(fileName) {
  $("#content").load(fileName);
}

function sideNavDropdown() {
  let dropdown = document.getElementsByClassName("dropdown-btn");


  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {

      this.classList.toggle("active");
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}
/**
 * multi-purpose random number generator to simulate the rolling of any type of die.
 * @param min lowest value on the die
 * @param max highest value on the die
 * @returns {number}
 */
function rollEm(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function psykerSideEffects() {

  $("a[data-name='psyker']").click(function() {
    $.getScript("CareerPaths/Psyker/Psyker.js");
  })
}

function navToggle() {
  $("#careerpaths > div").hide();

  $("li#careerpaths").click(function(){
    $("li#careerpaths > div.navContainer").show();

  });
}
/**
 * click event for aside navigation.  onclick of link loads relevant HTML using AJAX and updates window.history
 * object to maintain ease of navigation
 */
function navClickEvent() {



loadDoc('cover.html');

  window.addEventListener('popstate', function(e) {
    loadDoc(e.state);
  });

  psykerSideEffects();
  sideNavDropdown();
}
window.onload = navClickEvent;