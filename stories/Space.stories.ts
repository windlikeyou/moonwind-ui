import type { Meta, StoryObj } from '@storybook/vue3';
import { MSpace, MButton } from 'moonwind-ui';
import { h } from 'vue';

const meta: Meta<typeof MSpace> = {
  title: 'Layout/Space',
  component: MSpace,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'The size of the space',
    },
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The direction of the space',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'baseline'],
      description: 'Alignment of items',
    },
    wrap: {
      control: 'boolean',
      description: 'Auto wrap',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MSpace>;

export const Basic: Story = {
  render: (args) => ({
    components: { MSpace, MButton },
    setup() {
      return { args };
    },
    template: `
      <MSpace v-bind="args">
        <MButton>Button 1</MButton>
        <MButton>Button 2</MButton>
        <MButton>Button 3</MButton>
      </MSpace>
    `,
  }),
  args: {
    size: 'small',
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  render: (args) => ({
    components: { MSpace, MButton },
    setup() {
      return { args };
    },
    template: `
      <MSpace v-bind="args">
        <MButton>Button 1</MButton>
        <MButton>Button 2</MButton>
        <MButton>Button 3</MButton>
      </MSpace>
    `,
  }),
  args: {
    direction: 'vertical',
  },
};

export const Size: Story = {
  render: (args) => ({
    components: { MSpace, MButton },
    template: `
      <div>
        <MSpace size="small">
          <MButton>Small</MButton>
          <MButton>Small</MButton>
        </MSpace>
        <br/><br/>
        <MSpace size="middle">
          <MButton>Middle</MButton>
          <MButton>Middle</MButton>
        </MSpace>
        <br/><br/>
        <MSpace size="large">
          <MButton>Large</MButton>
          <MButton>Large</MButton>
        </MSpace>
        <br/><br/>
        <MSpace :size="20">
          <MButton>Custom (20px)</MButton>
          <MButton>Custom (20px)</MButton>
        </MSpace>
      </div>
    `,
  }),
};

export const Align: Story = {
  render: (args) => ({
    components: { MSpace, MButton },
    template: `
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div style="border: 1px solid #ccc; padding: 10px;">
          <p>Start</p>
          <MSpace align="start">
            <MButton>Text</MButton>
            <div style="height: 60px; background: #eee; padding: 5px;">Block</div>
          </MSpace>
        </div>
        <div style="border: 1px solid #ccc; padding: 10px;">
          <p>Center</p>
          <MSpace align="center">
            <MButton>Text</MButton>
            <div style="height: 60px; background: #eee; padding: 5px;">Block</div>
          </MSpace>
        </div>
        <div style="border: 1px solid #ccc; padding: 10px;">
          <p>End</p>
          <MSpace align="end">
            <MButton>Text</MButton>
            <div style="height: 60px; background: #eee; padding: 5px;">Block</div>
          </MSpace>
        </div>
         <div style="border: 1px solid #ccc; padding: 10px;">
          <p>Baseline</p>
          <MSpace align="baseline">
            <MButton>Text</MButton>
            <div style="height: 60px; background: #eee; padding: 5px;">Block</div>
          </MSpace>
        </div>
      </div>
    `,
  }),
};

export const Wrap: Story = {
  render: (args) => ({
    components: { MSpace, MButton },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 300px; border: 1px solid #ccc; padding: 10px;">
        <MSpace v-bind="args" wrap>
           <MButton v-for="i in 10" :key="i">Btn {{ i }}</MButton>
        </MSpace>
      </div>
    `,
  }),
  args: {
    wrap: true,
  },
};

export const Split: Story = {
  render: (args) => ({
    components: { MSpace, MButton },
    setup() {
        const split = h('span', { style: { color: '#ccc' } }, '|');
        return { args, split };
    },
    template: `
      <MSpace :split="split">
        <MButton type="text">Link 1</MButton>
        <MButton type="text">Link 2</MButton>
        <MButton type="text">Link 3</MButton>
      </MSpace>
    `,
  }),
};
