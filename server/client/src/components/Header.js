import React, { Component } from 'react';
import { connect } from 'react-redux'


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        )

      default:
        return <li> <a href="/#">Currently Logged in</a>></li>
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
