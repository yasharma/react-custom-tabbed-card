import styled, { css } from "styled-components";
import { rgba } from "polished";

export const TABS = ["cute", "funny","ugly"];
const Row = styled.div`
  display: flex;
  position: relative;
`;

export const transition = css`
  transition: transform 0.45s;
`;

const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0%;
  width: 33.33%;
  height: 4px;
  background: #F9F871;
  transform: translateX(${(p) => (p.active === 0 ? 0 : p.active * 100)}%);
  ${transition}
`;

const Button = styled.button`
  flex: 1 1 33.33%;
  outline: none;
  height: 30px;
  cursor: pointer;
  border-bottom: 1px solid ${rgba("white", 0.25)};
  color: ${(p) => rgba("white", p.active ? 0.85 : 0.25)};
  background-color: #ff6f91;
  border: unset;
`;

export const Tabs = ({ active, setActive }) => {
  return (
    <Row>
      <Underline active={active} />
      {TABS.map((tab, index) => (
        <Button
          key={index}
          active={active === index}
          onClick={() => setActive(index)}
        >
          {tab}
        </Button>
      ))}
    </Row>
  )
}