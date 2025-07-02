export const postMethod = async (values, url) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  //cors headers
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Methods", "*");
  headers.append("Access-Control-Allow-Headers", "*");
  headers.append("Expect", "");

  const { username, password } = {
    username: "lodza",
    password: "Password123",
  };

  headers.append("Authorization", "Basic " + btoa(username + ":" + password));

  const request = new Request(url, {
    method: "POST",
    mode: "cors",
    headers: headers,
    body: JSON.stringify(values),
    credentials: "include",
  });

  const response = await fetch(request);
  const results = await response.json();
  return results;
};

export const putMethod = async (values, url) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  //cors headers
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Methods", "*");
  headers.append("Access-Control-Allow-Headers", "*");
  headers.append("Expect", "");

  const { username, password } = {
    username: "lodza",
    password: "Password123",
  };

  headers.append("Authorization", "Basic " + btoa(username + ":" + password));

  const request = new Request(url, {
    method: "PUT",
    mode: "cors",
    headers: headers,
    body: JSON.stringify(values),
    credentials: "include",
  });

  const response = await fetch(request);
  const results = await response.json();
  return results;
};

export const postMethodOpen = async (values, url) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  //cors headers
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Methods", "*");
  headers.append("Access-Control-Allow-Headers", "*");
  headers.append("Expect", "");

  const request = new Request(url, {
    method: "POST",
    mode: "cors",
    headers: headers,
    body: JSON.stringify(values),
    credentials: "include",
  });

  const response = await fetch(request);
  const results = await response.json();
  return results;
};

export const getMethod = async (url) => {
  let headers = new Headers();
  headers.append("Accept", "application/json");

  //cors headers
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Methods", "*");
  headers.append("Access-Control-Allow-Headers", "*");

  const { username, password } = {
    username: "lodza",
    password: "Password123",
  };

  headers.append("Authorization", "Basic " + btoa(username + ":" + password));

  const request = new Request(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
    credentials: "include",
  });

  const response = await fetch(request);
  const results = await response.json();
  return results;
};

export const getMethodInjectAuth = async (url, userId) => {
  let headers = new Headers();
  headers.append("Accept", "application/json");

  //cors headers
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Methods", "*");
  headers.append("Access-Control-Allow-Headers", "*");

  headers.append("Authorization", "Basic " + userId);

  const request = new Request(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
    credentials: "include",
  });

  const response = await fetch(request);
  const results = await response.json();
  return results;
};

export const filesPostMethod = async (
  formData,
  url,
) => {
  let headers = new Headers();

  //cors headers
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  headers.append("Access-Control-Allow-Headers", "Content-Type, Accept");
  headers.append("Expect", "");

  const { username, password } = {
    username: "lodza",
    password: "Password123",
  };

  headers.append("Authorization", "Basic " + btoa(username + ":" + password));

  const request = new Request(url, {
    method: "POST",
    mode: "cors",
    headers: headers,
    body: formData,
    credentials: "include",
  });

  const response = await fetch(request);
  const results = await response.json();
  return results;
};
