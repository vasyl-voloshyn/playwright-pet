import { test } from '../fixtures'

test('has title', async ({ homePage }) => {
  await homePage.goto().validateTitle().done()
})

test('get started link', async ({ homePage }) => {
  await homePage.goto().openGetStarted().validateTitle().done()
})
