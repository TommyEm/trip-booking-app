import React from 'react';
import { Toast } from 'react-bootstrap';

import { StyledNotification } from './Notification.styled';


export interface INotificationProps {
	className?: string;
	isShown: boolean;
	tripInfo: string;
	onClose: () => void;
}

export const Notification: React.FC<INotificationProps> = ({
	className,
	isShown,
	tripInfo,
	onClose,
}: INotificationProps) => {
    return (
		<StyledNotification
			className={`Notification ${className}`}
			data-testid='test-Notification'
		>
			<Toast
				onClose={onClose}
				show={isShown}
				delay={3000}
				autohide
			>
				<Toast.Header>
					<strong className="me-auto">
						Your trip is booked!
					</strong>
				</Toast.Header>
				<Toast.Body>
					{tripInfo}
				</Toast.Body>
			</Toast>
		</StyledNotification>
	);
}
