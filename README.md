[![npm version](https://img.shields.io/npm/v/ifif.svg?style=flat-square)](https://www.npmjs.com/package/ifif)

# ifif


## Usage

ifif( condition, message, errorcode );  
  
  
condition: make error when this param is true!  
message: optional  
errorcode: optional  
  
as is
```javascript
if( ! data ) {

	console.error( 'no data!');
	throw { errorCode: 'NO_DATA' };
}
```

to be
```javascript
var ifif = require('ifif');
ifif( ! data, 'no data!', 'NO_DATA' );
```
