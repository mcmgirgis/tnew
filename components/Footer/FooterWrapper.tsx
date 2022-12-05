import ColumnList from '@/components/ColumnList/ColumnList';
import Footer from '@/components/Footer/Footer';
import FooterRow from '@/components/FooterRow/FooterRow';
import Heading from '@/components/Heading/Heading';
import Newsletter from '@/components/Newsletter/NewsletterWrapper';
import ScheduleList from '@/components/ScheduleList/ScheduleList';
import Tag from '@/components/Tag/Tag';
import Link from 'next/link';

export const Copyright = () => (
  <div className="sm:block md:flex md:justify-between sm:text-[13px] md:text-[15px]">
    <div className="sm:pb-2">© 2022 Cleveland Museum of Art</div>
    <div className="sm:flex md:block sm:flex-col">
      <Link legacyBehavior href="/">
        <a className="sm:pb-2 md:pb-0 border-blue-04 hover:border-b-2 hover:mb-1.5 hover:lg:mb-2.5">
          Credits
        </a>
      </Link>
      <Link legacyBehavior href="/">
        <a className="sm:pb-2 md:ml-6 md:pb-0 border-blue-04 hover:border-b-2 hover:mb-1.5 hover:lg:mb-2.5">
          Terms and Conditions
        </a>
      </Link>
      <Link legacyBehavior href="/">
        <a className="md:ml-6 border-blue-04 hover:border-b-2 hover:mb-1.5 hover:lg:mb-2.5">
          Privacy Policy
        </a>
      </Link>
    </div>
  </div>
);

const FooterWrapper = () => {
  return (
    <Footer>
      <FooterRow>
        <Heading className="col-span-2" label="About">
          <ColumnList
            list={[
              { label: 'About the Museum', url: '/' },
              { label: 'Press', url: '/' },
              { label: 'Venue Rentals', url: '/' },
            ]}
          />
        </Heading>
        <Heading className="col-span-2" label="Resources">
          <ColumnList
            list={[
              { label: 'Educational Resources', url: '/' },
              { label: 'Articles & Publications', url: '/' },
              { label: 'Conservation', url: '/' },
              { label: 'Ingalls Library', url: '/' },
            ]}
          />
        </Heading>
        <Heading className="col-span-2" label="Get Involved">
          <ColumnList
            list={[
              { label: 'Employment', url: '/' },
              { label: 'Internships', url: '/' },
              { label: 'Volunteer', url: '/' },
            ]}
          />
        </Heading>
        <Heading className="col-span-2" label="Support">
          <ColumnList
            list={[
              { label: 'Donate Now', url: '/' },
              { label: 'Ways to Give', url: '/' },
              { label: 'Membership', url: '/' },
            ]}
          />
        </Heading>
        <Newsletter className="col-span-full md:col-start-9 md:col-end-13" />
      </FooterRow>
      <FooterRow>
        <div className="sm:col-span-full md:col-span-4 lg:col-start-1 lg:col-end-5">
          <Tag
            className="md:-mt-14 mb-5"
            label="General Admission Is Always Free"
          />
          <Heading
            className="sm:col-span-full md:col-span-4 lg:col-start-1 lg:col-end-5"
            label="Main Museum"
          >
            <div className="text-xs md:text-base lg:text-[19px] md:!leading-[180%] sm:!leading-[160%]">
              11150 East Boulevard, Cleveland, Oh 44106
            </div>
            <div className="text-xs md:text-base lg:text-[19px] md:!leading-[180%] sm:!leading-[160%]">
              216-421-7350 888-CMA-0033
            </div>
            <ScheduleList
              data={[
                {
                  days: 'Tuesday, Thrusday, Saturday, Sunday',
                  hours: '10:00 a.m. - 5:00 p.m.',
                },
                {
                  days: 'Wednesday, Friday',
                  hours: '10:00 a.m. - 9:00 p.m.',
                },
                {
                  days: 'Monday',
                  hours: 'Closed',
                },
              ]}
            />
          </Heading>
        </div>

        <Heading
          className="sm:col-span-full md:col-span-4 lg:col-start-6 lg:col-end-9"
          label="Community Arts Center"
        >
          <div className="text-xs md:text-base lg:text-[19px] md:!leading-[180%] sm:!leading-[160%]">
            2937 West 25th Street, Cleveland, OH 44113
          </div>
          <div className="text-xs md:text-base lg:text-[19px] md:!leading-[180%] sm:!leading-[160%]">
            216-707-2483
          </div>
          <ScheduleList
            data={[
              {
                days: 'Friday',
                hours: '2:00 p.m. - 7:00 p.m.',
              },
              {
                days: 'Saturday, Sunday',
                hours: '10:00 a.m. - 5:00 p.m.',
              },
              {
                days: 'Monday through Thursday',
                hours: 'Closed',
              },
            ]}
          />
        </Heading>
        <Heading
          className="sm:col-span-full md:col-span-4 lg:col-start-10 lg:col-end-13"
          label="Transformer Station"
        >
          <div className="text-xs md:text-base lg:text-[19px] md:!leading-[180%] sm:!leading-[160%]">
            1460 West 29th Street, Cleveland, OH 44113
          </div>
          <div className="text-xs md:text-base lg:text-[19px] md:!leading-[180%] sm:!leading-[160%]">
            216-938-5429
          </div>
          <ScheduleList
            data={[
              {
                days: 'Wednesday through Sunday',
                hours: '11:00 a.m. - 5:00 p.m.',
              },
              {
                days: 'Monday, Tuesday',
                hours: 'Closed',
              },
            ]}
          />
        </Heading>
      </FooterRow>
      <Copyright />
    </Footer>
  );
};

export default FooterWrapper;
