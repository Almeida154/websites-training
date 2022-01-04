/* === Clock === */
const hour = document.getElementById('clock-hour');
const minute = document.getElementById('clock-minute');
const second = document.getElementById('clock-second');

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6;

  // Rotating Elementes
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  second.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000);

/* === Date === */
const textHour = document.getElementById('text-hour');
const textMinute = document.getElementById('text-minute');
const textAmPm = document.getElementById('text-ampm');

const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const dateYear = document.getElementById('date-year');

const clockText = () => {
  let date = new Date();

  let hh = date.getHours(),
    mm = date.getMinutes(),
    ampm,
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();

  // 24 to 12 hours
  if (hh >= 12) {
    hh -= 12;
    ampm = 'PM';
  } else {
    ampm = 'AM';
  }

  // We detect when it's 0 AM and transform to 12 AM
  if (hh == 0) hh = 12;

  // Show zero before hour
  if (hh < 10) hh = `0${hh}`;

  // Show hour
  textHour.innerHTML = `${hh}:`;

  // Show zero before minutes
  if (mm < 10) mm = `0${mm}`;

  // Show minutes
  textMinute.innerHTML = `${mm}`;

  // Show am or pm
  textAmPm.innerHTML = ampm;

  // Show month and year
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]}`;
  dateYear.innerHTML = year;
};

setInterval(clockText, 1000);

/* === Dark / Light Theme === */
const switcherThemeBtn = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

// If already set
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Getting current theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  document.body.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

switcherThemeBtn.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  switcherThemeBtn.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
