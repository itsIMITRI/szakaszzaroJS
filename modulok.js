const osszeadas = (num1, num2) => {
  return num1 + num2;
};

const szorzas = (num1, num2) => {
  return num1 * num2;
};

const hatvany = (num1, num2) => {
  let res = Math.pow(num1, num2);
  return res;
};

module.exports = {
  osszeadas,
  szorzas,
  hatvany,
};
