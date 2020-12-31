import { useState } from "react";
import styled from "styled-components";
import { Tabs, transition, TABS } from "./Tabs";

const PageContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #845ec2;
`;

const TabsWrapper = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  border-radius: 40px;
  height: 310px;
  padding: 0 10px;
  background: #ff6f91;
`;

const Card = styled.div`
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 240px;
`;

const Content = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  transform: translateX(${(p) => (p.active === 0 ? 0 : `-${p.active * 300}px`)});
  ${transition}
  padding: 10px;
  color: white;
`;

const Tab = styled.div`
  width: 300px;
`;

function App() {
  const [active, setActive] = useState(1);
  return (
    <PageContainer>
      <TabsWrapper>
        <Card>
          <Tabs active={active} setActive={setActive} />
          <Content active={active}>
            {TABS.map((tab, index) => (
              <Tab key={index}>{tab}</Tab>
            ))}
          </Content>
        </Card>
      </TabsWrapper>
    </PageContainer>
  );
}

export default App;
