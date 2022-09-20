"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    preset: 'ts-jest/presets/js-with-ts-esm',
    globals: { 'ts-jest': { useESM: true, isolatedModules: true } },
    roots: ['<rootDir>/src'],
    extensionsToTreatAsEsm: ['.ts'],
};
