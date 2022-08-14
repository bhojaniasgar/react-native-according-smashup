import React from 'react';
import {View} from 'react-native';

const Head = React.forwardRef(({children, ...restProps}, ref) => {
  return (
    <View ref={ref} {...restProps}>
      {children}
    </View>
  );
});

export default Head;
