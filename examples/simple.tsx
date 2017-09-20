import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tooltip from '../src/index';
import 'rmc-tooltip/assets/bootstrap.less';

// do not use rc-tooltip/lib/placements
import placements from '../src/placements';

class Test extends Component<any, any> {
  state = {
    destroyTooltipOnHide: false,
    placement: 'right',
    offsetX: placements.right.offset[0],
    offsetY: placements.right.offset[1],
    transitionName: '',
  };
  onPlacementChange = (e) => {
    const placement = e.target.value;
    const offset = placements[placement].offset;
    this.setState({
      placement: e.target.value,
      offsetX: offset[0],
      offsetY: offset[1],
    });
  }
  onTransitionChange = (e) => {
    this.setState({
      transitionName: e.target.checked ? e.target.value : '',
    });
  }
  onOffsetXChange = (e) => {
    const targetValue = e.target.value;
    this.setState({
      offsetX: targetValue || undefined,
    });
  }
  onOffsetYChange = (e) => {
    const targetValue = e.target.value;
    this.setState({
      offsetY: targetValue || undefined,
    });
  }
  onVisibleChange = (visible) => {
    /* tslint:disable:no-console */
    console.log('tooltip', visible);
  }
  onDestroyCheck = () => {
    this.setState({
      destroyTooltipOnHide: !this.state.destroyTooltipOnHide,
    });
  }
  preventDefault = (e) => {
    e.preventDefault();
  }
  render() {
    const state = this.state;
    return (<div>
      <div style={{ margin: '10px 20px' }}>
        <label>
          placement:
          <select value={this.state.placement} onChange={this.onPlacementChange}>
            {Object.keys(placements).map((p) => {
              return <option key={p} value={p}>{p}</option>;
            })}
          </select>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input
            value="rmc-tooltip-zoom"
            type="checkbox"
            onChange={this.onTransitionChange}
            checked={this.state.transitionName === 'rmc-tooltip-zoom'}
          />
          transitionName
        </label>

        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          <input
            type="checkbox"
            onChange={this.onDestroyCheck}
            checked={this.state.destroyTooltipOnHide}
          />
          destroyTooltipOnHide
        </label>

        &nbsp;&nbsp;&nbsp;&nbsp;
        <br/>
        <label>
          offsetX:
          <input
            type="text"
            value={state.offsetX}
            onChange={this.onOffsetXChange}
            style={{ width: 50 }}
          />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          offsetY:
          <input
            type="text"
            value={state.offsetY}
            onChange={this.onOffsetYChange}
            style={{ width: 50 }}
          />
        </label>
      </div>
      <div style={{ margin: 100 }}>
        <Tooltip
          placement={this.state.placement}
          destroyTooltipOnHide={this.state.destroyTooltipOnHide}
          onVisibleChange={this.onVisibleChange}
          overlay={<div style={{ height: 50, width: 50 }}>i am a tooltip</div>}
          align={{
            offset: [this.state.offsetX, this.state.offsetY],
          }}
          transitionName={this.state.transitionName}
        >
          <div style={{ height: 100, width: 100, border: '1px solid red' }}>trigger</div>
        </Tooltip>
      </div>
    </div>);
  }
}

ReactDOM.render(<Test />, document.getElementById('__react-content'));
