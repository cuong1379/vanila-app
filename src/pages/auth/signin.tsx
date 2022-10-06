import React, { useState } from 'react'
import { Logo, Card } from 'baser-ui/components'
import BtnLogin from 'src/components/BtnLogin'
import { TextColor } from 'baser-ui/components'
import { Input } from 'baser-ui/controls'
import { Divider } from 'antd'
import { PersonCircle, Key } from 'react-bootstrap-icons'
import { Button } from 'baser-ui/controls'
import css from 'styled-jsx/css'

const Signin = ({ providers, session }: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (session) return null
  return (
    <div className="d-flex justify-content-center align-items-center login-box" style={{ minHeight: '100vh' }}>
      <div>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <Logo />
        </div>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <TextColor size="16px" color="gray" className="text-center">
            Get creative and build your style
          </TextColor>
        </div>

        <Card title="" className="container p3 card-style">
          <div className="mb-3">
            <h6 className="text-center">Sign in to your account</h6>
          </div>

          {providers &&
            Object.values(providers)
              ?.filter((x: any) => x?.id != 'twitter')
              ?.filter((x: any) => x?.id != 'auth0')
              .map((provider: any) => (
                <div key={provider.name} style={{ marginBottom: 0 }}>
                  <BtnLogin type={provider?.id} provider={provider}></BtnLogin>
                </div>
              ))}

          <Divider className="my-4">OR</Divider>

          <div>
            <Input
              prefix={<PersonCircle className="mr-2" color="var(--indigo-7)" />}
              placeholder="Enter your email"
              className="mb-3"
              name="email"
              value={email}
              onChange={(e: any) => setEmail(e?.target?.value)}
            />
            <Input
              prefix={<Key className="mr-2" color="var(--indigo-7)" />}
              placeholder="Enter your password"
              password={true}
              name="password"
              value={password}
              onChange={(e: any) => setPassword(e?.target?.value)}
            />
          </div>

          <div className="mt-3">
            <Button width="100%">Sign In</Button>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
            <TextColor size="16px" color="black">
              Don't have an account?
            </TextColor>{' '}
            <Button type="neutralLink" style={{ fontSize: '16px' }}>
              Sign In
            </Button>
          </div>

          <div className="d-flex justify-content-center align-items-center mb-3">
            <Button type="neutralLink">Forgot password?</Button>
          </div>
        </Card>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

const style = css.global`
  .login-box .drop-shadow {
    width: 400px;

    @media screen and (max-width: 768px) {
      width: 350px;
    }
  }
`

export default Signin