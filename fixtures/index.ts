import { test as baseTest } from '@playwright/test'
import { HomePage } from '../pages/HomePage'

interface Fixtures {
  homePage: HomePage
}

export const test = baseTest.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  }
})

export { expect } from '@playwright/test'
