const fetchWithToken = async (url, token) => {
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });
  console.log(`response.ok: ${response.ok}, response.status: ${response.status}`)

  return await response.json();
};

const testFetch = async () => {
  const tokenFix =
    "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0aGVib3NzLlVAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODUwMjI3MDUsImV4cCI6MTY4NTYyNzUwNX0.d9NiQeMDL8sXabToHE0HzayhEFFc_DhrVSd8vSXqAubwOWDTI4q8iOphIxQi48An";

  const urlFix = "http://localhost:8080/api/reports";

  const result = await fetchWithToken(urlFix, tokenFix);

  console.log(`response.json: ${JSON.stringify(result, null ,2)}`);
}

export default testFetch;

export {fetchWithToken, testFetch};
