const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const futureDate = new Date(tempYear, tempMonth, tempDay +10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}`

// future time in miliseconds

const futureTime = futureDate.getTime()


function getRemainingTime(){
  const today = new Date().getTime()
  const t = futureTime - today
  
// values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;

  // calvulate all values
  let days = t/oneDay
  days = Math.floor(days)

  let hours = (t % oneDay)/oneHour
  hours = Math.floor(hours)
  let minutes = Math.floor((t % oneHour)/ oneMin)
  let seconds = Math.floor((t % oneMin)/ 1000)
  
  // Set value arrays
  const values = [days,hours,minutes,seconds]

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index])
  })

  if(t<0){
    clearInterval(countDown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}

// countdown
let countDown = setInterval(getRemainingTime, 1000)


getRemainingTime()