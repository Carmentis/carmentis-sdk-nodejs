# carmentis-sdk-node

## SDK Installation

### npm

To install the SDK, first add the dependency to your `package.json` file:

```json
{
    "dependencies": {
        "carmentis-sdk-node": "git+https://github.com/Carmentis/carmentis-sdk-node.git"
    }
}
```

Then, run the following command in your terminal:

```bash
npm install
```

Or install it directly using npm (choose one of the following):

```bash
npm install git+https://github.com/Carmentis/carmentis-sdk-node.git
```
```bash
npm install git+ssh://git@github.com:Carmentis/carmentis-sdk-nodejs.git
```

## SDK Example Usage

### Example

Here's an example of using the SDK in your Node.js application:

```javascript
const Operator = require('carmentis-sdk-nodejs');

async function main() {
    try {
        const operator = new Operator("http://localhost:3005");

        const version = await operator.getOperatorVersion();
        console.log(version);
    } catch (error) {
        // Handle exceptions
        console.error(error);
    }
}

main();
```
