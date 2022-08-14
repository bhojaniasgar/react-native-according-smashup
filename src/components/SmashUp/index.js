/**
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Head from '../Head';
import Body from '../Body';

const SmashUp = React.forwardRef(
  (
    {
      isExpanded = false,
      disabled = false,
      onToggle = () => undefined,
      handleLongPress = () => undefined,
      touchableOpacityProps = {},
      children,
      ...restProps
    },
    ref,
  ) => {
    const [show, setShow] = useState(isExpanded);
    useEffect(() => {
      setShow(isExpanded);
    }, [isExpanded]);
    let header = null;
    let body = null;
    React.Children.forEach(children, child => {
      if (child.type === Head) {
        header = child;
      } else if (child.type === Body) {
        body = child;
      }
    });
    if (header === null) {
      console.warn(
        "header wasn't found to be rendered. Please make sure you have wrapped an Head in the Collapse Component.",
      );
      return null;
    } else {
      return (
        <View ref={ref} {...restProps}>
          <TouchableOpacity
            {...touchableOpacityProps}
            disabled={disabled}
            onPress={() => {
              onToggle(!show);
              setShow(!show);
            }}
            onLongPress={handleLongPress}>
            {header}
          </TouchableOpacity>
          {show && body}
        </View>
      );
    }
    // eslint-disable-next-line prettier/prettier
  }
);

export default SmashUp;
