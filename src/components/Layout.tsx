import Header from './Header'
import { Layout as AntLayout, Menu } from 'antd'
import React, { useState } from 'react'
import css from 'styled-jsx/css'
import { PersonWorkspace, CloudSun, Gear, Laptop, InfoCircle, HouseDoor } from 'react-bootstrap-icons'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
interface Props {
  children: React.ReactNode
}

const { Sider } = AntLayout

export default function Layout({ children }: Props) {
  const { data: session } = useSession()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const items = [
    {
      label: 'Home',
      key: '0',
      icon: <HouseDoor size={20} color="var(--primary-100)" />,
      onClick: () => router?.push('/')
    },
    {
      label: 'Schedule',
      key: '1',
      icon: <PersonWorkspace size={20} color="var(--primary-100)" />,
      onClick: () => router?.push('/schedule')
    },
    {
      label: 'Weather forecast',
      key: '2',
      icon: <CloudSun size={20} color="var(--primary-100)" />,
      onClick: () => router?.push('/weather')
    },
    {
      label: 'User setting',
      key: '3',
      icon: <Gear size={20} color="var(--primary-100)" />,
      children: [
        {
          label: 'Interface',
          key: '3.1',
          icon: <Laptop size={20} color="var(--primary-100)" />,
          onClick: () => router?.push('/settings/interface')
        },
        {
          label: 'Infomations',
          key: '3.2',
          icon: <InfoCircle size={20} color="var(--primary-100)" />,
          onClick: () => router?.push('/settings/informations')
        }
      ]
    }
  ]

  return (
    <>
      <Header onSetCollapsed={setCollapsed} collapsed={collapsed} />

      <AntLayout style={{ minHeight: 'calc(100vh - 67px)' }}>
        {session?.user?.email && (
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value: any) => setCollapsed(value)}
            theme="light"
            trigger={null}
            width="250px"
          >
            <Menu theme="light" mode="inline" defaultSelectedKeys={['0']} items={items} />
          </Sider>
        )}

        <AntLayout>
          <main className="p-3">{children}</main>
        </AntLayout>
      </AntLayout>

      <style jsx>{style}</style>
    </>
  )
}

const style = css.global`
  .ant-layout {
    background-color: white;
  }
  .ant-layout-sider-light {
    border-right: 1px solid #dadce0;
  }
`
