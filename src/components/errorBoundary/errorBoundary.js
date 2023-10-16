import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    //Log the error to an error tracking service
    console.log(error, errorInfo);
    this.setState({ hasError: true });
  } 

  render() {
    if(this.state.hasError) {
        return (
            <div className='error-boundary'>
                <h1>Something went wrong.</h1>
                <p>Please try again later.</p>
            </div>
        );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;