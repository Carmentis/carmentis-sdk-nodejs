const Operator = require('../Operator');

/*
const axios = require('axios');
jest.mock('axios');
*/

describe('Operator', () => {
    describe('getVersion', () => {
        it('should retrieve the version of the operator', async () => {
            //axios.post.mockResolvedValue({ data: { success: true, data: '0.0.2' } });

            const operator = new Operator('http://localhost:3005');

            const version = await operator.getOperatorVersion();

            expect(version).toEqual({ success: true, data: '0.0.2' });
        });
    });
});
