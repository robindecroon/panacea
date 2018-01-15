import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepButton } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import PropTypes from 'prop-types'

const T = i18n.createComponent();

const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['Informatie', 'Herinneringen instellen', 'Toegang'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Step 1: Select campaign settings...';
        case 1:
            return 'Step 2: What is an ad group anyways?';
        case 2:
            return 'Step 3: This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

class AutonomyMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            completed: {},
        };


    }

    completedSteps() {
        return Object.keys(this.state.completed).length;
    }

    totalSteps = () => {
        return getSteps().length;
    };

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps();
    }

    handleNext = () => {
        let activeStep;

        if (this.isLastStep() && !this.allStepsCompleted()) {
            // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            const steps = getSteps();
            activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
        } else {
            activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep,
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };

    handleComplete = () => {
        const { completed } = this.state;
        completed[this.state.activeStep] = true;
        this.setState({
            completed,
        });
        this.handleNext();
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
            completed: {},
        });
    };


    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepButton
                                    onClick={this.handleStep(index)}
                                    completed={this.state.completed[index]}
                                >
                                    {label}
                                </StepButton>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.allStepsCompleted() ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&quot;re finished
                            </Typography>
                            <Button onClick={this.handleReset}>Reset</Button>
                        </div>
                    ) : (
                            <div>
                            {(() => {
                                    switch (activeStep) {
                                        case 1:
                                            return <Card className={classes.card}>
                                                        <CardContent>
                                                            <Typography className={classes.title}>{getSteps()[activeStep]}</Typography>
                                                            <Typography type="headline" component="h2">
                                                            Panacea onderzoeksproject
                                                            </Typography>
                                                            <Typography paragraph align="justify">
                                                            Hartelijk dank om deel te nemen aan ons panacea onderzoeksproject. In deze applicatie, met de naam Panacea@Home, willen we u helpen bij het meten van uw gezondheidparameters met behulp van vragenlijsten en sensoren.<br /><br />
                                                            In Panacae@Home heeft u zelf de mogelijkheid om te kiezen wanneer en waar u herinneringen wilt ontvangen. Om deze reden zullen we u in de volgende stap enkele vragen stellen om u zo optimaal mogelijk te kunnen helpen.
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                        default:
                                            <span>test</span>
                                    }
                                })()}
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title}>{getSteps()[activeStep]}</Typography>
                                        <Typography type="headline" component="h2">
                                           Panacea onderzoeksproject
                                        </Typography>
                                        <Typography paragraph align="justify">
                                            Hartelijk dank om deel te nemen aan ons panacea onderzoeksproject. In deze applicatie, met de naam Panacea@Home, willen we u helpen bij het meten van uw gezondheidparameters met behulp van vragenlijsten en sensoren.<br /><br />
                                            In Panacae@Home heeft u zelf de mogelijkheid om te kiezen wanneer en waar u herinneringen wilt ontvangen. Om deze reden zullen we u in de volgende stap enkele vragen stellen om u zo optimaal mogelijk te kunnen helpen.
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Terug
                                    </Button>
                                    <Button raised color="primary" onClick={this.handleNext} className={classes.button}>
                                        Volgende
                                    </Button>
                                    {activeStep !== steps.length &&
                                        (this.state.completed[this.state.activeStep] ? (
                                            <Typography type="caption" className={classes.completed}>
                                                Step {activeStep + 1} already completed
                                            </Typography>
                                        ) : (
                                                <Button raised color="primary" onClick={this.handleComplete}>
                                                    {this.completedSteps() === this.totalSteps() - 1 ? 'Klaar' : 'Voltooi stap'}
                                                </Button>
                                            ))}
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

AutonomyMain.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutonomyMain);