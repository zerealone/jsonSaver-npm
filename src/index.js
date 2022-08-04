//Made By ZeRealOne
//Last update : Aug 4, 4pm, GMT+3
//---------------------------------

const fs = require("fs");

function isJSON(str) { //checks if an input is a string or not
    try {
        return (JSON.parse(str) && !!str);
    } catch (e) {
        return false; //if not, returns false
    }
}

function jsonSaver(jsonInput, newFile){ //the main function
  if(!jsonInput) throw new Error("Error | Json input is empty")
  //if the jsonInput field is empty

  if(!newFile) throw new Error("Error | Can't create a file with empty name")
  //if the newFile field is empty
  
  fs.stat(newFile, function(err, stat) {
    if (err == null) {
      //if the file in the newFile field exists
      console.error("Error | "+ newFile + ' is already exists.')
    } else if (err.code === 'ENOENT') {
      //if the file in the NewFile field does not exist
      if(isJSON(jsonInput) === true){ //check is json input is in json format or not
      fs.appendFile(newFile, jsonInput, function (err) {
      if (err) throw err; //if there is another error
      console.log('Success! Created file' , newFile, 'With the JSON :' ,jsonInput); // returns this to the console to tell the user that the file have been created
      });
     } else {
        console.error("Error | Invalid JSON format")
     }
    } else {
      //other error happend
      console.log('Error |', err.code);
    }
  });
}

//End of the code
//if you liked, please star this repo and follow me
//if you want to use the code, please follow the LICENSE.md file
