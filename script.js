// <!--
//   Copyright (c) 2023 for page frontend magic tricks. All rights reserved.
//   This code is licensed under the MIT License.
// -->

function updateTime() {
  const analogHands = {
    hour: document.getElementById("hour-hand"),
    minute: document.getElementById("minute-hand"),
    second: document.getElementById("second-hand"),
  };
  const timeElement = document.getElementById("time");
  const now = new Date();

  // Analog clock
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  //digital clock
  const dighours = String(now.getHours()).padStart(2, "0");
  const digminutes = String(now.getMinutes()).padStart(2, "0");
  const digseconds = String(now.getSeconds()).padStart(2, "0");

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes * 60 + seconds) / 3600) * 360;
  const hourDeg = ((hours * 3600 + minutes * 60 + seconds) / 43200) * 360;
  const currentTime = `${dighours}:${digminutes}:${digseconds}`;
  analogHands.second.style.transform = `translateX(-50%) translateY(0) rotate(${secondDeg}deg)`;
  analogHands.minute.style.transform = `translateX(-50%) translateY(0) rotate(${minuteDeg}deg)`;
  analogHands.hour.style.transform = `translateX(-50%) translateY(0) rotate(${hourDeg}deg)`;
  timeElement.textContent = currentTime;
}

updateTime();
setInterval(updateTime, 1000);
