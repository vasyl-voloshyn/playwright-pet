import { BasePage } from './BasePage'
import { expect } from '../fixtures'

export class InstallationPage extends BasePage {
  private readonly title = this.page.getByRole('heading', { name: 'Installation' })

  validateTitle (): InstallationPage {
    this.addActions(() => expect(this.title).toBeVisible())
    return this
  }
}
