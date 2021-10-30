import React, {
	useCallback,
	useContext,
	useState,
} from 'react';
import { ToggleButton } from 'react-bootstrap';

import { StyledToggleModeButton } from './ToggleModeButton.styled';
import * as actions from '../../../store/actionTypes';
import { AppContext } from '../../../store/Store';


export interface IToggleModeButtonProps {
	className?: string;
}

export const ToggleModeButton: React.FC<IToggleModeButtonProps> = ({
	className,
}: IToggleModeButtonProps) => {

	const [isDarkMode, setDarkMode] = useState<boolean>(true);
	const { dispatch } = useContext(AppContext);

	const toggleThemeMode = useCallback(() => {
		setDarkMode(!isDarkMode);
		dispatch({ type: actions.UPDATE_THEME_MODE, payload: !isDarkMode });
	}, [dispatch, isDarkMode]);

    return (
		<StyledToggleModeButton
			className={`ToggleModeButton ${isDarkMode ? 'mod-checked' : ''} ${className}`}
			data-testid='test-ToggleModeButton'
		>
			<span>Light</span>
			<ToggleButton
				id='toggle-dark-mode'
				checked={isDarkMode}
				value='dark'
				onClick={toggleThemeMode}
			>
				Toggle
			</ToggleButton>
			<span>Dark</span>
		</StyledToggleModeButton>
	);
}
