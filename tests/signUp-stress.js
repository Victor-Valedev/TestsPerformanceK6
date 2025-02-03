import http from "k6/http";
import { sleep, check } from "k6";

import uuid from "./libs/uuid.js";

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
//gerar relatório com plugin k6-reporter.
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
};

export const options = {
  stages: [
    { duration: "2m", target: 100 }, //target é o número de users para o teste de stress.
    { duration: "5m", target: 100 },
    { duration: "2m", target: 200 },
    { duration: "5m", target: 200 },
    { duration: "2m", target: 300 },
    { duration: "5m", target: 300 },
    { duration: "2m", target: 400 },
    { duration: "5m", target: 400 },
    { duration: "10m", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<2000"], // 95% das requisições devem responder em até 2s.
    http_req_failed: ["rate<0.01"], // 1% das requisições podem ocorrer erro.
  },
};

export default function () {
  const url = "http://localhost:3333/signup";

  const payload = JSON.stringify({
    email: `${uuid.v4().substring(24)}@qa.colmeia.com.br`,
    password: "pwd123",
  });

  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //realiazando um requisição get na api.
  //const res = http.get("http://localhost:3333");
  const res = http.post(url, payload, headers);

  //console.log(res.body);

  //realiza o checkin em cada requisição se o stauscode foi igual 200.
  check(res, {
    "status should be 201": (r) => r.status === 201,
  });

  sleep(1); //espera 1s a cada requisição feita.
}
