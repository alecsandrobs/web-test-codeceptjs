var fs = require('fs');

Feature('File Upload').tag('@fileUpload').tag('@wip')

Before(async () =>
    actor().amOnPage('/upload')
)

Scenario('Uploading a file', async () => {
    const fileName = 'textFile.txt'
    actor().attachFile('#file-upload', `${PATH_FILE}/${fileName}`)
    actor().click('#file-submit')
    actor().seeTextEquals('File Uploaded!', '.example h3')
    actor().seeTextEquals(fileName, '#uploaded-files')
})

Scenario('Uploading more files', async () => {
    const fileName1 = 'example.png'
    const fileName2 = 'just-another-example.png'
    const fileName3 = 'ulala.txt'

    const file1 = `${PATH_FILE}/${fileName1}`
    const file2 = `${PATH_FILE}/${fileName2}`
    const file3 = `${PATH_FILE}/${fileName3}`


    const url = 'http://the-internet.herokuapp.com/upload'

    // formDataFile1.append(fileName1, `${PATH_FILE}/${fileName1}`)
    // formDataFile2.append(fileName2, `${PATH_FILE}/${fileName2}`)
    // formDataFile3.append(fileName3, `${PATH_FILE}/${fileName3}`)

    // const file1 = new File([''], `${PATH_FILE}/${fileName1}`)
    // const file2 = new File([''], `${PATH_FILE}/${fileName2}`)
    // const file3 = new File([''], `${PATH_FILE}/${fileName3}`)

    let response1:any = actor().sendPostRequest(url, {file: file1 })
    let response2:any = actor().sendPostRequest(url, {file: file2 })
    let response3:any = actor().sendPostRequest(url, {file: file3 })

    console.log('')
    console.log('-------')
    console.log(response1.status)
    console.log('-------')

    console.log('')
    console.log('+++++++')
    console.log(response2.status)
    console.log('+++++++')
    
    console.log('')
    console.log('=======')
    console.log(response3.status)
    console.log('=======')

    
})

const PATH_FILE = `support/files`
// const PATH_FILE = `${process.cwd()}/support/files`