import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: ${props=>props.weight};
`;

const SplitScreen = ({ left: Left, right: Right ,leftFlexValue=1,rightFlexValue=1}) => {
  return (
    <Container>
      <Pane weight={leftFlexValue}>
        <Left />
      </Pane>
      <Pane weight={rightFlexValue}>
        <Right />
      </Pane>
    </Container>
  );
};

export default SplitScreen;
