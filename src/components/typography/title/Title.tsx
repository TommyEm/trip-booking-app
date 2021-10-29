import React from 'react';

import { StyledTitle } from './Title.styled';


export interface ITitleProps {
	className?: string;
	children: React.ReactNode;
}

export const Title: React.FC<ITitleProps> = ({
	className,
	children,
}: ITitleProps) => {
    return (
		<StyledTitle
			className={`Title ${className}`}
			data-testid='test-Title'
		>
			{children}
		</StyledTitle>
	);
}
