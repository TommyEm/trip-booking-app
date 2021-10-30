import React from 'react';

import { StyledSpacer } from './Spacer.styled';


export interface ISpacerProps {
	className?: string;
	children: React.ReactNode;
	direction?: 'horizontal' | 'vertical';
	size?: number;
	tag?: React.ElementType;
}

export const Spacer: React.FC<ISpacerProps> = ({
	children,
	className,
	direction = 'vertical',
	size = 3,
	tag = 'div',
}: ISpacerProps) => {
    return (
		<StyledSpacer
			as={tag}
			className={`Spacer mod-${direction} ${className}`}
			size={size}
			data-testid='test-Spacer'
		>
			{children}
		</StyledSpacer>
	);
}
