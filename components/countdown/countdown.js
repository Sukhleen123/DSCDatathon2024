document.addEventListener('DOMContentLoaded', () => {
    // Countdown timer placeholder
    const countdownDisplay = document.createElement('p');
    document.body.insertBefore(countdownDisplay, document.querySelector('main'));

    const eventDate = new Date('2024-04-19').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdownDisplay.innerText = days + " days until the event starts!";

        if (distance < 0) {
            clearInterval(interval);
            countdownDisplay.innerText = "The event is happening now!";
        }
    };

    const interval = setInterval(updateCountdown, 1000);
});