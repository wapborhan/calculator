const calculate = document.querySelector(".calculate");

calculate.addEventListener("click", (e) => {
  e.preventDefault();

  const billAmt = document.getElementById("amount").value;

  const percentage = document.getElementById("discount-percentage").value;

  const discountAmt = document.getElementById("discount-amount");
  const FinalPay = document.getElementById("pay");

  discountAmt.value = (billAmt * percentage) / 100;
  FinalPay.value = billAmt - discountAmt.value;
});
