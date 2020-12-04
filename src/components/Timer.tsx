import React from 'react';

interface Props {
    initialValue?: number;
}

interface State {
    seconds: number
}

export class Timer extends React.Component<Props, State> {
    interval: any;

    constructor(props: Props) {
      super(props);
      this.state = { seconds: props.initialValue || 0 };
      console.log("[Timer] Constructing");
    }
  
    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
      console.log("[Timer] Adding interval");
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
      console.log("[Timer] Removing interval");
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }