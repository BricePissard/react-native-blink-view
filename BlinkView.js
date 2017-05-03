/* @flow */
/* eslint-disable prefer-const */
/* jshint esversion: 6 */
'use strict';

import React, { Component } from 'react';
import PropTypes            from "prop-types";
import { View, Animated }   from 'react-native';
import TimerMixin           from "react-timer-mixin";

export default React.createClass({
  displayName : 'BlinkView',
  mixins      : [ TimerMixin ],

  /**
   * delay timer handled by TimerMixin
   * @type {null}
   */
  _onDelay : null,

  /**
   * Props validation
   * @type {Object}
   */
  propTypes: {
    delay   : PropTypes.number,
    binking : PropTypes.bool
  },

  /**
   * Default props
   * @return {object} props
   */
  getDefaultProps():Object
  {
    return {
      delay   : 1500,
      binking : true
    }
  },

  /**
   * Init states
   * @return {object} states
   */
  getInitialState():Object
  {
    return {
      delay     : this.props.delay,
      blinkAnim : new Animated.Value( 0 )
    };
  },

  componentWillMount():void
  {
    if ( this.props.binking === true )
    {
      this.clearInterval( this._onDelay );
      this._onDelay = this.setInterval( ():void =>
      {
        this.state.blinkAnim.stopAnimation();
        Animated.timing( this.state.blinkAnim, {
          toValue   : this.state.blinkAnim._value === 0 ? 1 : 0,
          duration  : this.state.delay-1
        }).start();
      }, this.state.delay+1 );
    }
  },

  componentWillUnmount():void
  {
    this.clearInterval( this._onDelay );
  },

  render():View
  {
    return ( this.props.binking === true ) ? (
      <Animated.View
        {...this.props}
        style = {[ this.props.style, { opacity: this.state.blinkAnim.interpolate({
          inputRange  : [ 0, 1 ],
          outputRange : [ 0, 1 ],
        })} ]}>
        {this.props.children}
      </Animated.View>
    )
    :
    <View {...this.props}>
      {this.props.children}
    </View>
    ;
  },

});
