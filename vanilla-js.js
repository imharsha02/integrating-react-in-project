window.counterState = {
  count: 0,
  listeners: [],
};

// Function to update counter and notify React
window.updateCounter = function (newCount) {
  window.counterState.count = newCount;
  // Notify React listeners
  window.counterState.listeners.forEach((listener) => listener());
};

document.addEventListener("DOMContentLoaded", function () {
  const incrementBtn = document.getElementById("increment-btn");
  const decrementBtn = document.getElementById("decrement-btn");

  incrementBtn.addEventListener("click", function () {
    window.updateCounter(window.counterState.count + 1);
  });

  decrementBtn.addEventListener("click", function () {
    window.updateCounter(window.counterState.count - 1);
  });
});
