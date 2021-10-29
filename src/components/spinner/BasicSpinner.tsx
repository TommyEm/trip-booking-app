import React from 'react';
import { Spinner } from 'react-bootstrap';

import { StyledSpinner } from './BasicSpinner.styled';


export interface IBasicSpinnerProps {
	className?: string;
}

export const BasicSpinner: React.FC<IBasicSpinnerProps> = ({
	className,
}: IBasicSpinnerProps) => {
    return (
		<StyledSpinner
			className={`Spinner ${className}`}
			data-testid='test-Spinner'
		>
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</StyledSpinner>
	);
}
