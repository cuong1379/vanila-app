import { namespaceConfig } from 'fast-redux'
// import { user } from 'baser-ui/profile/services'

export interface user {
  /** Default null, to use https:\/\/cdn.selless.com\/u\/a\/{profile-id} */
  avatar?: string

  /** (419) 306-2827 */
  phone?: string

  /** Beutler */
  last_name?: string

  /** Lauril */
  first_name?: string

  /** No. 407 */
  address1?: string

  /** Lynshire Lane */
  address2?: string

  /** 45840 */
  postal_code?: string

  /** Findlay */
  city?: string

  /** Ohio */
  state?: string

  /** US */
  country?: string

  /** United States */
  country_code?: string

  /** National ID\/Passport No */
  passport?: string

  /**  */
  skype?: string

  /**  */
  wechat?: string

  /**  */
  name2?: string

  /**  */
  email2?: string

  /**  */
  phone2?: string

  /**  */
  skype2?: string

  /**  */
  wechat2?: string

  /** Unique login name for the profile, email will be used as default, also using for login and search */
  code?: string

  /**  */
  provider?: provider_type

  /**  */
  name?: string

  /** some.one@aol.com */
  email?: string

  /**  */
  roles?: string[]

  /**  */
  _id?: string
}

export enum provider_type {
  'BASIC' = 'BASIC',
  'GOOGLE' = 'GOOGLE',
  'FACEBOOK' = 'FACEBOOK',
  'MICROSOFT' = 'MICROSOFT'
}

export interface ProfileProps extends user {
  loading?: boolean
  clientLastUpdate?: Date | number | string
  allowerPath?: { [path: string]: boolean }
}

const DEFAULT_STATE: ProfileProps = {}

const { action, getState } = namespaceConfig('profile', DEFAULT_STATE)

export const getProfileState = (state: ProfileProps): ProfileProps | undefined => getState(state)
export const getProfileLoadingState = (state: ProfileProps): boolean | undefined => getProfileState(state)?.loading
export const getProfileRolesState = (state: ProfileProps): string[] | undefined => getProfileState(state)?.roles
export const getLoginProviderState = (state: ProfileProps): string | undefined => getProfileState(state)?.provider
export const getAllowedPathState = (state: ProfileProps): { [path: string]: boolean } | undefined =>
  getProfileState(state)?.allowerPath

export const setProfile = action('setProfile', function (state: ProfileProps, profile?: user) {
  console.log('state', state, profile);
  const nextState: ProfileProps = {
    ...state,
    ...(profile || {}),
    clientLastUpdate: new Date().getTime()
  }
  return nextState
})

export const setLoadingProfile = action('setLoadingProfile', function (state: ProfileProps, loading: boolean) {
  if (state.loading == loading) {
    return state
  }
  const nextState = {
    ...state,
    loading
  }
  return nextState
})

export const addAllowedPath = action('addAllowedPath', (state: ProfileProps, path: string) => {
  if (!path || state?.allowerPath?.[path]) return state
  const nextState = {
    ...state,
    allowerPath: {
      ...(state.allowerPath || {}),
      [path]: true
    }
  }
  return nextState
})

export const clearAllowedPath = action('clearAllowedPath', (state: ProfileProps) => {
  const nextState = {
    ...state,
    allowerPath: {}
  }
  return nextState
})
