# factory-test-app

소프트웨어 팩토리 플랫폼의 시험 대상입니다. 허용된 운영자가 이슈에 `factory:go` 라벨을 붙일 때만 에이전트가 실행됩니다. 다른 사람의 이슈와 라벨은 처리하지 않습니다.

## greet 사용 예시

```js
import assert from "node:assert/strict";
import { greet } from "./src/greet.js";

assert.equal(greet("Factory"), "Hello, Factory!");
assert.equal(greet(), "Hello, world!");
```

## 실행 방법

시험은 저장소 루트에서 다음 명령으로 실행합니다.

```sh
npm test
```

## 기여

변경이 필요하면 이슈로 요청해 주세요.

## 실행 환경

Node.js 24가 필요합니다.

오타 점검 완료
