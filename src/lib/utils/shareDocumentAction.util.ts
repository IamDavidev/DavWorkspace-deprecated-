export async function shareDocument(): Promise<void> {
  if (window === null) return
  const url = new URL(window.location.href)
  await navigator.clipboard.writeText(url.toString())
}