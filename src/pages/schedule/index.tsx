import React, { useState } from 'react'
import FullCalendar, {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  // formatDate,
  EventInput
} from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

import { Modal } from 'baser-ui/components'
import { Input } from 'baser-ui/controls'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

const INITIAL_EVENTS: EventInput[] = [
  // {
  //   id: createEventId(),
  //   title: 'All-day event',
  //   start: todayStr
  // },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T14:00:00'
  }
]

function createEventId() {
  return String(eventGuid++)
}

export default function Schedule() {
  const [weekendsVisible, ] = useState(true)
  const [, setCurrentEvents] = useState<EventApi>()

  const [visible, setVisible] = useState(false)
  const [titleEvent, setTitleEvent] = useState<string>()

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    // let title = prompt('Please enter a new title for your event')
    // let calendarApi = selectInfo.view.calendar

    // setVisible(true)

    // calendarApi.unselect() // clear date selection

    // console.log('currentEvents', currentEvents)

    // if (currentEvents) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title: titleEvent,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   })
    // }

    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  const renderEventContent = (eventContent: EventContentArg) => {
    console.log('eventContent', eventContent)
    return (
      <>
        <div className="d-flex justify-content-center">
          <b>{eventContent.timeText}</b>
        </div>
        <div className="d-flex justify-content-center">
          <i>{eventContent.event.title}</i>
        </div>
      </>
    )
  }

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events[0])
  }

  const handleOk = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth'
        }}
        initialView="timeGridWeek"
        weekends={weekendsVisible}
        initialEvents={INITIAL_EVENTS}
        select={handleDateSelect}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
      />
      <Modal visible={visible} title={'Add new event'} handleOk={handleOk} handleCancel={handleCancel}>
        <Input
          placeholder="Enter a new title for your event"
          className="mb-3"
          name="titleEvent"
          value={titleEvent}
          onChange={(e: any) => setTitleEvent(e?.target?.value)}
        ></Input>
      </Modal>
    </>
  )
}
