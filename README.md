# Sprint 7 projectls

\*
PROJECT NAME — Sprint 7 Urban Grocers

DESCRIPTION — These tests were created to check the GET, POST, PUT, and DELETE requests. Each one has two tests. one checks the response status code, and the other checks the response body for expected data. Testing the request structure, URL structure, response methods, and response structure.

TECHNOLOGIES
VS Code
Mac Terminal
Macbook Pro(Retina, 15-inch, Mid 2015)
macOS Monterey v12.6.5

TECHNIQUES
GET request
POST request
DELETE Request
PUT Request

INSTRUCTIONS
---GET Request---

1. Create an `async function getRequest()`
2. Place try/catch block code inside `async function getRequest()`
3. Place the endpoint URL,/api/v1/warehouses, inside `fetch()` so the HTTP request knows where to go
4. Add `const data = await response.json()` after adding the endpoint
5. Add `console.log(data)`to print the response in the console
6. Next add the test method by creating a string that describes the test suite and a callback function to wrap the test. `test('test should be 200', async () =>`
7. Create the variable `let actualStatus` so the expected response has something to compare to
8. Place the endpoint URL,/api/v1/warehouses, inside `fetch()` so the HTTP request knows where to go
9. Extract the response status code from the response by adding `actualStatus = response.status;` after adding the endpoint URL
10. Add the expected value by connecting the actualStatus variable with a toBe matcher. `await expect(actualStatus).toBe(200);` and `await getRequest();`
11. Run test in the terminal by using `npx jest getHandlers.test.js`

---POST Request---

1. In the requestBody add the delivery time, id, and quantity to products
2. Add the test method string ‘status should be 200’ to describe the test suite
3. Create let variable actualStatus in the test code right before the try/catch block
4. Place the endpoint URL,`/everything-you-need/v1/calculate`, inside `fetch()` so the HTTP request knows where to go
5. Add `actualStatus = response.status` to extract the response status code from the response right above `catch (error)`
6. Create `async function postRequest()` and place the same try/catch block again inside the function
7. Replace `actualStatus = response.status` with `const data = await response.json()`; and `console.log(data)` to extract the json data from the response and print to the console
8. Finally, add `await expect(actualStatus).toBe(200)` and `await postRequest();` so the test code knows what to compare the actual result to the expected result and to retrieve the warehouse data.

---PUT Request---

1. In the requestBody add the id and quantity to products you want to add to the kit
2. Add the test method string ‘status should be 200’ to describe the test suite
3. Create let variable actualStatus in the test code right before the try/catch block
4. Place the endpoint URL,`/api/v1/kits/6`, inside `fetch()` so the HTTP request knows where to go
5. Add `actualStatus = response.status` to extract the response status code from the response right above `catch (error)`
6. Create `async function putRequest()` and place the same try/catch block again inside the function
7. Replace `actualStatus = response.status` with `const data = await response.json()`; and `console.log(data)` to extract the json data from the response and print to the console
8. Finally, add `await expect(actualStatus).toBe(200)` and `await putRequest();` so the test code knows what to compare the actual result to the expected result and to retrieve the warehouse data.

---DELETE Request---

1. Add the test method string ‘status should be 200’ to describe the test suite
2. Create let variable actualStatus in the test code right before the try/catch block
3. Place the endpoint URL,`/api/v1/kits/6`, inside `fetch()` so the HTTP request knows where to go
4. Add `actualStatus = response.status` to extract the response status code from the response right above `catch (error)`
5. Create `async function deleteRequest()` and place the same try/catch block again inside the function
6. Replace `actualStatus = response.status` with `const data = await response.json()`; and `console.log(data)` to extract the json data from the response and print to the console
7. Finally, add `await expect(actualStatus).toBe(200)` and `await deleteRequest();` so the test code knows what to compare the actual result to the expected result and to retrieve the warehouse data. \*
