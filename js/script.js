const articles = document.querySelectorAll('.container');
const select = document.querySelector('select');

function updateDisplay() {
    articles.forEach((article) => {
        article.style.dislplay = select.value;
    });
}

select.addEventListener('change', updateDisplay);
updateDisplay();