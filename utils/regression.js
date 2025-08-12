const { run } = require('cypress-cloud')
const dayjs = require('dayjs')
async function main() {
    const results = await run({
        ciBuildId: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        spec: 'cypress/e2e/**/*.feature',
      });
      
      if (results.status === 'failed') {
        console.log('Regression test failed')
      } else {
        console.log('Regression test passed')
      }
}

main()