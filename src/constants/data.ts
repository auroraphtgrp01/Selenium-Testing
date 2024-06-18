export const initTestCase: TestCase[] = [
    {
        name: 'Register with password not match',
        status: 'PENDING',
        code: 'Case01'
    },
    {
        name: 'Register with correct data',
        status: 'PENDING',
        code: 'Case02'
    }
]

export interface TestCase {
    name: string
    status: 'PASSED' | 'FAILED' | 'PENDING'
    code: string
}