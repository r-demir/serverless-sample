




exports.handler = async (event, context) => { 

	try {
		console.log("Handling event:", JSON.stringify(event));

		var response = { statusCode: 200 }

		var body = JSON.parse(event.body);

		//MARK: We need to check if we have the input1 & input2 parameters in request we received! 
		var input1 = body.input1;  
		var input2 = body.input2; 

		if(input1 === null || input1 === undefined || input1 === '') {
			response.body =  JSON.stringify({ message: "'input1' field is missing!", output: null });
		} else if(input2 === null || input2 === undefined || input2 === ''){
			response.body =  JSON.stringify({ message: "'input2' field is missing!", output: null });
		} else {
			if(input1 < 0 || input2 < 0) {
				response.body = JSON.stringify({ message: "Input parameters cannot be negative!", output: null});
				return response;
			} else {
				response.body = JSON.stringify({ output: (input1 + input2) });
			}
		}

		console.log("Result:", JSON.stringify(response));

		return response; 

	} catch (error) {
		return {
			body : {
				message: "Exception: " + error.message
			}
		};
	}

			
};
