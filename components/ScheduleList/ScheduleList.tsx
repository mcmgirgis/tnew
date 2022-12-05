import React from 'react';

const RowList = ({ days, hours }: { days: string; hours: string }) => (
  <tr className="sm:text-[11px] md:text-[13px] lg:text-[15px] border-b">
    <th className="py-2 text-start font-normal">{days}</th>
    <th className="py-2 text-end font-normal">{hours}</th>
  </tr>
);

interface Row {
  days: string;
  hours: string;
}

interface ScheduleListProps {
  data: Row[];
}

const ScheduleList: React.FC<ScheduleListProps> = ({ data = [] }) => {
  return (
    <table className="text-left w-100">
      <thead>
        <tr className="sm:text-[13px] md:text-base lg:text-[1.1875rem] border-b">
          <th className="py-4">Hours</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((hour, idx) => (
          <RowList key={idx} {...hour} />
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleList;
