import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './src/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      // url: 'https://www.google.com',
      show: false
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'codeceptjs',
  "mocha": {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": true,
          "steps": true,
        }
      },
      "mochawesome": {
        "stdout": "./output/console.log",
        "options": {
          "reportDir": "./output",
          "reportFilename": "report"
        }
      },
      "mocha-junit-reporter": {
        "stdout": "./output/console.log",
        "options": {
          "mochaFile": "./output/result.xml",
          "attachments": true
        }
      }
    }
  },
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
  },
}