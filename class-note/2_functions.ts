// 함수의 파라미터에 타입을 정의
function sum(a: number, b: number) {
  return a + b;
}

// 함수의 반환 값에 타입을 정의
function sum2(): number {
  return 10;
}

function sum3(a: number, b: number): number {
  return a + b;
}

sum3(10, 20);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {}

log('hello');
log('hello', 'ts');
log('hello', 'ts', '!');
