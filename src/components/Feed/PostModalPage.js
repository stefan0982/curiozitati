import React                    from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper            from '@material-ui/core/MobileStepper';
import Paper                    from '@material-ui/core/Paper';
import Button                   from '@material-ui/core/Button';
import KeyboardArrowLeft        from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight       from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews           from 'react-swipeable-views';
import { Typography }           from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    // height: 'auto',
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxHeight: 800,
    display: 'block',
    maxWidth: 800,
    overflow: 'hidden',
    width: '100%',
  },
}));

function PostModalPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.edges.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.edges.map((item, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
              <img className={classes.img} src={item.node.imagine.fluid.src} />
              <Paper square elevation={0} className={classes.header}>
                <Typography>{ item.node.imagine.description }</Typography>
              </Paper>
              </>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={e => props.next(e)} disabled={activeStep === maxSteps - 1}>
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </div>
  );
}

export default PostModalPage;