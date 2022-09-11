import MediaCard from './MediaCard';
import { Story, ComponentMeta } from '@storybook/react';
import {  screen, userEvent } from '@storybook/testing-library';

export default{
    title: "MediaCard",
    component:MediaCard,
    argTypes:{
        updateMovie:{action: "lalal"}

    }
}
const Template: Story<typeof MediaCard> = (args) => <MediaCard Id={undefined} Poster={undefined} Title={undefined} Year={undefined} Genre={undefined} Description={undefined} updateMovie={function (): void {
    throw new Error('Function not implemented.');
} } {...args} />;

export const movie1 = Template.bind({});
movie1.args = {
    Poster:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title:"Forest Gump",
    Description:"blah blah blah"
}

export const movie2 = Template.bind({});
movie2.args = {
    Poster:"https://m.media-amazon.com/images/M/MV5BMTQzMTcwMzgyMV5BMl5BanBnXkFtZTgwMzAyMzQ2MzE@._V1_SX300.jpg",
    Title:"The Interview",
    Description:"blah blah blah"
}
export const trysss = Template.bind({});
trysss.play = async() =>{
    await userEvent.click(screen.getByRole('button'))

}