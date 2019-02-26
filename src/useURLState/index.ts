import qs from "qs"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

const noop = () => ""

/**
 * Bunch of method that depends on `window`
 *
 * This is mostly for testing purpose but can also be used for SSR.
 */
const options =
  typeof window !== "undefined"
    ? {
        getSearch: () => window.location.search,
        getHash: () => window.location.hash,
        getPathname: () => window.location.pathname,
        replaceState: window.history.replaceState.bind(window.history),
      }
    : {
        getSearch: noop,
        getHash: noop,
        getPathname: noop,
        replaceState: noop,
      }

/**
 * Parse the search to object.
 *
 * @param search
 */
const getSearchParams = (search: string) => qs.parse(search.replace("?", "")) || {}

/**
 * Create a state that is sync with url search param.
 *
 * @param name Name of your state
 * @param decoder Validate and decode the value from the url
 * @param options `window` dependent methods
 */
export const useURLState = <T>(
  name: string,
  initialValue: T,
  decoder: (value: any) => T | undefined = val => val,
  { getHash, getPathname, replaceState, getSearch } = options,
): [T, Dispatch<SetStateAction<T>>] => {
  // Retrieve the value from the url search param
  const searchValue: any = getSearchParams(getSearch())[name]

  // Check if the value is valid, regarding the validator
  const encodedValue = decoder(searchValue)

  // Set the initial value
  const [value, setValue] = useState<T>(encodedValue !== undefined ? encodedValue : initialValue)

  // Update the url search param on state update
  useEffect(() => {
    const params = getSearchParams(getSearch())
    params[name] = value
    const search = `?${qs.stringify(params)}`
    replaceState({}, "", `${getPathname()}${search === "?" ? "" : search}${getHash()}`)
  }, [value])

  return [value, setValue]
}
