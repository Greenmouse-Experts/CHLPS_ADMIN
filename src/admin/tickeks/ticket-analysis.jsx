import { FaEnvelopeOpenText } from "react-icons/fa"
import { RxEnvelopeClosed } from "react-icons/rx";


const TicketAnalysis = ({items}) => {
  const open = items?.filter((where) => where.status === 'Open').length
  const closed = items?.filter((where) => where.status === 'Closed').length
  return (
    <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-green-50 text-green-800 py-3 rounded shadow">
            <FaEnvelopeOpenText className="text-2xl mx-auto"/>
            <p className="text-center mt-3 fw-600">{open} Open Tickets</p>
        </div>
        <div className="bg-orange-50 text-orange-800 py-3 rounded shadow">
            <RxEnvelopeClosed className="text-2xl mx-auto"/>
            <p className="text-center mt-3 fw-600">{closed} Closed Tickets</p>
        </div>
    </div>
  )
}

export default TicketAnalysis