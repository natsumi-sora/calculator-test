document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const equals = document.querySelector('.equals');
    const clear = document.querySelector('.clear'); 
  
    numbers.forEach((button) => {
      button.addEventListener('click', () => {
        display.value += button.getAttribute('data-number');
      });
    });
  
    operators.forEach((button) => {
      button.addEventListener('click', () => {
        display.value += ` ${button.getAttribute('data-operator')} `;
      });
    });
  
    equals.addEventListener('click', () => {
      try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
      } catch (error) {
        display.value = "Error";
      }
    });
  
    clear.addEventListener('click', () => {
      display.value = "";
    });
  });
  