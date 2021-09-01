
Feature('Notification Messages').tag('@NotificationMessages')

Before(async () =>
    actor().amOnPage('/notification_message_rendered')
)

Scenario('Showing a success message', async () => {
    for(let i=0; i<10; i++){
        actor().click(link)
        let text = await actor().grabTextFrom(messageNotice)
        if(!text.includes('Action unsuccesful, please try again')) break
        actor().click(link)
    }
    actor().see(textMessageNotice, messageNotice)
})

const messageNotice = locate('#flash-messages').find('.flash.notice')
const textMessageNotice = 'Action successful'
const link = locate('a').withText('Click here')