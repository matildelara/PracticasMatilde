const display = document.getElementById('display');
const history = [];


const clearDisplay = () => {
  display.value = '';
};


const appendToDisplay = (value) => {
  display.value += value;
};




const deleteLastDigit = () => {
  const currentExpression = display.value;
  display.value = currentExpression.slice(0, -1);
};


const calculateResult = () => {
  try {

    const expression = display.value;


    const result = parseFloat(eval(expression).toFixed(10));


    display.value = result;


    
  } catch (error) {

    display.value = 'Error';
  }
};
