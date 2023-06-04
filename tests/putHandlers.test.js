
/*PUT test 1 checks if the request returns a status code 200 and 
and test 2 checks the response body contains an "ok":true */

// eslint-disable-next-line no-undef
const config = require('../config.js');

const requestBody = {
	"price": 175
}

test('status should be 200', async () => {
		let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});

test('body should contain', async () => {
		let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toEqual({ "ok": true });
});