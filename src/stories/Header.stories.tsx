import Header from "./Header";
import { Story, ComponentMeta } from '@storybook/react';

export default{
    title: "Header",
    component:Header,
}
const Template: Story<typeof Header> = (args) => <Header {...args} />;

export const GithubIcon = Template.bind({});


