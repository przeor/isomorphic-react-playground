var React = require('react')

var Component = React.createClass({
  handleClick: function() {
    alert(this.props.msg);
  },
  render:function(){
    return React.createElement('button', {onClick: this.handleClick}, this.props.msg)
  }
});

module.exports = Component;
