import { signIn, signOut, useSession } from 'next-auth/react'
import { List, Search, QuestionSquare, Gear, Grid3x3GapFill } from 'react-bootstrap-icons'
import { Button } from 'baser-ui/controls'
import css from 'styled-jsx/css'
import { Logo, DateNow, TextColor, Loading, Clock } from 'baser-ui/components'
import { Dropdown } from 'antd'
import MultiGoogle from 'src/components/MultiGoogle'

interface HeaderProps {
  onSetCollapsed: (x: boolean) => void
  collapsed: boolean
}

export default function Header({ onSetCollapsed, collapsed }: HeaderProps) {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  const AccountSetting = (
    <>
      <div className="account-setting p-4 mt-1">
        <div className="d-flex justify-content-center mb-3">
          <img style={{ borderRadius: '100%', width: '60px', height: '60px' }} src={`${session?.user?.image}`} />
        </div>

        <div className="d-flex justify-content-center">
          <TextColor size="16px" b color="var(--gray-100)">
            {session?.user?.name}
          </TextColor>
        </div>

        <div className="d-flex justify-content-center mb-4">
          <TextColor size="14px" color="var(--gray-100)">
            {session?.user?.email}
          </TextColor>
        </div>

        <div className="d-flex justify-content-center sign_out py-3">
          <Button type="neutralBorder" className="px-3" style={{ borderRadius: '16px' }}>
            <TextColor size="14px" color="var(--gray-100)">
              Manage your account
            </TextColor>
          </Button>
        </div>

        <div className="d-flex justify-content-center py-3">
          <Button
            type="neutralBorder"
            className="px-3 py-3"
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            <TextColor size="16px" b color="var(--gray-100)">
              Sign Out
            </TextColor>
          </Button>
        </div>

        <div className="d-flex justify-content-center manage-text pt-3">
          <TextColor size="12px" color="var(--gray-100)">
            Privacy Policy • Terms of Service
          </TextColor>
        </div>
      </div>
      <style jsx>{styleAccountSetting}</style>
    </>
  )

  if (loading) return <Loading isLoading={loading} />
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="px-3 py-2 header d-flex w-100 align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          {session?.user?.email && (
            <Button type="white" className="mr-2" onClick={() => onSetCollapsed(!collapsed)}>
              <List size={25} color="#5f6368" />
            </Button>
          )}

          <Logo />

          <Button type="neutralBorder" className="ml-5 mr-3">
            Today
          </Button>

          <DateNow />

          <Clock />
        </div>

        <div className="d-flex align-items-center">
          <Button type="white" className="mr-2">
            <Search size={20} color="#5f6368" />
          </Button>

          <Button type="white" className="mr-2">
            <QuestionSquare size={20} color="#5f6368" />
          </Button>

          <Button type="white" className="mr-2">
            <Gear size={20} color="#5f6368" />
          </Button>

          {session?.user?.email ? (
            <div className="d-flex align-items-center">
              <Dropdown overlay={<MultiGoogle session={session} />} trigger={['click']} placement="bottom">
                <a onClick={(e) => e.preventDefault()}>
                  <Button type="white" className="mr-3 ml-4">
                    <Grid3x3GapFill size={25} color="#5f6368" />
                  </Button>
                </a>
              </Dropdown>

              <Dropdown overlay={AccountSetting} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <Button type="neutralBorder" className="px-3 py-4">
                    <TextColor size="18px" b color="var(--gray-100)" className="mr-2">
                      Baser
                    </TextColor>
                    <img className="header__avatar" src={`${session?.user?.image}`} />
                  </Button>
                </a>
              </Dropdown>
            </div>
          ) : (
            <Button
              type="neutralBorder"
              className="px-3 py-3"
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
              <TextColor size="16px" b color="var(--gray-100)" className="mr-2">
                Sign In
              </TextColor>
            </Button>
          )}
        </div>
      </div>

      <style jsx>{style}</style>
    </header>
  )
}

const style = css`
  .header {
    border-bottom: solid 1px #cfcfcf;

    &__avatar {
      width: 32px;
      height: 32px;
      border-radius: 100%;
    }
  }
`

const styleAccountSetting = css`
  .account-setting {
    border: 1px solid #dadce0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 8px;

    background-color: white;
  }
  .manage-text {
    border-top: 1px solid #dadce0;
  }
  .sign_out {
    border-top: 1px solid #dadce0;
    border-bottom: 1px solid #dadce0;
  }
`
