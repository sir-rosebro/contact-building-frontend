
import Image from 'next/image';
import React from 'react';
import ContactFormV1 from '../form/ContactFormV1';
import SocialShare from '../utilities/SocialShare';
import SingleProgress from '../about/SingleProgress';
import TeamV1ProgressData from '../../../public/assets/jsonData/team/TeamV1ProgressData.json'

const TeamDetailsContent = ({ teamInfo }) => {
    const { name, designation, thumb } = teamInfo

    return (
        <>
            <div className="team-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8">
                            <div className="ba-team-details-author-skill-area pb-20 pb-xl-0">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="team-details-author-img">
                                            <Image src={`/assets/images/team/${[thumb]}`} width={415} height={555} alt="image" />
                                        </div>
                                    </div>
                                    <div className=" col-lg-6 col-md-6">
                                        <div className="team-details-author-content">
                                            <div className="team-details-author-name">
                                                <h5>{[name]}</h5>
                                                <span>{[designation]}</span>
                                            </div>
                                            <div className="team-details-author-experience">
                                                <ul>
                                                    <li>
                                                        <span className="label">Position:</span>
                                                        <span className="value">{[designation]}</span>
                                                    </li>
                                                    <li>
                                                        <span className="label">Practice Area:</span>
                                                        <span className="value">Realestate Agen</span>
                                                    </li>
                                                    <li>
                                                        <span className="label">Experience:</span>
                                                        <span className="value">12 Years</span>
                                                    </li>
                                                    <li>
                                                        <span className="label">Address:</span>
                                                        <span className="value">Millington, Ave, TN 38053</span>
                                                    </li>
                                                    <li>
                                                        <span className="label">Phone:</span>
                                                        <span className="value"><a href="tel:012-345-6789" className='tel'>+00 568 746 987</a></span>
                                                    </li>
                                                    <li>
                                                        <span className="label">Email:</span>
                                                        <a href="mailto:youremail@gmail.com" className="value">youremail@gmail.com</a>
                                                    </li>
                                                    <li>
                                                        <span className="label">Website:</span>
                                                        <a href="https://google.com" target='_blank' className="value">yourwebsitehere.com</a>
                                                    </li>
                                                    <li>
                                                        <span className="label">Fax: </span>
                                                        <a href="tel:012-345-6789" className="value">568 746 987</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="team-card-box-social">
                                                <SocialShare />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="process-ber-plugin">
                                <div className="progress-items">
                                    {TeamV1ProgressData.map(progress =>
                                        <SingleProgress progress={progress} key={progress.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="team-details-content">
                                <div className="team-details-title">
                                    <h4>Personal Experience</h4>
                                </div>
                                <div className="team-details-discription">
                                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere , omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.
                                    </p>
                                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-box inner team">
                                <div className="contact-title inner team">
                                    <h4>Leave A Comment</h4>
                                </div>
                                <ContactFormV1 />
                                <div id="status"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetailsContent;