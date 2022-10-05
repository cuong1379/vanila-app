import React from 'react'
import css from 'styled-jsx/css'
import { Button } from 'baser-ui/controls'

const LineSocial = [
  {
    src: '/svg/facebook.svg',
    routeTo: `https://www.facebook.com/`,
    label: 'Facebook'
  },
  {
    src: '/svg/youtube.svg',
    routeTo: `https://www.youtube.com/`,
    label: 'Youtube'
  },
  {
    src: '/svg/translate.svg',
    routeTo: `https://translate.google.com.vn/?hl=en&tab=cT/`,
    label: 'Translate'
  }
]

const Line3rd = [
  {
    src: '/svg/photos.svg',
    routeTo: `https://photos.google.com/`,
    label: 'Photos'
  },
  {
    src: '/svg/slack.svg',
    routeTo: `https://slack.com/`,
    label: 'Slack'
  },
  {
    src: '/svg/cakehr.svg',
    routeTo: `https://crossian.sage.hr/dashboard/`,
    label: 'CakeHr'
  }
]

const MultiGoogle = ({ session }: any) => {
  const LineGoogle = [
    {
      src: `${session?.user?.image}`,
      routeTo: `https://myaccount.google.com/`,
      label: 'Account'
    },
    {
      src: '/svg/gmail.svg',
      routeTo: `https://mail.google.com/mail/`,
      label: 'Gmail'
    },
    {
      src: '/svg/drive.svg',
      routeTo: `https://drive.google.com/drive/my-drive/`,
      label: 'Drive'
    },
    {
      src: '/svg/docs.svg',
      routeTo: `https://docs.google.com/document/`,
      label: 'Docs'
    },
    {
      src: '/svg/sheets.svg',
      routeTo: `https://docs.google.com/spreadsheets/`,
      label: 'Sheets'
    },
    {
      src: '/svg/slides.svg',
      routeTo: `https://docs.google.com/presentation/`,
      label: 'Slides'
    },
    {
      src: '/svg/calendar.svg',
      routeTo: `https://calendar.google.com/calendar/`,
      label: 'Calendar'
    },
    {
      src: '/svg/meet.svg',
      routeTo: `https://meet.google.com/`,
      label: 'Meet'
    },
    {
      src: '/svg/forms.svg',
      routeTo: `https://docs.google.com/forms/`,
      label: 'Forms'
    }
  ]

  return (
    <div>
      <div className="menu p-4 mt-2">
        <div className="border-bottom pb-2">
          {LineGoogle?.map((x) => {
            return (
              <Button
                className="item"
                type="white"
                style={{ width: '96px', height: '96px' }}
                key={x?.label}
                onClick={() => window?.open(`${x?.routeTo}`, '_blank')?.focus()}
              >
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={x?.src} alt={x?.label} className="img-style" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div> {x?.label} </div>
                  </div>
                </div>
              </Button>
            )
          })}
        </div>
        <div className="border-bottom py-2">
          {LineSocial?.map((x) => {
            return (
              <Button
                className="item"
                type="white"
                style={{ width: '96px', height: '96px' }}
                key={x?.label}
                onClick={() => window?.open(`${x?.routeTo}`, '_blank')?.focus()}
              >
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={x?.src} alt={x?.label} className="img-style" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div> {x?.label} </div>
                  </div>
                </div>
              </Button>
            )
          })}
        </div>
        <div className="border-bottom d-flex py-2">
          {Line3rd?.map((x) => {
            return (
              <Button
                className="item"
                type="white"
                style={{ width: '96px', height: '96px' }}
                key={x?.label}
                onClick={() => window?.open(`${x?.routeTo}`, '_blank')?.focus()}
              >
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={x?.src} alt={x?.label} className="img-style" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div> {x?.label} </div>
                  </div>
                </div>
              </Button>
            )
          })}
        </div>
      </div>
      <style jsx>{styleMenu}</style>
    </div>
  )
}

const styleMenu = css`
  .menu {
    border: 1px solid #dadce0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    max-height: 450px;
    width: 345px;
    overflow: scroll;

    background-color: white;
  }
  .border-bottom {
    border-bottom: 1px solid #dadce0;
    // display: flex;
    // align-items: center;
  }
  .img-style {
    width: 40px;
    border-radius: 100%;
  }
`

export default MultiGoogle
