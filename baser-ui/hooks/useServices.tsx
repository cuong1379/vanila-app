type DomainServiceType = 'cms' | 'scm'

const rewireServices: Record<string, Record<string, (req: any) => any>> = {}

export default function useServices(domain: DomainServiceType, component: string) {
  const registerService = (name: string, fn: (req: any) => any) => {
    const basePath = `${domain}/${component}`
    if (!rewireServices[basePath]) rewireServices[basePath] = {}
    rewireServices[basePath][name] = fn
  }

  const getService = <RequestType, ResponseType>(name: string): ((req: RequestType) => ResponseType) | undefined => {
    const basePath = `${domain}/${component}`
    return rewireServices[basePath]?.[name]
  }

  return { getService, registerService }
}
