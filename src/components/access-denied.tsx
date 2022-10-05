import { signIn } from 'next-auth/react'
import { Button } from 'baser-ui/controls'
import { useSession } from 'next-auth/react'

export default function AccessDenied() {
  const { data: session } = useSession()
  if (session?.user?.email) return null
  return (
    <div>
      <h4 className="text-center">Access Denied</h4>

      <div className="d-flex justify-content-center">
        <Button
          type="neutralLink"
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          You can sign in to access
        </Button>
      </div>
    </div>
  )
}
