class MyAuthWorkflowController {
  _initialized;
  _onInitialized;
  props; //props here because we are not in context of react lol

  constructor() {
    this._initialized = new Promise((resolve, _reject) => {
      this._onInitialized = resolve;
    });
  }

  //pass in props because we are not in context of react lol
  componentDidUpdate(props, prevProps) {
  this.props = props;
  this.prevProps = prevProps;
    // check if either deviceInfo has updated
    if (
      prevProps.deviceInfo !== props.deviceInfo
    ) {
      // if props are set then we can resolve the initialized promise.
      if (props.deviceInfo) {
        this._onInitialized();
      }
    }
  }

  _getBuildInfo = async () => {
    // ensure that device info has been resolved.
    await this._initialized;

    const { buildNumber } = this.props.deviceInfo;

    console.log("buildNumber", buildNumber);
  }

  render() {
    //render the presentational component
  }
}
