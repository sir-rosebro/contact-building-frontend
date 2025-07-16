import Image from 'next/image';

const CostEstimationWidgetPrompt = () => {
  return (
    <div className="container my-5">
        <div
            className="row align-items-center p-4 rounded-4 shadow"
            style={{ backgroundColor: '#fff3e6', borderLeft: '6px solid #f60' }}
        >
            <div className="col-12 col-md-2 text-center mb-3 mb-md-0">
                <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                    backgroundColor: '#f60',
                    width: '70px',
                    height: '70px',
                }}
                >
                <Image 
                    src="https://funny-virtue-0648592741.media.strapiapp.com/chat_avatar_dccef47aa8.png" 
                    alt="Fixie Assistant" 
                    className="avatar"
                    height={100}
                    width={100} 
                />
                </div>
            </div>
            <div className="col-12 col-md-7 text-center text-md-start mb-3 mb-md-0">
                <h5 className="fw-bold mb-1" style={{ color: '#d35400' }}>
                Want a free estimate for waterproofing?
                </h5>
                <p className="mb-0 text-muted">
                Connect with certified professionals and secure your property from water damage.
                </p>
            </div>
            <div className="col-12 col-md-3 text-center text-md-end">
                <button
                className="btn px-4 py-2 fw-semibold text-white"
                style={{ backgroundColor: '#f60', border: 'none' }}
                >
                Get an Estimate
                </button>
            </div>
        </div>
  </div>
  )
}

export default CostEstimationWidgetPrompt
