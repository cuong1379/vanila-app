import { ExtProtectRoute, withAuthCore } from 'baser-ui/hocs'
import { getPortalAvailable, getPortalName } from '../utilities'

const extProtectRoute: ExtProtectRoute = async ({ store, pathname }) => {
  const currentPortal = getPortalName(pathname)
  const roles = store?.getState?.().profile?.roles
  const portals = getPortalAvailable(roles)
  if (portals.length == 0) {
    return '/logout'
  }
  if (currentPortal && !portals.includes(currentPortal)) {
    return '/'
  }
  return null
}

export const withAuthApp = withAuthCore({ extProtectRoute })
