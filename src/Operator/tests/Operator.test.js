import Operator from '../Operator.js';

describe('Operator', () => {
    describe('getVersion', () => {
        it('should retrieve the version of the operator', async () => {
            //axios.post.mockResolvedValue({ data: { success: true, data: '0.0.2' } });

            const operator = new Operator('http://localhost:3005');

            const version = await operator.getOperatorVersion();

            expect(version).toEqual({ success: true, data: '0.0.3' });
        });
    });

    describe('prepareUserApproval', () => {
        it('should prepare a user approval', async () => {
            //axios.post.mockResolvedValue({ data: { success: true, data: '0.0.2' } });

            const operator = new Operator('http://localhost:3005');

            const approval = await operator.prepareUserApproval(
                'test.test',
                { method: 'email', id: 'test@test.fr' },
                {
                    message: 'test message'
                },
                'signMessage',
                'email',
                {
                    success: 'http://localhost:3000/success',
                    cancel: 'http://localhost:3000/cancel',
                },
                null
            );

            expect(approval?.success).toEqual(true);
        });
    });
});


