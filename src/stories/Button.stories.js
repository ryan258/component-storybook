import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  // argTypes are how we define the types of our different args and define actions
  argTypes: { handleClick: { action: "handleClick" } }, // log this label to action, and all the event info
};

// template for our story
const Template = (args) => <Button {...args} />;

// what we name this export will be the name of the story
// export const Red = () => <Button label="Press Me" backgroundColor="red" />;
// we'll copy the template w/ bind()
export const Red = Template.bind({});
// now we can define our arguments for the Red story
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

//! so now we can create multiple stories for our component

export const Green = Template.bind({});

Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};

export const Small = Template.bind({});

Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
};

export const Large = Template.bind({});

Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
};

export const LongLabel = Template.bind({});

LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me Because I Haven't Been Pressed In a Long, Long Time!",
  size: "md",
};
