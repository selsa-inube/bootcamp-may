
import { useState } from 'react';
import { StyledSwicth } from './styles';

export const Switch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = () => {
        setIsChecked(!isChecked);
        console.log('Switch is checked:', isChecked);
    };

    return (
        <>
            <StyledSwicth
                type="checkbox"
                checked={isChecked}
                onChange={handleSwitchChange}
            />
        </>
    );
};