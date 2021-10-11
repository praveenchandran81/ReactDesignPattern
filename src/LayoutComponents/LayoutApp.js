import SplitScreen from "./SplitScreen";

const LeftComponent = () => {
  return <div style={{ backgroundColor: "red" }}>Left</div>;
};

const RightComponent = () => {
  return <div style={{ backgroundColor: "green" }}>Right</div>;
};

export const LayoutApp = () => {
  return (
    <div>
      <SplitScreen leftFlexValue={2} rightFlexValue={1}>
        <LeftComponent />
        <RightComponent />
      </SplitScreen>
    </div>
  );
};
