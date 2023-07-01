'use client'

export function getParamFromSearchParam(
  param: string
): string | undefined {
  const searchParams = new URLSearchParams(window.location.search)
  return searchParams.get(param) ?? undefined
}