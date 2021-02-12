import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
export default function withAuth(ComponentToProtect, token) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        redirect: false,
      };
    }
    componentDidMount() {
      axios
        .get(`https://${process.env.REACT_APP_BASE_URL}:5000/checkAuth`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;

      if (redirect) {
        return <Redirect to="/" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  };
}
