module.exports = {
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        '**/test/**/*.test.(ts|js)'
    ],
    testEnvironment: 'node',
    'moduleNameMapper': {
        '@app/api/(.*)': '<rootDir>/src/api/$1',
        '@app/services/(.*)': '<rootDir>/src/services/$1',
        '@app/mocks/(.*)': '<rootDir>/mocks//$1',
    },
    'setupFilesAfterEnv': ['<rootDir>/jest.setup.ts']
}
