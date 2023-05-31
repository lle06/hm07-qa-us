// eslint-disable-next-line no-undef
const config = require('../config');


async function getRequest() {
		try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.error(error);
	}
}
test('test should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	await expect(actualStatus).toBe(200);
	await getRequest();
});