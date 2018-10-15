import React from 'react'
import Button from '../../../components/Button'

const Link = ({ children, onClick }) => (
    <Button
        onClick={onClick}
        customButtonStyles={{
            marginLeft: 4,
            flex: 1,
        }}
        label={children}
        raised
    />
)

export default Link
