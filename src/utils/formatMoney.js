function formatMoney(money, currency = '₫', isInput = false) {
  if (money) {
    const isNegative = parseInt(money) < 0;
    if (isNegative) money = money.toString().substring(1);
    else money = money.toString();
    if (money.length < 1) {
      return isInput ? '0' : `${currency} 0`;
    } else {
      // If the number is float, get the odd position
      let oddPart = '';
      if (isFloatNumber(money)) {
        const oddPosition = getOddPosition(money);
        oddPart = money.substring(oddPosition);
        money = money.substring(0, oddPosition);
      }
      // Convert the money to a reversed array
      const moneyStringArray = money.split('').reverse();
      // Loop through the array and add dot for every 3 numbers
      let result = [];
      for (let i = 0; i < moneyStringArray.length; i++) {
        result.push(moneyStringArray[i]);
        if (i % 3 === 2) {
          result.push(',');
        }
      }
      // Remove redundant dot or zero at the end of the array
      while (result[result.length - 1] === ',') {
        result.pop();
      }
      // Reverse the array again and join it into a string
      result = result.reverse().join('');
      // Include the odd part
      result += oddPart;
      // if (isNegative) result = `-${result}`;
      return isInput ? result : `${currency} ${result}`;
    }
  } else {
    return isInput ? '0' : `${currency} 0`;
  }
}

function isFloatNumber(number) {
  if (number.indexOf('.') !== -1 || number.indexOf(',') !== -1) return true;
  return false;
}

function getOddPosition(number) {
  if (number.indexOf('.') !== -1) return number.indexOf('.');
  else if (number.indexOf(',') !== -1) return number.indexOf(',');
}

export default formatMoney;
