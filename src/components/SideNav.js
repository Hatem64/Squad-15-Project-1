import React from 'react';
import styled from 'styled-components';
import RadicalXLogo from '../assets/RadicallX-Black-Logo 1.png';
import AppernticeshipIcon from '../assets/ApprenticeshipIcon.svg';
import DashboardIcon from '../assets/DashboardIcon.svg';
import JobIcon from '../assets/JobIcon.svg';
import SettingsIcon from '../assets/SettingsIcon.svg';

const NavContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 34px 20px;
  gap: 34px;

  box-sizing: border-box;
  width: min(100%, 237px);
  height: 97%;
  margin-top: 4.5%;
  margin-left: ${(props) => (props.isDesktopOrLaptop ? '4.5%' : '0')};
  background: var(--Snow);
  box-shadow: 0px 12px 34px rgba(0, 0, 0, 0.04);
  border-radius: 24px;
`;
const NavBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0px;
  gap: 50px;
  box-sizing: border-box;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Logo = styled.img`
  width: min(100%, 160px);
  height: 32px;
  align-self: center;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NavOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 0px;
  gap: 12px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const NavButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5%;
  box-sizing: border-box;
  padding: 12px 16px;
  font-family: 'Space Grotesk', sans-serif;
  width: 100%;
  height: 48px;

  border-radius: 16px;
  order: ${(props) => props.order};
  background: ${(props) => (props.active ? '#665FEF29' : 'var(--Snow)')};
  border: ${(props) => (props.active ? '1px solid var(--Purple)' : 'none')};
  border-radius: ${(props) => (props.active ? '16px' : 'none')};

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const NavIcon = styled.img`
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NavText = styled.p`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  display: flex;
  align-items: center;
  letter-spacing: 0.3px;
  font-feature-settings: 'liga' off;

  color: var(--Dark);

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const NavFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 152px;
  height: 50px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Placeholder = styled.div`
  width: 50px;
  height: 50px;

  /* Gray 50 */

  background: var(--Gray-50);
  border-radius: 16px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

function SideNav(props) {
  const { isDesktopOrLaptop } = props;
  return (
    <NavContainer isDesktopOrLaptop={isDesktopOrLaptop}>
      <NavBody>
        <Logo src={RadicalXLogo} alt="RadicalX Logo" />
        <NavOptions>
          <NavButton order={1}>
            <NavIcon src={DashboardIcon} alt="Dashboard Icon" />
            <NavText>Dashboard</NavText>
          </NavButton>
          <NavButton order={2} active>
            <NavIcon src={AppernticeshipIcon} alt="Apprenticeship Icon" />
            <NavText>Apprenticeship</NavText>
          </NavButton>
          <NavButton order={3}>
            <NavIcon src={JobIcon} alt="Job Icon" />
            <NavText>Job</NavText>
          </NavButton>
          <NavButton order={4}>
            <NavIcon src={SettingsIcon} alt="Settings Icon" />
            <NavText>Settings</NavText>
          </NavButton>
        </NavOptions>
      </NavBody>
      <NavFooter>
        <Placeholder />
        <NavText>Adam Scott</NavText>
      </NavFooter>
    </NavContainer>
  );
}

export default SideNav;
