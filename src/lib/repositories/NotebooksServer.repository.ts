import { serverClient } from '@lib/clients/supbaseServer.client'

export class NotebooksServerRepository {
  private async getClient(): Promise<string> {
    return ''
  }

  public static async getAllNotebooks(): Promise<void> {
    const { data: notebooks, error } = await (await serverClient)
      .from('notebooks')
      .select('*')

    if (error !== null) {
      console.error(error)
    }

    console.log({
      notebooks
    })
  }
}
