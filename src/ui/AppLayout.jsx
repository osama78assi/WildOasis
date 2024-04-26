import styled from "styled-components";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LoadingDiv from "./loading/LoadingDiv";
import Sidebar from "./sidebar/Sidebar";

const Main = styled.main`
  overflow: auto;
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  @media (max-width: 1200px) {
    padding: 2rem 1.8rem 3.4rem;
  }
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;

  @media (max-width: 1000px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Suspense fallback={<LoadingDiv additionalStyle="height: 100%" />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
