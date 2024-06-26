import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex-inline-block;
    padding: .5em;
    margin: .5em;
    border-radius: .5em;
    border: none;
    border-bottom: 0.2em solid var(--primary-color);
    cursor: pointer;
    font-size: 1em;
    transition: background-color ease 0.2s;
    &:hover {
        background-color: var(--secondary-color);
    }
    &.disabled {
        pointer-events: none;
        opacity: 0.3;
    }
`;

interface Props {
    label: string,
    active: boolean,
    onClick: () => void;
}

const Button: React.FC<Props> = ({ label, onClick, active = true}) => {
    return (
        <StyledButton className={`${active ? '' : 'disabled'}`} onClick={ onClick }>
            { label }
        </StyledButton>
    )
}

export default Button;