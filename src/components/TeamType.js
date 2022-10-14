/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import '../css/teamType.css';
import { Tooltip } from '@mui/material';
import untickCircleIcon from '../assets/untickCircleIcon.svg';
import tickCircleIcon from '../assets/tickCircleIcon.svg';
import monitorIcon from '../assets/monitorIcon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import keyboardOpenIcon from '../assets/keyboardOpenIcon.svg';
import InfoIcon from '../assets/InfoIcon.svg';
import driverIcon from '../assets/driverIcon.svg';
import growthIcon from '../assets/growthIcon.svg';
import boxIcon from '../assets/boxIcon.svg';
import box2Icon from '../assets/box2Icon.svg';

function TeamType() {
  // const [select, useSelect] = React.useState(false);
  // const toggle = () => {};
  const [selected, setSelected] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(null);

  const onClickHandler = (id) => {
    if (selectedId === id) {
      setSelected(false);
      setSelectedId(null);
    } else {
      setSelectedId(id);
      setSelected(true);
    }
  };
  return (
    <div>
      <div className="main">
        <div className="header">
          <h1 className="containerName">Team Types</h1>
          {/* <span className="containerImg">
            <div className="overlay">
              <div className="hiddenText">
                Select one of the below boxes as your team type, so that it will
                be clear which roles are you going to need!
              </div>
            </div> */}
          <Tooltip title="Select one of the below boxes as your team type, so that it will be clear which roles are you going to need!">
            <img className="img" src={InfoIcon} alt="Information Icon" />
          </Tooltip>
          {/* </span> */}
        </div>
        <div className="firstRow">
          <span
            className="box1"
            onClick={() => {
              onClickHandler('Web');
            }}
          >
            <span className="leftBox">
              <div className="pic">
                <img className="img" src={monitorIcon} alt="Monitor Icon" />
              </div>
              <div className="text">Web Platform</div>
            </span>
            <span className="rightBox">
              <img
                className="img"
                src={
                  selectedId === 'Web' && selected
                    ? tickCircleIcon
                    : untickCircleIcon
                }
                alt={
                  selectedId === 'Web' && selected
                    ? 'Ticked Circle Icon'
                    : 'Untick Circle Icon'
                }
              />
            </span>
          </span>
          <span
            className="box2"
            onClick={() => {
              onClickHandler('Mobile');
            }}
          >
            <span className="leftBox">
              <div className="pic">
                <img className="img" src={mobileIcon} alt="Monitor Icon" />
              </div>
              <div className="text">Mobile App</div>
            </span>
            <span className="rightBox">
              <img
                className="img"
                src={
                  selectedId === 'Mobile' && selected
                    ? tickCircleIcon
                    : untickCircleIcon
                }
                alt={
                  selectedId === 'Mobile' && selected
                    ? 'Ticked Circle Icon'
                    : 'Untick Circle Icon'
                }
              />
            </span>
          </span>
          <span className="box3">
            <span className="leftBox">
              <div className="pic">
                <img className="img" src={growthIcon} alt="Monitor Icon" />
              </div>
              <div className="text">Growth</div>
            </span>
            <span className="rightBox">
              <img
                className="img"
                src={untickCircleIcon}
                alt="Untick Circle Icon"
              />
            </span>
          </span>
        </div>
        <div className="secondRow">
          <span className="box1">
            <span className="leftBox">
              <div className="pic">
                <img
                  className="img"
                  src={keyboardOpenIcon}
                  alt="Monitor Icon"
                />
              </div>
              <div className="text">Marketing Website</div>
            </span>
            <span className="rightBox">
              <img
                className="img"
                src={untickCircleIcon}
                alt="Untick Circle Icon"
              />
            </span>
          </span>
          <span className="box2">
            <span className="leftBox">
              <div className="pic">
                <img className="img" src={boxIcon} alt="Monitor Icon" />
              </div>
              <div className="text">Prototyping</div>
            </span>
            <span className="rightBox">
              <img
                className="img"
                src={untickCircleIcon}
                alt="Untick Circle Icon"
              />
            </span>
          </span>
          <span className="box3">
            <span className="leftBox">
              <div className="pic">
                <img className="img" src={driverIcon} alt="Monitor Icon" />
              </div>
              <div className="text">Data</div>
            </span>
            <span className="rightBox">
              <img
                className="img"
                src={untickCircleIcon}
                alt="Untick Circle Icon"
              />
            </span>
          </span>
        </div>
        <div className="thirdRow">
          <span className="box1">
            <span className="leftBox">
              <div className="pic">
                <img className="img" src={box2Icon} alt="Monitor Icon" />
              </div>
              <div className="text">Custom Team</div>
            </span>
            <span className="rightBox">
              <img
                className="img"
                src={untickCircleIcon}
                alt="Untick Circle Icon"
              />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamType;
