import React, { Component } from 'react';
import './EventSchedule.css';

class EventSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
      ],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December',
      ],
      events: [
        {
          dateTime: '1537572600000',
          name: 'Friday Evening',
          place: '120 E Oak St,\nAddison, IL 60101',
        },
        {
          dateTime: '1537659000000',
          name: 'Saturday Evening',
          place: '120 E Oak St,\nAddison, IL 60101',
        },
        {
          dateTime: '1537745400000',
          name: 'Sunday Evening',
          place: '120 E Oak St,\nAddison, IL 60101',
        }
      ]
    }
  }

  render() {
    return (
      <div className="EventSchedule">
        <div className="EventSchedule__gradient" />
        <div className="EventSchedule__gradient" />
        <div className="EventSchedule__wrapper">
          {
            this.state.events.map((event, index) => {

              const dateTime = new Date(parseInt(event.dateTime));

              const date = dateTime.getDate();
              const day = this.state.days[dateTime.getDay()];
              const month = this.state.months[dateTime.getMonth()];
              const year = dateTime.getFullYear();

              const hours = dateTime.getHours();
              const hours12 = (hours > 12) ? hours - 12 : hours;
              const minutes = dateTime.getMinutes();
              const ampm = (hours >= 12) ? 'PM' : 'AM';

              return (
                <div className="EventSchedule__item" key={index}>
                  <div className="EventCard">
                  
                    <div className="EventCard__name">{ event.name }</div>

                    <div className="EventCard__row">
                      <div className="EventCard__label">Date</div>
                      <div className="EventCard__value">
                        { `${month} ${date}, ${year}` }
                        <br />
                        { `(${day})` }
                      </div>
                    </div>
                    <div className="EventCard__row">
                      <div className="EventCard__label">Time</div>
                      <div className="EventCard__value">{ `${hours12}:${minutes} ${ampm}` }
                      </div>
                    </div>

                    <div className="EventCard__row">
                      <div className="EventCard__label">Place</div>
                      <div className="EventCard__value">
                            {
                              event.place.split('\n').map((part, i) => {
                                return <div key={index}>{ part }</div>;
                              })
                            }
                      </div>
                    </div>

                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

export default EventSchedule;
