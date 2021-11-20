module.exports = {
    'Navegate to Join Our Team': function (browser) {
        browser
            .url('https://decemberlabs.com/')
            .useXpath()
            .waitForElementVisible('//body')
            .assert.visible('//span[text()="Careers"]')
            .click('//span[text()="Careers"]')
            .waitForElementVisible("//a[text()='Apply now!']", 45000)
            .assert.titleContains('Careers')
            .assert.visible("//h1[contains(.,'Be a Product Shaper.')]")
            .assert.visible("//h1[contains(.,'Be a Game Changer.')]")
            .assert.visible("//h1[contains(.,'Join Our Team')]")
            .assert.visible("//a[text()='Apply now!']")
            .click("//a[text()='Apply now!']")
            .waitForElementVisible("//input[@name='name']", 40000)

    },
    'Send postulation': function (browser) {
        browser
            .setValue('//input[@name="name"]', 'Magin')
            .setValue('//input[@name="email"]', 'test@decemberlabs.com')
            .setValue('//input[@name="phone"]', '543512132456')
            .setValue('//input[@name="linkedin_profile"]', 'https://linkedin.com/in/username')
            .setValue('//textarea[@name="comments"]', 'Algunos comentarios')
            .click('//input[@type="submit"]')
            .waitForElementVisible("//span[text()='Success! You did it!']", 30000)
            .end();
    }
};