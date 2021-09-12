import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  // argTypes are how we define the types of our different args and define actions
  argTypes: { handleClick: { action: "handleClick!" } }, // log this label to action, and all the event info
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
