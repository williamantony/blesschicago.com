import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        Header
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
