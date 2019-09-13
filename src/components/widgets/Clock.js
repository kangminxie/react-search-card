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
              <p className="bg-light">
                Current local time is {this.state.time}
              </p>
            </div>
        );
    }
}

export default Clock;
