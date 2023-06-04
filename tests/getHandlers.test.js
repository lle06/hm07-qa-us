
/*GET test 1 checks if the request returns a status code 200 and 
and test 2 checks the response body for the kit name 'For picnic' */

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

test('body should contain', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe('For picnic');
});