module.exports = {
    testEnvironment: "jsdom",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts(x)?", "!src/**/*.stories.tsx"],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
    roots: ["<rootDir>"],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
    testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest",
    },
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    },
};
