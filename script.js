
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");
const flowerTransition = document.querySelector(".flower-transition");
const hiddenSections = document.querySelectorAll(".hidden-content");

// Surprise button click
surpriseBtn.addEventListener("click", () => {
  // Show surprise message
  if (surpriseMessage) {
    surpriseMessage.classList.remove("hidden");
  }

  // Start flower animation
  if (flowerTransition) {
    flowerTransition.classList.add("show-flowers");
  }

  // Change button text
  surpriseBtn.textContent = "Your Surprise Is Opened 💗";

  // Reveal hidden sections one by one
  hiddenSections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.remove("hidden-content");
      section.classList.add("reveal-content");
    }, 900 + index * 250);
  });

  // Start music after button click
  const music = document.getElementById("music");

  if (music) {
    music.volume = 0.5;

    music.play()
      .then(() => {
        console.log("Music started successfully");
      })
      .catch((error) => {
        console.log("Music could not start:", error);
      });
  }

  // Disable button after clicking
  surpriseBtn.disabled = true;
});


// Countdown timer
const birthdayDate = new Date(
  "September 25, 2026 00:00:00"
).getTime();

const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const difference = birthdayDate - now;

  if (difference <= 0) {
    clearInterval(countdownTimer);

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    document.getElementById("countdownText").textContent =
      "Your special day is here! 🎉❤️";

    const birthdayWish = document.getElementById("birthdayWish");

    if (birthdayWish) {
      birthdayWish.classList.remove("hidden");
    }

    return;
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");

}, 1000);