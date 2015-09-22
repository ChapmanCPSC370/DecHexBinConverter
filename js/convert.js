/*
* Nicholas Vega, Garrett Olsen
*
* vega127@mail.chapman.edu, garrettolsen333@gmail.com
*
* A simple decimal, hexadecimal, and binary converter script
*
*/


// validates user decimal input for decimal page
function checkDecInput(input)
{
	input = input.trim(); // remove whitespace
	// if the input is not a number display error message
	if(isNaN(input) || input === "")
	{
		alert("Invalid input. Please enter a decimal value.");
		return false;
	}
	else
	{
		return true;
	}
}


// validates user dex input for hex page
function checkHexInput(input)
{
	input = input.trim();

	for(var i = 0; i < input.length; ++i) 
	{
		var temp = input.charAt(i).toLowerCase();
		if(isNaN(temp))
		{
			if(!(temp == "a" || temp == "b" || temp == "c" || temp == "d" || temp == "e" || temp == "f"))
			{
				alert("Invalid input. Please enter a hexadecimal value.");
				return false;
			}
		}
	}

	return true;
}


// validates user binary input for bin page
function checkBinInput(input)
{
	input = input.trim();

	for(var i = 0; i < input.length; ++i) 
	{
		var temp = input.charAt(i);
		if(!(temp == 0 || temp == 1))
		{
			alert("Invalid input. Please enter a binary value.");
			return false;
		}
	}

	return true;
}


function convertDecimal() 
{
	// grab document elements that will be modified
	var hexOutputBox = document.getElementById("hexBox");
	var binOutputBox = document.getElementById("binBox");

	// grab and validate user input
	var userInput = document.getElementById("userInput").value;
	alert(userInput);
	if(checkDecInput(userInput))
	{
		userInput = parseInt(userInput);
		hexOutputBox.innerHTML = userInput.toString(16);
		binOutputBox.innerHTML = userInput.toString(2);
	}

} 


function convertHex()
{
	// grab document elements that will be modified
	var decOutputBox = document.getElementById("decBox");
	var binOutputBox = document.getElementById("binBox");

	// grab and validate user input
	var userInput = document.getElementById("userInput").value;
	if(checkHexInput(userInput))
	{
		decOutputBox.innerHTML = parseInt(userInput, 16);
		binOutputBox.innerHTML = parseInt(userInput,16).toString(2);
	}
}


function convertBin()
{
	var decOutputBox = document.getElementById("decBox");
	var hexOutputBox = document.getElementById("hexBox");

	var userInput = document.getElementById("userInput").value;
	if(checkBinInput(userInput)) 
	{
		decOutputBox.innerHTML = parseInt(userInput, 2);
		hexOutputBox.innerHTML = parseInt(userInput, 2).toString(16);
	}
}