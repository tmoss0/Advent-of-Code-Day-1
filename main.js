const fs = require('fs');
let sum = 0;

try {
  const data = fs.readFileSync('strings.txt', 'utf8');
  const parsedData = data.split('\r\n');
  console.log(parsedData.length);
  parsedData.forEach(line => {
    const integerRegex = /^\D*(\d).*\D(\d)\D*$/;
    const match = line.match(integerRegex);
    if (match) {
      const firstDigit = match[1];
      const lastDigit = match[2] || match[1];
      const combinedDigits = parseInt(`${firstDigit}${lastDigit}`);
      sum += combinedDigits;

      console.log(`Input String: ${line}`);
      // console.log(`First Digit: ${firstDigit}`);
      // console.log(`Last Digit: ${lastDigit}`);
      console.log(`Combined Digits: ${combinedDigits}`);
      // console.log(`Sum: ${sum}`);
    }
  });
  console.log(parsedData);
} catch (err) {
  console.error(err);
}