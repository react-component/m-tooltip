import React, { Component } from 'react';
import Trigger from 'rmc-trigger';
import { placements } from './placements';

export interface ITooltipProps {
  trigger?: any;
  defaultVisible?: boolean;
  visible?: boolean;
  placement?: string;
  transitionName?: string;
  animation?: any;
  onVisibleChange?: Function;
  afterVisibleChange?: Function;
  overlay: React.ReactNode | Function;
  overlayStyle?: {};
  overlayClassName?: string;
  prefixCls?: string;
  getTooltipContainer?: Function;
  destroyTooltipOnHide?: boolean;
  align?: {};
  arrowContent?: any;
}

class Tooltip extends Component<ITooltipProps, any> {
  static defaultProps = {
    prefixCls: 'rmc-tooltip',
    mouseEnterDelay: 0,
    destroyTooltipOnHide: false,
    mouseLeaveDelay: 0.1,
    align: {},
    placement: 'right',
    trigger: ['hover'],
    arrowContent: null,
  };

  trigger: any;

  getPopupElement = () => {
    const { arrowContent, overlay, prefixCls } = this.props;
    return ([
      <div className={`${prefixCls}-arrow`} key="arrow">
        {arrowContent}
      </div>,
      <div className={`${prefixCls}-inner`} key="content">
        {typeof overlay === 'function' ? overlay() : overlay}
      </div>,
    ]);
  }

  getPopupDomNode() {
    return this.trigger.triggerRef.getPopupDomNode();
  }

  saveTrigger = (node) => {
    this.trigger = node;
  }

  render() {
    const {
      overlayClassName, trigger,
      overlayStyle, prefixCls,
      children, onVisibleChange, afterVisibleChange,
      transitionName, animation,
      placement, align,
      destroyTooltipOnHide,
      defaultVisible, getTooltipContainer,
      ...restProps,
    } = this.props;
    const extraProps: any = { ...restProps };
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return (<Trigger
      popupClassName={overlayClassName}
      ref={this.saveTrigger}
      prefixCls={prefixCls}
      popup={this.getPopupElement}
      builtinPlacements={placements}
      popupPlacement={placement}
      popupAlign={align}
      getPopupContainer={getTooltipContainer}
      onPopupVisibleChange={onVisibleChange}
      afterPopupVisibleChange={afterVisibleChange}
      popupTransitionName={transitionName}
      popupAnimation={animation}
      defaultPopupVisible={defaultVisible}
      destroyPopupOnHide={destroyTooltipOnHide}
      popupStyle={overlayStyle}
      {...extraProps}
    >
      {children}
    </Trigger>);
  }
}

export default Tooltip;
