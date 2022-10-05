import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Drawer from '@mui/material/Drawer';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import SideNav from './SideNav';
import PlusIcon from '../assets/PlusIcon.svg';
import DrawerIcon from '../assets/DrawerIcon.svg';

const StyledBackground = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: var(--Gray-50);
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  box-sizing: border-box;
  width: 95%;
  margin-top: 3%;
`;

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  box-sizing: border-box;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MainTitle = styled.h1`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: 0.3px;
  font-feature-settings: 'liga' off;

  color: var(--Dark);

  flex: none;
  order: 0;
  flex-grow: 0;
`;

// const CreateNewApprenticeship = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: center;
//   padding: 12px 16px;
//   gap: 8px;
//   color: var(--Snow);
//   background: var(--Purple);
//   border-radius: 12px;
//   border: none;

//   flex: none;
//   order: 1;
//   flex-grow: 0;
// `;
const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;
export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1332px)',
  });

  return (
    <div>
      <Drawer
        ModalProps={{
          keepMounted: true,
        }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <SideNav isDesktopOrLaptop />
      </Drawer>
      <StyledBackground>
        <Grid container spacing={2} direction="row">
          <Grid item xs={1} md={2}>
            {isDesktopOrLaptop && <SideNav isDesktopOrLaptop />}
            {!isDesktopOrLaptop && !open && (
              <Button
                variant="contained"
                disableElevation
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                <img
                  width="100%"
                  height="100%"
                  color="var(--Purple)"
                  src={DrawerIcon}
                  alt="Drawer Icon"
                />
              </Button>
            )}
          </Grid>
          <Grid item xs={11} md={10}>
            <Main>
              <MainHeader>
                <MainTitle>Apprenticeship</MainTitle>
                <Button
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px 16px',
                    gap: '8px',
                    color: 'var(--Snow)',
                    background: 'var(--Purple)',
                    borderRadius: '12px',
                    border: 'none',

                    flex: 'none',
                    order: '1',
                    flexGrow: '0',
                  }}
                >
                  <img src={PlusIcon} alt="Plus Icon" />
                  {isDesktopOrLaptop && 'Create New Apprenticeship'}
                </Button>
              </MainHeader>
              <MainContent>
                {/* TODO: Apprenticeship Card Goes Here */}
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>Placeholder</CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </MainContent>
            </Main>
          </Grid>
        </Grid>
      </StyledBackground>
    </div>
  );
}
