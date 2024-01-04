import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 2000,
  stages: [
    { duration: '2m', target: 2000 },
    { duration: '1m', target: 0 },
  ],
};

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export default function () {
  group('Requisicao GET', function () {
    const res = http.get("https://httpbin.test.k6.io/headers");
    console.log(`GET Status ${res.status}`);
    sleep(1);
  });

  group('Requisicao POST', function () {
    const res = http.post("https://httpbin.test.k6.io/response-headers?freeform=200");
    console.log(`POST Status ${res.status}`);
    sleep(1);
  });

  group('Requisicao PUT', function () {
    const res = http.put("https://httpbin.test.k6.io/anything");
    console.log(`PUT Status ${res.status}`);
    sleep(1);
  });

  group('Requisicao PATCH', function () {
    const res = http.patch("https://httpbin.test.k6.io/anything/{anything}");
    console.log(`PATCH Status ${res.status}`);
    sleep(1);
  });
}
