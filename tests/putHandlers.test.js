// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	'productsList': [
		{
			'id': 1,
			'quantity': 2
		},
		{
			'id': 4,
			'quantity':1
		}
	]
}

test('status should be 200', async () => {
		let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
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
	
	async function putRequest() {
		try {
			const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}	
	await expect(actualStatus).toBe(200);
	await putRequest();
});
