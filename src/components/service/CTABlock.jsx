import CTAButton from '../banner/CTAButton';
import './ServiceDetailsContent.css';

const CTABlock = () => {
  return (
    <div className="sidebar-contact-widget">
        <h5 className="text-center fw-medium">Secure Your Sydney Property Today</h5>
        <span className="telephone-span d-inline-flex align-items-center justify-content-center rounded-circle">
            <i className="bi bi-telephone text-white"></i>
        </span>
        <p className="m-0 fs-1 fw-medium">1300 513 529</p>
        <p className="m-0 fs-5"><i className="bi bi-clock"></i> 9am – 5pm, Mon–Fri</p>
        <CTAButton/>
    </div>
  )
}

export default CTABlock
