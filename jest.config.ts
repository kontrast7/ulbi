function makeModuleNameMapper(
    srcPath: string,
    tsconfigPath: string,
    defaultModules = {},
) {
    // Get paths from tsconfig
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const { paths } = require(tsconfigPath).compilerOptions;

    const aliases: Record<string, string> = defaultModules;

    // Iterate over paths and convert them into moduleNameMapper format
    Object.keys(paths).forEach((item) => {
        const key = item.replace('/*', '/(.*)');
        const path = paths[item][0].replace('/*', '/$1');
        aliases[key] = `${srcPath}/${path}`;
    });
    return aliases;
}

const TS_CONFIG_PATH = './tsconfig.json';
const SRC_PATH = '<rootDir>';

export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleDirectories: ['node_modules'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleNameMapper: makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH, {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    }),
    modulePaths: ['<rootDir>/node_modules'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist'],
};
