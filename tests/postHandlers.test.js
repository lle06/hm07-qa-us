// eslint-disable-next-line no-undef
/*POST test 1 checks if the request returns a status code 201 and 
and test 2 checks the response body for the added card name 'My test card'*/


const config = require('../config.js');

const requestBody = {
    // put your body here
		'name': 'my test card'
}

test('status should be 201', async () => {
		let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(201);
});

test('body should be', async () => {
		let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe('my test card');
});