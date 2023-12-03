const fs = require('fs');
let sum = 0;

// Part 2 parse combined words
const mapSpelledNumber = (word) => {
  const numberMap = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    oneight: '18',
    twone: '21',
    threeight: '38',
    fiveight: '58',
    sevenine: '79',
    eightwo: '82',
    eighthree: '83',
    nineight: '98',
  };
  return numberMap[word];
};

try {
  const data = fs.readFileSync('strings.txt', 'utf8');
  const parsedData = data.split('\r\n');
  const regex = /\d/g;
  parsedData.forEach((line) => {
    let lineWithDigits = line;
    if (/oneight|twone|threeight|fiveight|sevenine|eightwo|eighthree|nineight|zero|one|two|three|four|five|six|seven|eight|nine/i.test(line)) {
      lineWithDigits = line.replace(
        /(oneight|twone|threeight|fiveight|sevenine|eightwo|eighthree|nineight|zero|one|two|three|four|five|six|seven|eight|nine)/gi,
        (p1) => mapSpelledNumber(p1)
      );
    }
    const matches = lineWithDigits.match(regex);
    if (matches) {
      const firstDigit = matches[0];
      const lastDigit = matches[matches.length - 1] || firstDigit;
      sum += parseInt(`${firstDigit}${lastDigit}`);
    }
  });
} catch (err) {
  console.error(err);
}

console.log(`Sum: ${sum}`);
