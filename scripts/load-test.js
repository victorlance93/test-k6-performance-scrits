import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = { scenarios: {
  shared_iter_scenario: {
    executor: "shared-iterations",
    vus: 250, 
  stages: [
    { duration: '5m', target: 250 }, 
    { duration: '10m', target: 250 }, 
    { duration: '5m', target: 0 }, 
  ],
  },
  per_vu_scenario: {
    executor: "per-vu-iterations",
    vus: 100, 
    stages: [
      { duration: '5m', target: 100 }, 
      { duration: '30m', target: 100 }, 
      { duration: '5m', target: 0 }, 
    ],
  },
},
};

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }

export default function () {
    const res = http.get("https://httpbin.test.k6.io/etag/{etag}");
    if (res.status === 200) {
        check(res, { 'status was 200': (r) => r.status == 200 });
      console.log("Status 200 OK");
    } else if (res.status === 400) {
        check(res, { 'status was 400': (r) => r.status == 400 });
      console.log("Status 400 Bad Request");
    } else {
      console.log(`Status ${res.status}`);
    }
    sleep(1);
    const res1 = http.get("https://httpbin.test.k6.io/headers");
    if (res1.status === 200) {
        check(res, { 'status was 200': (r) => r.status == 200 });
      console.log("Status 200 OK");
    } else if (res1.status === 400) {
      console.log("Status 400 Bad Request");
      check(res, { 'status was 400': (r) => r.status == 400 });
    } else {
      console.log(`Status ${res1.status}`);
    }
    sleep(1);
  }