import { browserClient } from '@lib/clients/supbaseBrowser.client'

export class NotebookBrowserRepository {
  private async getClient(): Promise<string> {
    return ''
  }

  public static async createNewNotebook(): Promise<void> {
    const { data: newNotebook, error } = await (await browserClient)
      .from('notebooks')
      .insert({
        id: 'ddbc4a15-5c55-4206-bbfe-ec650c666219',
        created_at: new Date(),
        title: 'New notebook',
        description: 'first notebook',
        image:
          'https://images.unsplash.com/photo-1616166330003-8b5f1b2b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        ownerId: '65736a7c-a00c-42cc-8b55-dde5c14480e3'
      })

    console.log({
      newNotebook
    })
    console.log({
      error
    })
  }
}

export const statusNotebook = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
  actived: 'actived'
}
