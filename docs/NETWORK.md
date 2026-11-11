# 네트워크 점검 결과

샌드박스에서 아래 명령을 실제로 실행한 결과이다. 실패한 명령은 실패한 그대로 기록했다.

| 명령 | HTTP 상태 코드 | 응답 첫 줄 |
|------|----------------|------------|
| `curl -s -m 20 -o /dev/null -w "%{http_code}" https://example.com/` | 403 | (본문 출력 없음) |
| `curl -s -m 20 https://example.com/ \| head -1` | - | `DENIED: host_not_allowed` |
| `curl -s -m 20 -o /dev/null -w "%{http_code}" https://api.github.com/zen` | 403 | (본문 출력 없음) |

세 요청 모두 샌드박스의 프록시가 `host_not_allowed`로 차단했다. 즉 외부 호스트에는 접근할 수 없다.
