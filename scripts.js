document.addEventListener("DOMContentLoaded", function() {
    function updateTimeandDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(" ")[4];
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('current-time').textContent = utcTime;
        document.getElementById('current-day').textContent = dayOfWeek;
    }

    updateTimeandDay();
    setInterval(updateTimeandDay, 60000);
});