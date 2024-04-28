function fetchRandomFood() {
    fetch('https://foodish-api.com/api/')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.image;
            document.getElementById('random_food').src = imageUrl;
            document.body.classList.add('loaded_hiding');
        })
        .catch(error => console.error('Error fetching random food:', error))
        .finally(() => {
            document.getElementById('spinner').style.display = 'none';
            window.setTimeout(function () {
                document.body.classList.add('loaded');
            }, 500);
        });
}

window.onload = function () {
    fetchRandomFood();
}