import React from "react";

const Counter = () => {
  // Set the date we're counting down to
  const countDownDate = new Date("July 7, 2018 18:00:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(function() {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the element with id="demo"
    document.getElementById("counter").innerHTML =
      '<div class="time__wrapper"><div class="time">' +
      days +
      "</div><div>Days</div></div>" +
      '<div class="time__wrapper"><div class="time">' +
      hours +
      "</div><div>Hours</div></div>" +
      '<div class="time__wrapper"><div class="time">' +
      minutes +
      "</div><div>Minutes</div></div>";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("counter").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div className="counter">
      <h3>Countdown to the wedding !</h3>
      <div className="countdown" id="counter" />
    </div>
  );
};

export default Counter;
