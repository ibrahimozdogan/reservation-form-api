module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    moduleNameMapper: {
        '^@entities$': '<rootDir>/src/entities/index.ts',
        '^@enums': '<rootDir>/src/enums/index.ts',
        '^@core': '<rootDir>/src/core/index.ts',
        '^@repositories': '<rootDir>/src/repositories/index.ts',
        '^@routes': '<rootDir>/src/routes/index.ts',
    }
};
