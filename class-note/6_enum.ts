// 숫자형 enum

enum Shoes {
  Nike, // 0
  Adidas, // 1
  NewBalance, // 2
}

const myShoes = Shoes.Nike;
console.log(myShoes); //0

// 문자형 enum

enum ShoesKR {
  Nike = '나이키',
  Adidas = '아디아스',
  NewBalance = '뉴발란스',
}

const myShoesKR = ShoesKR.Nike;
console.log(myShoes); // '나이키'

// 예제

enum Answer {
  Yes = 'Y',
  No = 'N',
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}
askQuestion(Answer.Yes);
askQuestion(Answer.No);
