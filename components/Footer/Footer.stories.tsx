import FooterRow from '@/components/FooterRow/FooterRow';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ColumnList from '@/components/ColumnList/ColumnList';
import Footer from '@/components/Footer/Footer';
import { Copyright } from '@/components/Footer/FooterWrapper';
import Heading from '@/components/Heading/Heading';
import Newsletter from '@/components/Newsletter/NewsletterWrapper';
import ScheduleList from '@/components/ScheduleList/ScheduleList';
import Tag from '@/components/Tag/Tag';

export default {
  label: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div className="w-full bg-black">
        <div className="container mx-auto sm:px-4 md:px-12 lg:px-0">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    firstRowColumnsData: {
      control: 'object',
      defaultValue: [
        {
          label: 'About',
          list: [
            { label: 'About the Museum', url: '/' },
            { label: 'Press', url: '/' },
            { label: 'Venue Rentals', url: '/' },
          ],
        },
        {
          label: 'Resources',
          list: [
            { label: 'Educational Resources', url: '/' },
            { label: 'Articles & Publications', url: '/' },
            { label: 'Conservation', url: '/' },
            { label: 'Ingalls Library', url: '/' },
          ],
        },
        {
          label: 'Get Involved',
          list: [
            { label: 'Employment', url: '/' },
            { label: 'Internships', url: '/' },
            { label: 'Volunteer', url: '/' },
          ],
        },
        {
          label: 'Support',
          list: [
            { label: 'Donate Now', url: '/' },
            { label: 'Ways to Give', url: '/' },
            { label: 'Membership', url: '/' },
          ],
        },
      ],
    },
    secondRowColumnsData: {
      control: 'object',
      defaultValue: [
        {
          label: 'Main Museum',
          address:
            '11150 East Boulevard, Cleveland, OH 44106 <br/> 216-421-7350 &nbsp; &nbsp; 888-CMA-0033',
          dates: [
            {
              days: 'Tuesday, Thursday, Saturday, Sunday',
              hours: '10:00 a.m. – 5:00 p.m.',
            },
            {
              days: 'Wednesday, Friday',
              hours: '10:00 a.m. – 9:00 p.m.',
            },
            {
              days: 'Monday',
              hours: 'Closed',
            },
          ],
        },
        {
          label: 'Community Arts Center',
          address:
            '2937 West 25th Street, Cleveland, OH 44113 <br/> 216-707-2483',
          dates: [
            {
              days: 'Friday',
              hours: '2:00 p.m. – 7:00 p.m.',
            },
            {
              days: 'Saturday, Sunday',
              hours: '10:00 a.m. – 5:00 p.m.',
            },
            {
              days: 'Monday through Thursday',
              hours: 'Closed',
            },
          ],
        },
        {
          label: 'Transformer Station',
          address:
            '1460 West 29th Street, Cleveland, OH 44113 <br/> 216-938-5429',
          dates: [
            {
              days: 'Wednesday through Sunday',
              hours: '11:00 a.m. – 5:00 p.m.',
            },
            {
              days: 'Monday, Tuesday',
              hours: 'Closed',
            },
          ],
        },
      ],
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
  const { firstRowColumnsData, secondRowColumnsData } = args as any;
  return (
    <Footer {...args}>
      <FooterRow>
        <Heading
          className="col-span-2"
          label={firstRowColumnsData[0]?.label || ''}
        >
          <ColumnList list={firstRowColumnsData[0]?.list || []} />
        </Heading>
        <Heading
          className="col-span-2"
          label={firstRowColumnsData[1]?.label || ''}
        >
          <ColumnList list={firstRowColumnsData[1]?.list || []} />
        </Heading>
        <Heading
          className="col-span-2"
          label={firstRowColumnsData[2]?.label || ''}
        >
          <ColumnList list={firstRowColumnsData[2]?.list || []} />
        </Heading>
        <Heading
          className="col-span-2"
          label={firstRowColumnsData[3]?.label || ''}
        >
          <ColumnList list={firstRowColumnsData[3]?.list || []} />
        </Heading>
        <Newsletter className="col-span-full md:col-start-9 md:col-end-13" />
      </FooterRow>
      <FooterRow>
        <div className="sm:col-span-full md:col-span-4 lg:col-start-1 lg:col-end-5">
          <Tag
            className="md:-mt-14 mb-5"
            label="General Admission Is Always Free"
          />
          <Heading label={secondRowColumnsData[0]?.label || ''}>
            <div
              className="sm:text-xs md:text-base lg:text-[19px] md:!leading-[180%] sm:!leading-[160%]"
              dangerouslySetInnerHTML={{
                __html: secondRowColumnsData[0]?.address || '',
              }}
            />
            <ScheduleList data={secondRowColumnsData[0]?.dates || ''} />
          </Heading>
        </div>

        <Heading
          className="sm:col-span-full md:col-span-4 lg:col-start-6 lg:col-end-9"
          label={secondRowColumnsData[1]?.label || ''}
        >
          <div
            className="sm:text-xs md:text-base lg:text-[19px] md:!leading-[180%] sm:!leading-[160%]"
            dangerouslySetInnerHTML={{
              __html: secondRowColumnsData[1]?.address || '',
            }}
          />

          <ScheduleList data={secondRowColumnsData[1]?.dates || ''} />
        </Heading>

        <Heading
          className="sm:col-span-full md:col-span-4 lg:col-start-10 lg:col-end-13"
          label={secondRowColumnsData[2]?.label || ''}
        >
          <div
            className="sm:text-xs md:text-base lg:text-[19px] md:!leading-[180%] sm:!leading-[160%]"
            dangerouslySetInnerHTML={{
              __html: secondRowColumnsData[2]?.address || '',
            }}
          />
          <ScheduleList data={secondRowColumnsData[2]?.dates || ''} />
        </Heading>
      </FooterRow>
      <Copyright />
    </Footer>
  );
};

export const Default = Template.bind({});
