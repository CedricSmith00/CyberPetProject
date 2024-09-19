document.addEventListener("DOMContentLoaded", () => {
  let intervalTimer;
  const progressBar = document.getElementById("progressBar1"); // Health
  const progressBar3 = document.getElementById("progressBar3"); // Hunger
  const progressBar4 = document.getElementById("progressBar4"); // Tiredness
  const progressBar5 = document.getElementById("progressBar5"); // Thirst
  const feedButton = document.getElementById("food");
  const sleepButton = document.getElementById("sleep");
  const drinkButton = document.getElementById("drink");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const message = document.getElementById("message");

  let countervalue = 100;
  let progressBarvalue = 100; // Health
  let progressBarvalue3 = 100; // Hunger
  let progressBarvalue4 = 100; // Tiredness
  let progressBarvalue5 = 100; // Thirst

  // Function to update progress bars
  const updateProgressBars = () => {
    progressBar.value = Math.max(0, Math.min(100, progressBarvalue));
    progressBar3.value = Math.max(0, Math.min(100, progressBarvalue3));
    progressBar4.value = Math.max(0, Math.min(100, progressBarvalue4));
    progressBar5.value = Math.max(0, Math.min(100, progressBarvalue5));
  };

  startBtn.addEventListener("click", () => {
    intervalTimer = setInterval(() => {
      // Decrease values for all progress bars
      progressBarvalue -= 1;
      progressBarvalue3 -= 1;
      progressBarvalue4 -= 1;
      progressBarvalue5 -= 1;
      countervalue -= 1;

      updateProgressBars();

      if (countervalue <= 0 || progressBarvalue <= 0 || progressBarvalue3 <= 0) {
        clearInterval(intervalTimer);
        startBtn.disabled = true;
        stopBtn.disabled = true;
        message.textContent = "Game Over";
      }
    }, 1000);
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(intervalTimer);
  });

  feedButton.addEventListener("click", () => {
    if (progressBarvalue3 < 100) progressBarvalue3 += 5; // Increase hunger level
    // Optionally increase health
    if (progressBarvalue < 100) progressBarvalue += 5;
    updateProgressBars();
  });

  sleepButton.addEventListener("click", () => {
    if (progressBarvalue4 < 100) progressBarvalue4 += 5; // Increase tiredness level
    // Optionally increase health
    if (progressBarvalue < 100) progressBarvalue += 5;
    updateProgressBars();
  });

  drinkButton.addEventListener("click", () => {
    if (progressBarvalue5 < 100) progressBarvalue5 += 5; // Increase thirst level
    // Optionally increase health
    if (progressBarvalue < 100) progressBarvalue += 5;
    updateProgressBars();
  });
});
