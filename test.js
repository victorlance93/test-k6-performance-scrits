import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 200, 
  stages: [
    { duration: '5s', target: 100 },
    { duration: '10s', target: 200 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res, { 'status was 200': (r) => r.status == 200 });

  sleep(1);

  const res1 = http.get('https://httpbin.test.k6.io/');
  check(res1, { 'status was 400': (r) => r.status !== 400 });

  sleep(1);
}
