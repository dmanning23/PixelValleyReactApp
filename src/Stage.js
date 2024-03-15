// your Stage:
import { Stage as PixiStage } from '@pixi/react';
import DataContext from './DataContext';
import ContextBridge from './ContextBridge';

export const Stage = ({ children, ...props }) => {
    return (
        <ContextBridge
            Context={DataContext}
            render={(children) => <PixiStage {...props}>{children}</PixiStage>}>
            {children}
        </ContextBridge>
    );
};