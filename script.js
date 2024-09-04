let submitBtn = document.querySelector(".sumbit-img");

submitBtn.addEventListener("click", function () {
  let days = document.querySelector("#day");
  let months = document.querySelector("#month");
  let years = document.querySelector("#year");

  checkDate(days);
  checkDate(months);
  checkDate(years);
  if (checkDate(years) && checkDate(months) && checkDate(days)) {
    let dob = new Date(years.value, months.value, days.value);
    let today = new Date();
    console.log(dob.getMonth());
    let age = today.getFullYear() - dob.getFullYear();
    let ageMonth = today.getMonth() - dob.getMonth();
    if (ageMonth < 0) {
      age--;
      ageMonth = 12 + ageMonth;
    }
    console.log(today.getMonth(), dob.getMonth());
    console.log(today.getDate(), dob.getDate());
    let ageDay = today.getDate() - dob.getDate();
    if (ageDay < 0) {
      let daysInLastMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      ageDay = daysInLastMonth + ageDay;
    }

    let ageYearField = document.querySelector(".age-year .num");
    let ageMonthField = document.querySelector(".age-month .num");
    let ageDayField = document.querySelector(".age-day .num");
    ageYearField.innerHTML = age;
    ageMonthField.innerHTML = ageMonth;
    ageDayField.innerHTML = ageDay;
  }
});

function checkDate(date) {
  let dateID = date.id;
  let errorField = document.querySelector(`#${dateID} + .error-msg `);
  if (date.value == "") {
    let msg = dateID + " must be entered";
    errorField.innerHTML = msg;
    errorField.parentNode.classList.add("error");
    return false;
  }
  if (dateID == "day") {
    if (!(date.value > 0 && date.value < 32)) {
      let msg = "Date must be valid";
      errorField.innerHTML = msg;
      errorField.parentNode.classList.add("error");
      return false;
    }
  }
  if (dateID == "month") {
    if (!(date.value > 0 && date.value < 13)) {
      let msg = "Month must be valid";
      errorField.innerHTML = msg;
      errorField.parentNode.classList.add("error");
      return false;
    }
  }
  if (dateID == "year") {
    let currentYear = new Date().getFullYear();
    if (!(date.value > 1900 && date.value < currentYear)) {
      let msg = "Year must be valid";
      errorField.innerHTML = msg;
      errorField.parentNode.classList.add("error");
      return false;
    }
  }
  errorField.parentNode.classList.remove("error");
  return true;
}
