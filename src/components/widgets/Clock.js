// components/widgets/Clock.js
import React from 'react';

class Clock extends React.Component {
    state = {
        time: new Date().toLocaleTimeString()
    }
    componentDidMount() {
      setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000)
    }
    render() {
        return (
            <div className="my-3">
              <div className="bg-light">
                <h6>Current local time is {this.state.time}</h6>
              </div>
            </div>
        );
    }
}

export default Clock;
