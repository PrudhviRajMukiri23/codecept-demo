import { assert } from "console";

Feature('navigation');

Before(({I})=>{
    I.amOnPage("https://www.google.com")
})

Scenario('google search test',  async ({ I }) => {

    I.seeElement({xpath: "//textarea[@name='q']"})

    const title = await I.grabTitle()

    // console.log("==================================>>>>>>>>>>>>>>>>>>"+ title)

    I.seeTitleEquals("Google")

    assert(title === 'Google')

    I.fillField({xpath: "//textarea[@name='q']"}, 'codeceptjs')

    let value = await I.grabValueFrom({xpath: "//textarea[@name='q']"})

    // console.log("==================================>>>>>>>>>>>>>>>>>>"+ value)
    assert(value === 'codeceptjs')

    I.customeKeyboardPress('Enter')

});
