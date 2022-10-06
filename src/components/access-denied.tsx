import { Button } from 'baser-ui/controls'

export default function AccessDenied() {
  return (
    <div>
      <h4 className="text-center">Access Denied</h4>

      <div className="d-flex justify-content-center">
        <Button type="neutralLink">You can sign in to access</Button>
      </div>
    </div>
  )
}
