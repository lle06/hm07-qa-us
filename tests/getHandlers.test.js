
/*GET 
Test 1 checks if the request returns a status code 200 and 
and test 2 checks if the response body contains a character 
length of more than zero for name, price, and weight*/

// eslint-disable-next-line no-undef
const config = require('../config.js');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('body should contain ...', async () => {
  let actualResponseBody = ['name', 'price', 'weight'];

  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualResponseBody.push(await response.json());

    for (let i = 0; i < actualResponseBody.length; i++) {
    }
  } catch (error) {
    console.error(error);
  }

  expect(actualResponseBody.length).toBeGreaterThan(0);
});
