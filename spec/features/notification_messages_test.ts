import { LinkPage } from '../pages/link.page';
import { MessagesPage } from '../pages/messages.page';

Feature('Notification Messages').tag('@NotificationMessages')

Before(async () =>
    actor().amOnPage('/notification_message_rendered')
)

Scenario('Showing a success message', async () => {
    for(let i=0; i<10; i++){
        actor().click(LinkPage.clickHereLink)
        let text = await actor().grabTextFrom(MessagesPage.messageNotice)
        if(!text.includes('Action unsuccesful, please try again')) break
        actor().click(LinkPage.clickHereLink)
    }
    actor().see('Action successful', MessagesPage.messageNotice)
})