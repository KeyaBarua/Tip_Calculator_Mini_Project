// Global Access to all the variables.
let billInputDiv = document.getElementById("billInputDiv")
let tipInputDiv = document.getElementById("tipInputDiv")
let peopleNumberDiv = document.getElementById("numberOfPeople")
let perPersonTotalDiv = document.getElementById("perPersonTotal")

// Get number of people from peopleNumberDiv
let numberPeople = Number(peopleNumberDiv.innerText)

// Functions
// ** Calculate the total bill per person **
const calculateBill = () => {
  let billInput = Number(billInputDiv.value)
  let tipInput = Number(tipInputDiv.value)

  // Converting tip to percentage
  let tipPercentage = tipInput / 100
  // Calculating total tip
  let tipAmount = billInput * tipPercentage

  let total = billInput + tipAmount

  // Calculating total per person
  let totalPerPerson = total / numberPeople

  // Updating it into the DOM
  perPersonTotalDiv.innerText = "$" + totalPerPerson.toFixed(2)
}

// ** Splits the bill between more people **
const increasePeople = () => {
  numberPeople += 1
  peopleNumberDiv.innerText = numberPeople
  calculateBill()
}

// ** Splits the bill between lesser people ** 
const decreasePeople = () => {
  if (numberPeople > 1) {
    numberPeople -= 1
  }
  else {
    return
  }
  peopleNumberDiv.innerText = numberPeople
  calculateBill()
}
