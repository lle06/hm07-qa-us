// eslint-disable-next-line no-undef
const config = require('../config');

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