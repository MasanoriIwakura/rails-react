import * as React from "react";

interface INoticeProps {
  message: string | null;
}

interface INoticeState {}

class Notice extends React.Component<INoticeProps, INoticeState> {
  render() {
    return (
      <React.Fragment>
        {this.props.message != null && (
          <article className="message is-success">
            <div className="message-body">{this.props.message}</div>
          </article>
        )}
      </React.Fragment>
    );
  }
}

export default Notice;
