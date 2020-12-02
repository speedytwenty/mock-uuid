# Mock UUID

This package is ment for testing and development purposes where a repeatable UUID is needed only. My personal reason to do it is to fill a mock state in React, and to be honest because I was bored and went a bit overboard. :-P

## Install
Run `npm i -D mock-uuid`

## Public methods

Method|Signature|Description
---|---|---
mockUuid.getIncrementalGenerator|(seed:number = Math.E, uuidVersion = 4, variant = 1) => () => uuid:string|Function to generate uuid with built in incrementation
mockUuid.getGenerator|(seed:number = Math.E, uuidVersion = 4, variant = 1) => (i: number) => uuid:string|Function to generate uuid with index as a parameter
mockUuid.get|(i: number, seed = Math.E, uuidVersion = 4, variant = 1) => uuid:string|Get UUID with index i

## Parameters
Parameter|Valid values|Description
---|---|---
seed|any number|Uuid generation is based on the seed.
uuidVersion|2,3,4 or 5|Which version of UUID to generate (version 1 is not supported)
variant|0,1,2,3|Which variant to use



## Usage example

Mocking a list of books:

```javascript
import { mockUuid } from "mock-uuid";

const books = [];
const getUuid = mockUuid.getIncrementalGenerator();
for(let i=0;i<numberOfBooks;i++){
    books.push({
        id: uuid(),
        title: `book ${i+1}`,
    });
}
```

Mocking a list of books with uuid by index:

```javascript
import { mockUuid } from "mock-uuid";
 
const books:Book[] = [];
for(let i=0;i<numberOfBooks;i++){
    books.push({
        id:  mockUuid.getUuid(i),
        title: `book ${i+1}`,
    });
}
books[0].id === mockUuid.getUuid(0); // <-- true
```

## Development
The script is built in Typescript. The intructions below is only relevant if you want to poke in it. Start with `$ npm i` to install dependencies.

* Build: `npm run build`
* Test: `npm run test`
