require('ts-node/register');

const URL_BASE = require('./support/helpers').URL_BASE
const configHelpers = require('./support/helpers').configHelpers;
// const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);
// setWindowSize(1920, 1080)

const HELPER = process.env.HELPER ? process.env.HELPER.toLowerCase() : 'playwright'

exports.config = {
  tests: './spec/features/**/*_test.ts',
  output: './output',
  helpers: {
    ...configHelpers[HELPER],
    REST: {
      endpoint: URL_BASE,
      onRequest: () => {
        //request.headers.auth = "123";
      }
    },
  },
  include: {
    I: './steps_file.ts'
  },
  bootstrap: null,
  mocha: {},
  name: 'web-test-codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      outputDir: 'output',
      enabled: true
    }
  }
}