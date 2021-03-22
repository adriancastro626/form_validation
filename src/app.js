let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function(e) {
  //VALIDATION FOR CARD NUMBER

  let inputCardNumber = document.getElementById("inputCardNumber");

  if (inputCardNumber.value === "") {
    let cardNumberAlert = document.createElement("div");
    cardNumberAlert.className = "text-danger";
    cardNumberAlert.innerHTML =
      "<small>Please enter valid card number.</small>";
    document.getElementById("cardNumberDiv").appendChild(cardNumberAlert);
    inputCardNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (
    inputCardNumber.value.length !== 16 &&
    inputCardNumber.value.length !== 0
  ) {
    let cardNumberAlert = document.createElement("div");
    cardNumberAlert.className = "text-danger";
    cardNumberAlert.innerHTML =
      "<small>Card number should be 16 digits.</small>";
    document.getElementById("cardNumberDiv").appendChild(cardNumberAlert);
    inputCardNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (isNaN(inputCardNumber.value)) {
    let cardNumberAlert = document.createElement("div");
    cardNumberAlert.className = "text-danger";
    cardNumberAlert.innerHTML =
      "<small>Card number should only contain numbers.</small>";
    document.getElementById("cardNumberDiv").appendChild(cardNumberAlert);
    inputCardNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  // VALIDATION FOR CVC NUMBER

  let inputCVCNumber = document.getElementById("inputCVCNumber");

  if (inputCVCNumber.value === "") {
    let cvcNumberAlert = document.createElement("div");
    cvcNumberAlert.className = "text-danger";
    cvcNumberAlert.innerHTML = "<small>Please enter valid CVC number.</small>";
    document.getElementById("cvcNumberDiv").appendChild(cvcNumberAlert);
    inputCVCNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (inputCVCNumber.value.length !== 4 && inputCVCNumber.value.length !== 0) {
    let cvcNumberAlert = document.createElement("div");
    cvcNumberAlert.className = "text-danger";
    cvcNumberAlert.innerHTML = "<small>CVC number should be 4 digits.</small>";
    document.getElementById("cvcNumberDiv").appendChild(cvcNumberAlert);
    inputCVCNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (isNaN(inputCVCNumber.value)) {
    let cvcNumberAlert = document.createElement("div");
    cvcNumberAlert.className = "text-danger";
    cvcNumberAlert.innerHTML =
      "<small>CVC number should only contain numbers.</small>";
    document.getElementById("cvcNumberDiv").appendChild(cvcNumberAlert);
    inputCVCNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  // VALIDATION FOR AMOUNT

  let inputAmount = document.getElementById("inputAmount");

  if (inputAmount.value === "" || isNaN(inputAmount.value)) {
    let amountAlert = document.createElement("div");
    amountAlert.className = "text-danger";
    amountAlert.innerHTML = "<small>Please enter valid amount.</small>";
    document.getElementById("amountDiv").appendChild(amountAlert);
    inputAmount.className = "form-control border border-danger";
    e.preventDefault();
  }

  // VALIDATION FOR FIRST NAME

  let inputFirstName = document.getElementById("inputFirstName");

  if (inputFirstName.value === "") {
    let nameAlert = document.createElement("div");
    nameAlert.className = "text-danger";
    nameAlert.innerHTML = "<small>Please enter valid name.</small>";
    document.getElementById("nameDiv").appendChild(nameAlert);
    inputFirstName.className = "form-control border border-danger";
    e.preventDefault();
  }

  // VALIDATION FOR LAST NAME

  let inputLastName = document.getElementById("inputLastName");

  if (inputLastName.value === "") {
    let lastnameAlert = document.createElement("div");
    lastnameAlert.className = "text-danger";
    lastnameAlert.innerHTML = "<small>Please enter valid lastname.</small>";
    document.getElementById("lastnameDiv").appendChild(lastnameAlert);
    inputLastName.className = "form-control border border-danger";
    e.preventDefault();
  }

  //VALIDATION FOR CITY

  let inputCity = document.getElementById("inputCity");

  if (inputCity.value === "") {
    let cityAlert = document.createElement("div");
    cityAlert.className = "text-danger";
    cityAlert.innerHTML = "<small>Please enter valid city.</small>";
    document.getElementById("cityDiv").appendChild(cityAlert);
    inputCity.className = "form-control border border-danger";
    e.preventDefault();
  }

  //VALIDATION FOR STATE

  let inputState = document.getElementById("inputState");

  if (inputState.value === "") {
    let stateAlert = document.createElement("div");
    stateAlert.className = "text-danger";
    stateAlert.innerHTML = "<small>Please select state.</small>";
    document.getElementById("stateDiv").appendChild(stateAlert);
    inputState.className = "form-control custom-select border border-danger";
    e.preventDefault();
  }

  //VALIDATION FOR POSTAL CODE

  let inputPostalCode = document.getElementById("inputPostalCode");

  if (inputPostalCode.value === "") {
    let postalCodeAlert = document.createElement("div");
    postalCodeAlert.className = "text-danger";
    postalCodeAlert.innerHTML =
      "<small>Please enter valid postal code.</small>";
    document.getElementById("postalCodeDiv").appendChild(postalCodeAlert);
    inputPostalCode.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (isNaN(inputPostalCode.value)) {
    let postalCodeAlert = document.createElement("div");
    postalCodeAlert.className = "text-danger";
    postalCodeAlert.innerHTML =
      "<small>Postal Code should only contain numbers.</small>";
    document.getElementById("postalCodeDiv").appendChild(postalCodeAlert);
    inputPostalCode.className = "form-control border border-danger";
    e.preventDefault();
  }
});

let resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", function(e) {
  document.getElementById("myForm").reset();
});
