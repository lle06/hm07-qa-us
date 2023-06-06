
/*DELETE 
Test 1 checks the delete status code is 200.
Test 2 checks if the cart has been deleted with the response body of "ok":true */

// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	'name': 'New test kit',
  'cardId': 10
}


test('delete status should be 200', async () => {
		let newKit;
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
		};

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
		let newKit;
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
		};

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