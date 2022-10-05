export const getPortalName = (pathname: string) => {
  if (pathname.startsWith('/cms-p10n')) {
    return '/cms-p10n'
  }
  if (pathname.startsWith('/cms')) {
    return '/cms'
  }
  if (pathname.startsWith('/pcm-p10n')) {
    return '/pcm-p10n'
  }
  if (pathname.startsWith('/pcm')) {
    return '/pcm'
  }
  if (pathname.startsWith('/csm')) {
    return '/csm'
  }
  if (pathname.startsWith('/scm')) {
    return '/scm'
  }
  if (pathname.startsWith('/sgm')) {
    return '/sgm'
  }
  if (pathname.startsWith('/pay')) {
    return '/pay'
  }
  if (pathname.startsWith('/sps')) {
    return '/sps'
  }
  return ''
}
