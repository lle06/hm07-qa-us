// eslint-disable-next-line no-undef
/*DELETE test 1 checks that creating a new kit returns a 201 status code,
test 2 checks the delete status code is 200 and test 3 checks the 
response body to see if it returns "ok":true */

const config = require('../config.js');

const requestBody = {
	'name': 'New test kit',
  'cardId': 10
}

test('newKit Status should be 201', async () => {
	let newKit
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		newKit = response.status
	} catch (error) {
		console.error(error);
	}
	expect(newKit).toBe(201);
});

test('delete status should be 200', async () => {
		let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/10`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('body should contain', async () => {
		let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/10`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toEqual({ "ok": true });
});