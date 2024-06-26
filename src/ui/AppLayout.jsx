import styled from "styled-components";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LoadingDiv from "./loading/LoadingDiv";
import Sidebar from "./sidebar/Sidebar";

const Main = styled.main`
  overflow: auto;
  padding: 2rem 1.8rem 3.4rem;
  background-color: var(--color-grey-50);
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
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Suspense fallback={<LoadingDiv additionalStyle="height: 100%" />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
