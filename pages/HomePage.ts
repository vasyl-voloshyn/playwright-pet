import { BasePage } from './BasePage'
import { expect } from '../fixtures'
import { InstallationPage } from './InstallationPage'

export class HomePage extends BasePage {
  private getStartedLink = this.page.getByRole('link', { name: 'Get started' })

  goto (): HomePage {
    this.addActions(() => this.page.goto('https://playwright.dev/'))
    return this
  }

  openGetStarted (): InstallationPage {
    this.addActions(() => this.getStartedLink.click())
    return new InstallationPage(this.page, this.actions)
  }

  validateTitle (): HomePage {
    this.addActions(() => expect(this.page).toHaveTitle(/Playwright/))
    return this
  }
}
