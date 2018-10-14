import React from 'react'
import Button from '../../../../src/components/Button'

const Link = ({ active, children, onClick }) => (
  <Button
     onClick={onClick}
     customButtonStyles={{
         marginLeft: 4,
         flex: 1,
     }}
     label={children}
     raised
  />
);

export default Link
