document.getElementById('button').addEventListener('click', buttonOne)
// add button to my webpage
let age = 0
let day = 'Monday'
// set age and day as variables
function buttonOne () {
  day = document.getElementById('day').value

  age = document.getElementById('age').value
  age = parseInt(age)
// set age and day as values but set age as a parseInt
  if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && (age < 18)) {
    document.getElementById('text').innerHTML = 'Time for school'
  } else if ((day !== 'Saturday' && day !== 'Sunday') && (age >= 18)) {
    document.getElementById('text').innerHTML = 'Time to go to work'
  } else {
    document.getElementById('text').innerHTML = 'Time to relax for the weekend'
  }// make a message appear based on the day of the week and age of the person
}
