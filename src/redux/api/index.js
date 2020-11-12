export function apiGetCall(method, url) {
  return fetch(url, {
    method,
  }).then((response) => response.json());
}

export function apiPostCall(method, url, body) {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function apiDeleteCall(method, url, body) {
  return fetch(url, {
    method,
    body,
  }).then((response) => response.json());
}

export function apiPutCall(method, url, body) {
  return fetch(url, {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}
