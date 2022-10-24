import React, { useEffect, useState } from 'react'
import css from 'styled-jsx/css'

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export const Clock = ({ h24 = true }) => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [day, setDay] = useState(0)

  useEffect(() => {
    const update = () => {
      const date = new Date()
      let hour = date.getHours()
      if (!h24) {
        hour = hour % 12 || 12
      }
      setHour(hour)
      setMinute(date.getMinutes())
      setDay(date.getDay())
    }

    update()

    const interval = setInterval(() => {
      update()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="clock d-flex align-items-center">
      <div className="mr-3">
        {days.map((value, index) => (
          <div key={value}>{index == day ? value : ''}</div>
        ))}
      </div>

      <div>
        {hour}:{minute}
      </div>

      <style jsx>{style}</style>
    </div>
  )
}

const style = css`
  .clock {
    color: var(--gray-100);
    font-size: 19px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 28px;
  }
`
