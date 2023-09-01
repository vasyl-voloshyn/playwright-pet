import { type Page } from '@playwright/test'

export type Action = () => Promise<any>

export abstract class BasePage {
  protected actions: Action[] = []

  constructor (public page: Page, public act: Action[] = []) {
    this.actions.push(...act)
  }

  protected addActions (...action: Action[]): void {
    this.actions.push(...action)
  }

  async done (): Promise<void> {
    for (const action of this.actions) {
      await action()
    }
  }
}
