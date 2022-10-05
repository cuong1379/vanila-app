export const getPortalAvailable = (roles: string[] = []) => {
  if (!roles) return []
  const result =
    roles
      .map((r: string) => rolesOnPortal[r] || [])
      .flat()
      .filter(Boolean) || []
  const portals = [...new Set(result)].map((p) => `/${p}`)
  return portals
}

/* eslint-disable */
const rolesOnPortal: { [role: string]: string[] } = {
  admin: ['sys'],
  'cms-default-manager': ['cms'],
  'cms-default-staff': ['cms'],
  'cms-p10n-manager': ['cms-p10n'],
  'cms-p10n-staff': ['cms-p10n'],
  'pcm-default-manager': ['pcm', 'sps'],
  'pcm-default-staff': ['pcm', 'sps'],
  'pcm-p10n-manager': ['pcm-p10n'],
  'pcm-p10n-staff': ['pcm-p10n'],
  'csm-manager': ['csm'],
  'csm-staff': ['csm'],
  'scm-manager': ['scm'],
  'scm-staff': ['scm'],
  'pay-manager': ['pay'],
  'pay-staff': ['pay'],
  'sgm-manager': ['sgm'],
  'sgm-staff': ['sgm']
}
/* eslint-enable */
