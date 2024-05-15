import React from 'react'
import TicketAnalysis from './ticket-analysis';
import useGetHook from '../../hook/useGet';
import TicketList from './ticket-list';

const SupportTicketIndex = () => {
  const { data, isLoading, refetch } = useGetHook("admin/support-tickets");
  return (
    <div className='p-2 lg:p-6 bg-white'>
      <div className="mt-4 lg:mt-8">
          <TicketAnalysis items={data?.data} />
        </div>
        <div>
          <TicketList items={data?.data} refetch={refetch}/>
        </div>
    </div>
  )
}

export default SupportTicketIndex