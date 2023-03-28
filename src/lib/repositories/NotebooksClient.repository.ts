export class NotebookBrowserRepository {
  private async getClient(): Promise<string> {
    return "";
  }

  public static async createNewNotebook(): Promise<void> {
  }
}

export const statusNotebook = {
  DRAFT: "draft",
  PUBLISHED: "published",
  ARCHIVED: "archived",
  actived: "actived",
};
