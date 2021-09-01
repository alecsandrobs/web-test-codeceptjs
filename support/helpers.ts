export const URL_BASE = 'http://the-internet.herokuapp.com'
export const URL_BASE_PEOPLE = 'https://alecsandro-imersao-javascript.herokuapp.com'
const show = process.env.HEADLESS ? false : true
const browser = 'chrome'
const waitForAction = 500
const getPageTimeout = 15000
const waitForTimeout = 15000
const scriptsTimeout = 15000
const smartWait = 15000
const windowSize = '1920x1080'
const chromeCapabilities = { args: [ '--disable-infobars', '--no-sandbox', '--disable-gpu', '--window-size=1920,1080' ] }

export const configHelpers: any = {
  playwright: {
    Playwright: {
      url: URL_BASE,
      show: show,
      browser: 'chromium',
      waitForAction: waitForAction,
      getPageTimeout: getPageTimeout,
      waitForTimeout: waitForTimeout,
      windowSize: windowSize,
      chromium: {
        ...chromeCapabilities
        // args: ['--headless' ]
      }
    }
  },
  puppeteer: {
    Puppeteer: {
      url: URL_BASE,
      show: show,
      restart: false,
      waitForNavigation: [ 'domcontentloaded', 'networkidle0' ],
      waitForAction: waitForAction,
      getPageTimeout: getPageTimeout,
      waitForTimeout: waitForTimeout,
      windowSize: windowSize,
      browser: browser,
      chrome: {
        ...chromeCapabilities
      }
    }
  },
  webdriver: {
    WebDriver: {
      url: URL_BASE,
      smartWait: smartWait,
      waitForTimeout: waitForTimeout,
      browser: browser,
      restart: false,
      windowSize: windowSize,
      timeouts: {
        'script': scriptsTimeout,
        'page load': getPageTimeout,
      },
      desiredCapabilities: {
        chromeOptions: {
          ...chromeCapabilities
        }
      }
    }
  },
  protractor : {
    Protractor: {
      url: URL_BASE,
      driver: 'direct',
      browser: browser,
      smartWait: smartWait,
      restart: false,
      angular: false,
      getPageTimeout: getPageTimeout,
      waitForTimeout: waitForTimeout,
      scriptsTimeout: scriptsTimeout,
      windowSize: windowSize,
      capabilities: {
        chromeOptions: {
          ...chromeCapabilities
        }
      }
    }
  },
  /* ### NÃO ESTÁ FUNCIONANDO AS VALIDAÇÕES ###
   testcafe: {
    TestCafe: {
      url: URL_BASE,
      waitForTimeout: waitForTimeout,
      getPageTimeout: getPageTimeout,
      show: true,
      browser: "chrome",
      windowSize: windowSize
    }
  }, */
  /* ### NÃO EXECUTA ###
   nightmare: {
    Nightmare: {
      url: URL_BASE,
      restart: false,
      waitForAction: waitForAction,
      waitForTimeout: waitForTimeout,
      windowSize: windowSize
    }
  } */
}