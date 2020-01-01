import React, { Component } from 'react';
import { connect } from 'react-redux'


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still waiting from servers"

      case false:
        return "User is currently logged out"

      default:
        return "User is logged in!"
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/#" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);
