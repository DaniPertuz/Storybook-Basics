import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyLabel from '../../components/MyLabel';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    allCaps: false,
    size: 'h1'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    allCaps: true,
    size: 'h1'
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'h1',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'h1',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    fontColor: '#5517AC',
    size: 'h1'
}