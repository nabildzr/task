/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";


// light and dark mode

const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

console.log(isDark);

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {

    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);

}

$themeBtn.addEventListener("click", changeTheme);


// Tab

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");

let [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {

        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});

// const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
// let /** {NodeElement} */[lastActiveTab] = document.querySelectorAll("[data-tab-content]");
// let /** {NodeElement} */ lastActiveTabBtn = null;

// $tabBtn.forEach((btn) => {
//     btn.addEventListener('click', function (event) {
//         event.preventDefault();

      
//         if (lastActiveTab) {
//             lastActiveTab.classList.remove('active');
//         }
//         if (lastActiveTabBtn) {
//             lastActiveTabBtn.classList.remove('active');
//         }

       
//         const $tabContent = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);
//         $tabContent.classList.add('active');
//         this.classList.add('active');

        
//         lastActiveTab = $tabContent;
//         lastActiveTabBtn = this;
//     });
// });