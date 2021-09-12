import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  // vvv we're passing an additional argument for Storybook that we don't really need for the component in regular usage
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

// vvv then we're using that number of children here for storybook purposes
// then passing all the additional args via ...args , pulling out the one it didn't need (numberOfChildren)
const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        key={n}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  numberOfChildren: 42,
  direction: "row",
  spacing: 2,
  wrap: true,
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfChildren: 0,
  direction: "row",
  spacing: 2,
  wrap: false,
};
