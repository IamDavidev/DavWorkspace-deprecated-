import { encode } from 'js-base64'

export function editTitleAction(
  newTitle: string,
  setIsEdit: (value: boolean) => void,
  setNewTitle: (value: string) => void
): void {
  setIsEdit(false)
  setNewTitle(newTitle)
  const url = new URL(window.location.href)
  url.searchParams.set('title', encode(newTitle))
  window.history.pushState({}, '', url.toString())
}
