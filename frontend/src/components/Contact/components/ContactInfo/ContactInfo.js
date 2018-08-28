import React, { Component } from 'react';
import './ContactInfo.css';
import Heading from '../../../Heading/Heading';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Rajan Abraham',
          phone: '+1 (630) 640-2807',
        },
        {
          name: 'Pr. Y. Joseph',
          phone: '+1 (847) 371-1735',
        },
        {
          name: 'Punnoose Abraham',
          phone: '+1 (630) 640-4788',
        },
        {
          name: 'Pr. Joseph K. Joseph',
          phone: '+1 (847) 414-9805',
        },
        {
          name: 'Pr. George Stephenson',
          phone: '+1 (630) 546-9060',
        },
        {
          name: 'Grace Abraham',
          phone: '+1 (630) 408-4123',
        },
      ],
    };
  }

  render() {
    return (
      <div className="ContactInfo">
        <Heading type="h3" text="Reach a Coordinator" />
        <div className="ContactInfo__list">
          {
            this.state.people.map((person) => {
              return (
                <div className="ContactInfo__person" key={person.name} tabIndex="0">
                  <div className="ContactInfo__person__name">{ person.name }</div>
                  <div className="ContactInfo__person__phone">{ person.phone }</div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

export default ContactInfo;
