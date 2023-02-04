import { Container, Step, StepLabel, Stepper } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

interface StepWrapperProps {
    activeStep: number;
}
const steps = ['Track information', 'Download the cover', 'Download the track'];

const StepWrapper: FC<PropsWithChildren<StepWrapperProps>> = ({
    activeStep,
    children,
}) => {
    return (
        <Container style={{ marginTop: '50px' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => (
                    <Step key={index} completed={activeStep > index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="overflow-hidden bg-white drop-shadow-2xl sm:rounded-lg my-12">
                {children}
            </div>
        </Container>
    );
};

export default StepWrapper;
