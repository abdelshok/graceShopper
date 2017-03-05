import React, {Component, PropTypes} from 'react';


class MobileTearSheet extends Component {

  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.number.isRequired,
  };

  static defaultProps = {
    height: 500,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      prepareStyles,
    } = this.context.muiTheme;

    const styles = {
      root: {
        marginBottom: 24,
        marginRight: 24,
        maxWidth: 360,
        width: '100%',
      },
      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        overflow: 'hidden',
      },
      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        maxWidth: 360,
      },
    };

    return (
      <div style={prepareStyles(styles.root)}>
        <div style={prepareStyles(styles.container)}>
          {this.props.children}
        </div>
        <img style={prepareStyles(styles.bottomTear)} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNjAgMTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDM2MCAxMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cjxwb2x5Z29uIGZpbGw9IiNEQUQ5RDkiIHBvaW50cz0iMzU5LDAgMzU5LDcuNSAzNTIuNSwwLjUgMzQ1LDguNSAzMzcuNSwwLjUgMzMwLDguNSAzMjIuNSwwLjUgMzE1LDguNSAzMDcuNSwwLjUgMzAwLDguNSAyOTIuNSwwLjUKCTI4NSw4LjUgMjc3LjUsMC41IDI3MCw4LjUgMjYyLjUsMC41IDI1NSw4LjUgMjQ3LjUsMC41IDI0MCw4LjUgMjMyLjUsMC41IDIyNSw4LjUgMjE3LjUsMC41IDIxMCw4LjUgMjAyLjUsMC41IDE5NSw4LjUgMTg3LjUsMC41CgkxODAsOC41IDE3Mi41LDAuNSAxNjUsOC41IDE1Ny41LDAuNSAxNTAsOC41IDE0Mi41LDAuNSAxMzUsOC41IDEyNy41LDAuNSAxMjAsOC41IDExMi41LDAuNSAxMDUsOC41IDk3LjUsMC41IDkwLDguNSA4Mi41LDAuNQoJNzUsOC41IDY3LjUsMC41IDYwLDguNSA1Mi41LDAuNSA0NSw4LjUgMzcuNSwwLjUgMzAsOC41IDIyLjUsMC41IDE1LDguNSA3LjUsMC41IDEsNy41IDEsMCAwLDAgMCwxMCA3LjUsMiAxNSwxMCAyMi41LDIgMzAsMTAKCTM3LjUsMiA0NSwxMCA1Mi41LDIgNjAsMTAgNjcuNSwyIDc1LDEwIDgyLjUsMiA5MCwxMCA5Ny41LDIgMTA1LDEwIDExMi41LDIgMTIwLDEwIDEyNy41LDIgMTM1LDEwIDE0Mi41LDIgMTUwLDEwIDE1Ny41LDIgMTY1LDEwCgkxNzIuNSwyIDE4MCwxMCAxODcuNSwyIDE5NSwxMCAyMDIuNSwyIDIxMCwxMCAyMTcuNSwyIDIyNSwxMCAyMzIuNSwyIDI0MCwxMCAyNDcuNSwyIDI1NSwxMCAyNjIuNSwyIDI3MCwxMCAyNzcuNSwyIDI4NSwxMAoJMjkyLjUsMiAzMDAsMTAgMzA3LjUsMiAzMTUsMTAgMzIyLjUsMiAzMzAsMTAgMzM3LjUsMiAzNDUsMTAgMzUyLjUsMiAzNjAsMTAgMzYwLDAgIi8+Cjwvc3ZnPgo=" />
      </div>
    );
  }
}

export default MobileTearSheet
