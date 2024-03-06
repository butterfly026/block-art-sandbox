import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';

export default ({ children, animate}: {
  children: any,
  animate?: Boolean,
}) => {
  const group = useRef<any>();

  useFrame(() => {
    if (!animate) {
      group.current.rotation.y = 0;
      return;
    }

    group.current.rotation.y += 0.015;
  });

  return <group ref={group}>{children}</group>;
}
