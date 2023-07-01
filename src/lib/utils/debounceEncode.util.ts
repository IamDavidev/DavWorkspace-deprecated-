import { debounce } from '@lib/utils/debounce'
import { encode } from 'js-base64'

interface WaitTimeInMS {
  DEFAULT: number
}

const WAIT_TIME_IN_MS: WaitTimeInMS = {
  DEFAULT: 3000
}

export const debounceEncode = debounce((value: string) => {
  const hashValue = encode(value)
  if (window === null) return
  const url = new URL(window.location.href)
  url.searchParams.set('value', hashValue)
  window.history.pushState({}, '', url.toString())
}, WAIT_TIME_IN_MS.DEFAULT)
