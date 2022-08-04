# jsonSaver-npm
The jsonSaver package files and docs

https://www.npmjs.com/package/@ze-real-one/jsonsaver

## Installation
Using the shell / terminal and npm :

```shell
npm i @ze-real-one/jsonsaver
```
Then in the code :
```js
const jsonsaver = require("@ze-real-one/jsonsaver")
```
## Versions List
- `0.0.5` - *Not supported anymore*
- `0.0.6` - *Not supported anymore*
- `0.0.7` - __Supported__

## Usage

```js
jsonSaver(theJsonInput, newFileToSave)
```
#### For example :
```js
jsonSaver('{"First Name" : "Tom" , "Last Name" : "Something"}','names.json')
```
Will make a file called `names.json` and the json input in it (`{"First Name" : "Tom" , "Last Name" : "Something"}`) and will return to the console this : `Success! Created file names.json With the JSON : {"First Name" : "Tom" , "Last Name" : "Something"}`.

## Errors help
`Cannot find module @ze-real-one/jsonSaver` :
This means you missed the first step of the [installation](#installation).

`Error | Json input is empty` : You forgot to add the first argument

`Error | Can't create a file with empty name` : You forgot to add the second argument

`Error | X is already exists.` : the file you are trying to save the json in is already exist.Currently, the function is not saving the json by adding it to the new file.

`Error | Invalid JSON foramt` : a valid JSON format to use is like this : `'{}'` and in the `{}` you should add your JSON parameters.

#### Got other error?
Feel free to go to the `Issues` tab in this repo, and let me know about this, and I will fix it.

## Donations
If you want to donate to me to keep updating and making cool staff (or upgrading existing projects) [donate me on ko-fi](https://ko-fi.com/zerealone).
