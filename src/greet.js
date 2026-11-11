// 이름을 받아 "Hello, <name>!" 형태의 인사말 문자열을 반환한다.
export function greet(name = "world") {
  return `Hello, ${name}!`;
}
