export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
  
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "^.+\\.svg$": "jest-transformer-svg",
      "^@/(.*)$": "<rootDir>/src/$1",
      '\\.(jpg|webp|jpeg|png|gif|svg)$': '<rootDir>/src/test/__mocks__/fileMock.js',
    },
  
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts"
    ]
    
  };