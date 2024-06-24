const nav = document.querySelector(".nav")
const lesson = document.querySelector(".nav-lesson")
const javascript = document.querySelector(".nav-javascript")
const portfolio = document.querySelector(".nav-portfolio")
const api = document.querySelector(".nav-api")

const ddLesson = document.querySelector(".dropdown-lesson")
const ddJavascript = document.querySelector(".dropdown-javascript")
const ddPortfolio = document.querySelector(".dropdown-portfolio")
const ddApi = document.querySelector(".dropdown-api")
const container = document.querySelector(".container")

const lessons = document.querySelector(".lessons")



document.addEventListener('DOMContentLoaded', () => {
    lessons.innerHTML = `
    ${lessonContent} 
    `
})

// Public Nav
// TO ALL DI
document.addEventListener('DOMContentLoaded', function () {

    nav.innerHTML = `
        <div class="left">
            <a href="/index.html" class="home hover-text">Home</a>
        </div>
        <div class="right">
            <div class="link-1">
                <a  href="/index.html#lesson" class="nav-lesson hover-text">Lesson</a>
                <a  href="/index.html#javascript" class="nav-javascript hover-text">Javascript</a>
                <a target="_blank" href="/portfolio/index.html" class="nav-portfolio hover-text">Portfolio</a>
                <a target="_blank" href="/api/index.html" class="nav-api hover-text">API</a>
            </div>

            <!-- Dropdown Container -->
            <div class="dropdown">
                <button class="nav-burger">☰</button>
                <!-- Dropdown Content -->
                <div class="dropdown-content">
                    <a href="/index.html#lesson" class="nav-lesson hover-text">Lesson</a>
                    <a href="/index.html#javascript" class="nav-javascript hover-text">Javascript</a>
                    <a href="/portfolio/index.html" class="nav-portfolio hover-text">Portfolio</a>
                    <a href="/api/index.html" class="nav-api hover-text">API</a>
                </div>
            </div>
        </div>
    `;


    // Dropdown JavaScript
    document.querySelector('.nav-burger').addEventListener('click', function () {
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function (e) {
        const dropdownContent = document.querySelector('.dropdown-content');
        const navBurger = document.querySelector('.nav-burger');
        // Check if the clicked area is not the dropdown or the nav-burger
        if (!dropdownContent.contains(e.target) && !navBurger.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});


// CONTENT

var lessonContent = `
       <div class="hero">
                <div class="title title-between">
                    <div>Lesson</div>
                    <a href=""><button class="title-inside title-hover-text font-small">Source Code</button></a>
                </div>
                <div class="container-text">
                    <div class="sub">AIO = All in One, Click "View" to see.</div>

                    <div class="title-inside-bottom title-hover-text font-small">Source Code</div>
                </div>
            </div>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr class="table-head">
                            <th class="table-head-1">Lesson</th>
                            <th class="table-head-1">AIO</th>
                            <th class="table-head-2">A</th>
                            <th class="table-head-2">B</th>
                            <th class="table-head-2">C</th>
                            <th class="table-head-2">D</th>
                            <th class="table-head-2">E</th>
                            <th class="table-head-2">F</th>
                        </tr>
                        <tr class="table-hover">
                            <td>1</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-1/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>2</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-2/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>3</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-3/index.html" target="_blank">View</a>
                            </td>
                            <!-- colspan="7" -->
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>4</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-4/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>5</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-5/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>6</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-6/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>7</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-7/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>8</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-8/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>9</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-9/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>10</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-10/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>11</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-11/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>12</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-12/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>13</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-13/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>14</td>
                            <td>None</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-14/a.html" target="_blank">View</a>
                            </td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-14/b.html" target="_blank">View</a>
                            </td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-14/c.html" target="_blank">View</a>
                            </td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-14/d.html" target="_blank">View</a>
                            </td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-14/e.html" target="_blank">View</a>
                            </td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-14/f.html" target="_blank">View</a>
                            </td>
                        </tr>
                        <tr class="table-hover">
                            <td>15</td>
                            <td>None</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-15/a.html" target="_blank">View</a>
                            </td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-15/b.html" target="_blank">View</a>
                            </td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-15/c.html" target="_blank">View</a>
                            </td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-15/d.html" target="_blank">View</a>
                            </td>
                            <td colspan="2"><a class="table-text-hover" href="/lesson/Lesson-15/ef.html"
                                    target="_blank">View</a>
                            </td>
                        </tr>
                        <tr class="table-hover">
                            <td>16</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-16/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr class="table-hover">
                            <td>17</td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-17/index.html" target="_blank">View</a>
                            </td>
                            <td><a class="table-text-hover" href="/lesson/Lesson-17/index.html" target="_blank">View</a>
                            </td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        </tbody>
                </table>
            </div>
`

var javascriptContent = `
    <div class="hero font-large">
                <div class="title title-between">
                    <div>Javascript</div>
                    <a href=""><button class="title-inside title-hover-text font-small">Source Code</button></a>
                </div>
                <div class="container-text">
                    <div class="sub">Click "View" to see.</div>

                    <div class="title-inside-bottom title-hover-text title-hover-text font-small">Source Code</div>
                </div>
            </div>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr class="table-head">
                            <th class=" table-num">No</th>
                            <th class="table-head-1">Name</th>
                            <th class="table-head-2">Link</th>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">1</td>
                            <td class="table-name">Quiz Matematika</td>
                            <td>
                                <a class="" href="/javascript/quiz-matematika/quiz.html" target="_blank">
                                    <button class="table-text-hover btn-view">View</button>
                                </a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">2</td>
                            <td class="table-name">Stopwatch Sederhana</td>
                            <td><a class="table-text-hover" href="/javascript/timer/timer.html" target="_blank"><button
                                        class="table-text-hover btn-view">View</button></a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">3</td>
                            <td class="table-name">Konverter Suhu</td>
                            <td><a class="table-text-hover" href="/javascript/konverter-suhu/suhu.html"
                                    target="_blank"><button class="table-text-hover btn-view">View</button></a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">4</td>
                            <td class="table-name">Realtime Character Counter</td>
                            <td><a class="table-text-hover"
                                    href="/javascript/realtime-character-counter/ch-counter.html"
                                    target="_blank"><button class="table-text-hover btn-view">View</button></a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">5</td>
                            <td class="table-name">Timer / Pomodoro Timer</td>
                            <td><a class="table-text-hover" href="/javascript/pomodoro-timer/pomodoro.html"
                                    target="_blank"><button class="table-text-hover btn-view">View</button></a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">6</td>
                            <td class="table-name">Emoji Rating</td>
                            <td><a class="table-text-hover" href="/javascript/emoji-rating/emoji.html"
                                    target="_blank"><button class="table-text-hover btn-view">View</button></a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">7</td>
                            <td class="table-name">Number Counter</td>
                            <td><a class="table-text-hover" href="/javascript/number-counter/number.html"
                                    target="_blank"><button class="table-text-hover btn-view">View</button></a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">8</td>
                            <td class="table-name">Konversi Uang</td>
                            <td><a class="table-text-hover" href="/javascript/konversi-uang/uang.html"
                                    target="_blank"><button class="table-text-hover btn-view">View</button></a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">9</td>
                            <td class="table-name">Menghitung Berat Badan Ideal</td>
                            <td><a class="table-text-hover" href="/javascript/menghitung-berat-badan/berat.html"
                                    target="_blank"><button class="table-text-hover btn-view">View</button></a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">1o</td>
                            <td class="table-name">Kalkulator Sederhana</td>
                            <td><a class="table-text-hover" href="/javascript/kalkulator-sederhana/calculator.html"
                                    target="_blank"><button class="table-text-hover btn-view">View</button></a>
                        </tr>
                    </thead>
                </table>
            </div>
`

var portfolioContent = `

             <div class="hero font-large">
                <div class="title title-between">
                    <div>Portfolio</div>
                    <a href=""><button class="title-inside title-hover-text font-small">Source Code</button></a>
                </div>
                <div class="container-text">
                    <div class="sub">Click "View" to see.</div>

                    <div class="title-inside-bottom title-hover-text title-hover-text font-small">Source Code</div>
                </div>
            </div>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr class="table-head">
                            <th class=" table-num">No</th>
                            <th class="table-head-1">Name</th>
                            <th class="table-head-2">Link</th>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">1</td>
                            <td class="table-name">Portfolio</td>
                            <td>
                                <a class="" href="/portfolio/index.html" target="_blank">
                                    <button class="table-text-hover btn-view">View</button>
                                </a>
                        </tr>
                    </thead>
                </table>
            </div>
`

var apiContent = `
     <div class="hero font-large">
                <div class="title title-between">
                    <div>API</div>
                    <div>
                        <a target="_blank" href="https://github.com/nabildzr/news-web">
                            <button  class="title-inside title-hover-text font-small" >
                                News Source Code
                            </button>
                        </a>
                        <a target="_blank" href="https://github.com/nabildzr/anime-list">
                            <button  class="title-inside title-hover-text font-small" >
                                Anime Source Code
                            </button>
                        </a>
                    </div>
                        
                
                </div>
                <div class="container-text">
                    <div class="sub">Click "View" to see.</div>
                    <div class="sub">Click the Button to see Source Code.</div>

                    <div style="display: flex;justify-content: space-between;">
                        <a target="_blank" href="https://github.com/nabildzr/news-web">
                            <div class="title-inside-bottom title-hover-text title-hover-text font-small" >News SC</div>
                        </a>
                        <a style="margin-left: 10px;" target="_blank" href="https://github.com/nabildzr/anime-list">
                            <div class="title-inside-bottom title-hover-text title-hover-text font-small" >Anime SC</div>
                        </a>
                        </div>
                    </div>
            </div>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr class="table-head">
                            <th class=" table-num">No</th>
                            <th class="table-head-1">Name</th>
                            <th class="table-head-2">Link</th>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">1</td>
                            <td class="table-name">News / Berita</td>
                            <td>
                                <a class="" href="https://nabildzr.github.io/news-web" target="_blank">
                                    <button class="table-text-hover btn-view">View</button>
                                </a>
                        </tr>
                        <tr class="table-hover">
                            <td class="table-num">2</td>
                            <td class="table-name">Anime List</td>
                            <td>
                                <a class="" href="https://nabildzr.github.io/anime-list" target="_blank">
                                    <button class="table-text-hover btn-view">View</button>
                                </a>
                        </tr>
                    </thead>
                </table>
            </div>

`

// nav function

lesson.addEventListener('click', () => {
    container.innerHTML = `
    ${lessonContent}
    `
})


javascript.addEventListener('click', () => {
    container.innerHTML = `
    ${javascriptContent}
    `
})
portfolio.addEventListener('click', () => {
    container.innerHTML = `
    ${portfolioContent}
    `
})
api.addEventListener('click', () => {
    container.innerHTML = `
    ${apiContent}
    `
})


ddLesson.addEventListener('click', () => {
    container.innerHTML = `
    ${lessonContent}
    `
})



ddJavascript.addEventListener('click', () => {
    container.innerHTML = `
        ${javascriptContent}
    `
})
ddPortfolio.addEventListener('click', () => {
    container.innerHTML = `
    ${portfolioContent}
    `
})

ddApi.addEventListener('click', () => {
    container.innerHTML = `
    ${apiContent}
    `
})


