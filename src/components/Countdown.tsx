import "../styles/Countdown.css";

const countdownDate = new Date("June 14, 2024 12:00:00").getTime();

setInterval(() => {
  const currentTime: number = new Date().getTime();
  const remainingTime: number = countdownDate - currentTime;

  const weeks = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  (document.getElementById("weeks") as HTMLElement).innerHTML =
    weeks.toString();
  (document.getElementById("days") as HTMLElement).innerHTML = days.toString();
  (document.getElementById("hours") as HTMLElement).innerHTML =
    hours.toString();
  (document.getElementById("minutes") as HTMLElement).innerHTML =
    minutes.toString();
  (document.getElementById("seconds") as HTMLElement).innerHTML =
    seconds.toString();
}, 1000);

function Countdown() {
  return (
    <>
      <div className="countdown-title">Our first project is coming soon!</div>

      <div className="countdown-container">
        <div className="time-container">
          <p id="weeks">00</p>
          <span className="time-text">Weeks</span>
        </div>

        <div className="time-container">
          <p id="days">00</p>
          <span className="time-text">Days</span>
        </div>

        <div className="time-container">
          <p id="hours">00</p>
          <span className="time-text">Hours</span>
        </div>

        <div className="time-container">
          <p id="minutes">00</p>
          <span className="time-text">Minutes</span>
        </div>

        <div className="time-container">
          <p id="seconds">00</p>
          <span className="time-text">Seconds</span>
        </div>
      </div>
    </>
  );
}

export default Countdown;
