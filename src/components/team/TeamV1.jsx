import React from 'react';
import sectionShape from '@/public/assets/images/about/section-shape.png'
import Image from 'next/image';
import TeamV1Data from '../../../public/assets/jsonData/team/TeamV1Data.json'
import SingleTeamV1 from './SingleTeamV1';

const TeamV1 = ({ showFull = false, teamClass }) => {
    return (
        <>
            <div className={`team-area animate__slideInUp ${teamClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="section-shape">
                                    <Image src={sectionShape} alt="image" />
                                </div>
                                <div className="section-sub-title">
                                    <h4>{TeamV1Data.subTitle}</h4>
                                </div>
                                <div className="section-main-title">
                                    <h2>{TeamV1Data.title1}</h2>
                                    <h2>{TeamV1Data.title2}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {showFull ? <>
                            {TeamV1Data.teamData.map(team =>
                                <div className="col-lg-3 col-md-6" key={team.id}>
                                    <SingleTeamV1 team={team} />
                                </div>
                            )}
                        </>
                            : <>{TeamV1Data.teamData.slice(0, 4).map(team =>
                                <div className="col-lg-3 col-md-6" key={team.id}>
                                    <SingleTeamV1 team={team} />
                                </div>
                            )}</>}

                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV1;