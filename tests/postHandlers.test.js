// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
		    'deliveryTime': 9,
    'products': [
        {
            'id': 1,
            'quantity': 1
        },
        {
            'id': 4,
            'quantity': 3
        }
    ]
}

test('status should be 200', async () => {
		let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
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
	async function postRequest() {
		try {
		const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
			method: 'POST',
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
	await expect(actualStatus).toBe(200)
	await postRequest();
});