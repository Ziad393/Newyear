document.addEventListener('DOMContentLoaded', function () {
    // Display the initial countdown
    updateCountdown();

    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Display the countdown with zeros
        updateCountdown();

        // If the countdown is over, display fireworks
        if (countdownIsOver()) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = '00d 00h 00m 00s';
            showNewYearMessage();
        }
    }, 1000);

    // Add a click event to the reveal button
    document.getElementById('revealButton').addEventListener('click', function () {
        // Show the hidden message
        document.getElementById('message').classList.remove('hidden');
    });

    // Add a click event to the show video button
    document.getElementById('showVideoButton').addEventListener('click', function () {
        // Hide the countdown, message, and reveal button
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('message').style.display = 'none';
        document.getElementById('revealButton').style.display = 'none';

        // Show the video container
        var videoContainer = document.getElementById('videoContainer');
        videoContainer.classList.remove('hidden');
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('showVideoButton').style.display = 'none';
        document.getElementById('clock').style.display = 'none';
        document.getElementById('h1').style.display = 'none';

        // Show the Happy New Year message and fireworks
        showNewYearMessage();
        
        // Show the video
        var video = document.getElementById('myVideo');
        video.play(); // Optionally start playing the video automatically
    });

    // Function to update the countdown with zeros
    function updateCountdown() {
        document.getElementById('countdown').innerHTML = '00d 00h 00m 00s';
    }

    // Function to check if the countdown is over
    function countdownIsOver() {
        // Replace this condition with your own logic if needed
        return false;
    }

    // Function to show the Happy New Year message and fireworks
    function showNewYearMessage() {
        document.getElementById('newYearMessage').classList.remove('hidden');
        document.getElementById('fireworks').classList.remove('hidden');
    }
});
