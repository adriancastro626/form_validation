let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function(e) {
  //Validacion de la TC

  let inputCardNumber = document.getElementById("inputCardNumber");

  if (inputCardNumber.value === "") {
    let cardNumberAlert = document.createElement("div");
    cardNumberAlert.className = "text-danger";
    cardNumberAlert.innerHTML =
      "<small>Ingrese un numero de Tarjeta Valido</small>";
    document.getElementById("cardNumberDiv").appendChild(cardNumberAlert);
    inputCardNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (
    inputCardNumber.value.length !== 18 &&
    inputCardNumber.value.length !== 0
  ) {
    let cardNumberAlert = document.createElement("div");
    cardNumberAlert.className = "text-danger";
    cardNumberAlert.innerHTML = "<small>Ingrese 18 digitos</small>";
    document.getElementById("cardNumberDiv").appendChild(cardNumberAlert);
    inputCardNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (isNaN(inputCardNumber.value)) {
    let cardNumberAlert = document.createElement("div");
    cardNumberAlert.className = "text-danger";
    cardNumberAlert.innerHTML = "<small>Ingrese solo numeros</small>";
    document.getElementById("cardNumberDiv").appendChild(cardNumberAlert);
    inputCardNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  // Validacion de CVC

  let inputCVCNumber = document.getElementById("inputCVCNumber");

  if (inputCVCNumber.value === "") {
    let cvcNumberAlert = document.createElement("div");
    cvcNumberAlert.className = "text-danger";
    cvcNumberAlert.innerHTML = "<small>Ingrese un CVC Valido</small>";
    document.getElementById("cvcNumberDiv").appendChild(cvcNumberAlert);
    inputCVCNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (inputCVCNumber.value.length !== 4 && inputCVCNumber.value.length !== 0) {
    let cvcNumberAlert = document.createElement("div");
    cvcNumberAlert.className = "text-danger";
    cvcNumberAlert.innerHTML = "<small>CVC deberia tener 4 digitos</small>";
    document.getElementById("cvcNumberDiv").appendChild(cvcNumberAlert);
    inputCVCNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (isNaN(inputCVCNumber.value)) {
    let cvcNumberAlert = document.createElement("div");
    cvcNumberAlert.className = "text-danger";
    cvcNumberAlert.innerHTML = "<small>Ingrese solo numeros</small>";
    document.getElementById("cvcNumberDiv").appendChild(cvcNumberAlert);
    inputCVCNumber.className = "form-control border border-danger";
    e.preventDefault();
  }

  // Validacion del monto

  let inputAmount = document.getElementById("inputAmount");

  if (inputAmount.value === "" || isNaN(inputAmount.value)) {
    let amountAlert = document.createElement("div");
    amountAlert.className = "text-danger";
    amountAlert.innerHTML = "<small>Agregue un monto superior a $10.00</small>";
    document.getElementById("amountDiv").appendChild(amountAlert);
    inputAmount.className = "form-control border border-danger";
    e.preventDefault();
  }

  // Validacion nombre

  let inputFirstName = document.getElementById("inputFirstName");

  if (inputFirstName.value === "") {
    let nameAlert = document.createElement("div");
    nameAlert.className = "text-danger";
    nameAlert.innerHTML = "<small>Ingrese un nombre valido</small>";
    document.getElementById("nameDiv").appendChild(nameAlert);
    inputFirstName.className = "form-control border border-danger";
    e.preventDefault();
  }

  // Validacion del apellido

  let inputLastName = document.getElementById("inputLastName");

  if (inputLastName.value === "") {
    let lastnameAlert = document.createElement("div");
    lastnameAlert.className = "text-danger";
    lastnameAlert.innerHTML = "<small>Ingrese un nombre valido</small>";
    document.getElementById("lastnameDiv").appendChild(lastnameAlert);
    inputLastName.className = "form-control border border-danger";
    e.preventDefault();
  }

  //Validacion de la ciudad

  let inputCity = document.getElementById("inputCity");

  if (inputCity.value === "") {
    let cityAlert = document.createElement("div");
    cityAlert.className = "text-danger";
    cityAlert.innerHTML = "<small>Ingrese una Ciudad Valida</small>";
    document.getElementById("cityDiv").appendChild(cityAlert);
    inputCity.className = "form-control border border-danger";
    e.preventDefault();
  }

  //Validacion de Canton

  let inputState = document.getElementById("inputState");

  if (inputState.value === "") {
    let stateAlert = document.createElement("div");
    stateAlert.className = "text-danger";
    stateAlert.innerHTML = "<small>Elija un Canton Valido</small>";
    document.getElementById("stateDiv").appendChild(stateAlert);
    inputState.className = "form-control custom-select border border-danger";
    e.preventDefault();
  }

  //Validacion codigo postal

  let inputPostalCode = document.getElementById("inputPostalCode");

  if (inputPostalCode.value === "") {
    let postalCodeAlert = document.createElement("div");
    postalCodeAlert.className = "text-danger";
    postalCodeAlert.innerHTML = "<small>Ingrese codigo postal valido</small>";
    document.getElementById("postalCodeDiv").appendChild(postalCodeAlert);
    inputPostalCode.className = "form-control border border-danger";
    e.preventDefault();
  }

  if (isNaN(inputPostalCode.value)) {
    let postalCodeAlert = document.createElement("div");
    postalCodeAlert.className = "text-danger";
    postalCodeAlert.innerHTML = "<small>Ingrese solo numeros</small>";
    document.getElementById("postalCodeDiv").appendChild(postalCodeAlert);
    inputPostalCode.className = "form-control border border-danger";
    e.preventDefault();
  }
});

let resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", function(e) {
  document.getElementById("myForm").reset(e);
});
