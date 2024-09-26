import { Config } from 'jest';
import 'ts-jest';

const config: Config = {
  //testEnvironment: 'jsdom',
  //testEnvironment: './ExtendedJSDomEnvironment.ts',
  transform: {
    [/\.tsx?/u.source]: [
      'ts-jest',
      {
        // disable type checking when running tests, speeding them up and making
        // the development experience nicer by not blocking tests on types
        isolatedModules: true
      }
    ]
  }
};

export default config;
