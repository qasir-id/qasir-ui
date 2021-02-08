// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Qasir UI
import Button from 'components/inputs/Button';
import colors from 'components/variables/colors';

import IntroSvg from './intro.svg';
import Feature1 from './feature1.svg';
import Feature2 from './feature2.svg';
import Feature3 from './feature3.svg';

const useStyles = makeStyles({
  intro: {
    height: '50vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
  introLeft: {
    '& h1': {
      letterSpacing: '0.05rem',
      fontSize: '4rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      color: colors.red50,
      margin: 0,
    },
    '& p': {
      fontSize: '1.15rem',
      lineHeight: 1.8,
      padding: '1.6rem 0 2.2rem 0',
    },
  },
  introRight: {},
  introName: {
    fontWeight: 300,
    color: colors.black90,
  },
  introVersion: {
    opacity: 0.4,
    fontSize: '0.2em',
    fontWeight: 'normal',
    fontStyle: 'italic',
    textTransform: 'initial',
    color: colors.black70,
  },
  features: {
    position: 'relative',
    background: 'linear-gradient(-190deg, #edf1f3 0%, #ffffff 100%)',
    clipPath: 'polygon(0 150px, 100% 0, 100% 100%, 0% 100%)',
    marginTop: '-7%',
    paddingTop: '13%',
  },
  featureItem: {
    padding: 30,
    '& h3': {
      marginTop: '2rem',
      fontSize: '2.25rem',
      fontWeight: 300,
      marginBottom: '1.5rem',
    },
  },
});

const Intro = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.intro}>
        <div className={classes.introLeft}>
          <h1>
            Qasir <span className={classes.introName}>UI</span>
            <span className={classes.introVersion}>v1.0.0</span>
          </h1>
          <p>
            Qasir User Interface Kit provides you with guidelines, components and templates to boost the user
            experience of your products.
          </p>
          <div>
            <Button
              href="https://github.com/qasir-id/qasir-ui"
              target="_blank"
              variant="contained"
              color="secondary"
              size="large"
            >
              Follow on Github
            </Button>
          </div>
        </div>
        <div className={classes.introRight}>
          <img alt="intro" src={IntroSvg} />
        </div>
      </section>
      <section className={classes.features}>
        <div style={{ margin: '4rem 0' }}>
          <div className={classes.featureItem}>
            <img alt="feature 1" src={Feature1} style={{ width: 200 }} />
            <h3>About Qasir-UI</h3>
            <p>
              Qasir is a cashier system that was created to help businesses record sales, products, stocks,
              and transaction reports. Building on this initiative, Qasir UI style guide emphasizes Qasir’s
              commitment to establish and build the brand.
            </p>
          </div>
          <div className={classes.featureItem}>
            <img alt="feature 2" src={Feature2} style={{ width: 200 }} />
            <h3>Purpose</h3>
            <p>
              The purpose of this project is to create a unified toolkit that is used by UX-designers and
              developers on their projects alike to ensure all Qasir branded projects are accessible,
              appealing and have a consistent look and feel across the board by following Qasir’s design and
              implementation guidelines.
            </p>
            <p>
              The guidelines contained in this guide are to be applied to all Qasir's digital products such as
              websites, web applications, internal systems and other.
            </p>
          </div>
          <div className={classes.featureItem}>
            <img alt="feature 3" src={Feature3} style={{ width: 200 }} />
            <h3>Toolkit</h3>
            <p>
              By unifiying design elements into reusable components, development will simplify and accelerate
              the development of these digital products.
            </p>
            <p>
              The guide is a living document created to meet the needs of Qasir’s front-end developers and
              designers. If there is a component or pattern you need or you have any other feedback, question
              or comment please contact us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
