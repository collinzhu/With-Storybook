import SearchBar from './SearchBar';
import { Story, ComponentMeta } from '@storybook/react';
import {  screen, userEvent } from '@storybook/testing-library';

export default{
    title: "SearchBar",
    component:SearchBar,
}
const Template: Story<typeof SearchBar> = (args) => <SearchBar updateMovie={function (): void {
    throw new Error('Function not implemented.');
} } {...args} />;

export const trysss = Template.bind({});

trysss.play = async() =>{
    await userEvent.click(screen.getByRole('button'))

}