import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form action="/google">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Admin Id : </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter ID"
          />
        </div>
        <div className="mb-3">
          <label>Password : </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
  }
}
          