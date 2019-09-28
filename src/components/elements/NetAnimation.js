import React, { Component } from 'react'
import { Transition, animated } from 'react-spring/renderprops'

export default class NetAnimation extends Component {
    render() {
        return (
            <Transition
            native
            items={this.props.animate} // boolean here to trigger the animation (similar to binaryString that henry did)
            from={{ opacity: 0, marginRight: -100 }}
            enter={{ opacity: 1, marginRight: 0 }}
            delay={500}
            reverse={true}
            config={{duration: 3000}}
            >

            {show => show && (props => (
                <animated.h3 style={props}><i className="fas fa-satellite"></i></animated.h3>
            ))}
            </Transition>
        )
    }
}
