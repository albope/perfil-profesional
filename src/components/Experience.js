import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experience-container">
            <h1>Experience <span role="img" aria-label="briefcase">💼</span></h1>
            <div className="timeline">
                <div className="company-section">
                    <h2 className="company-name">ETRA</h2>
                    <div className="timeline-item">
                        <div className="timeline-icon"><span role="img" aria-label="calendar">📅</span></div>
                        <div className="timeline-content">
                            <p className="date">Dec 2021 - Present</p>
                            <h3 className="title">Software QA Engineer & Technical Business Analyst</h3>
                            <p className="location">Valencia, Valencian Community, Spain</p>
                            <p className="description">
                                QA Transport Engineer for software and hardware products for different customers in the public transport sector. My main functions include:
                                <br />• Verification and testing of software and systems. Planning and execution of User Acceptance, integration and component tests and development of test plans associated with user requirements using the JIRA tool.
                                <br />• Managing incidents and defects found in the testing and in production environments.
                                <br />• Technical and project meetings with clients such as FGV (Ferrocarils de la Generalitat Valenciana), MLO (Metro Ligero Oeste), Enyse, EMT, NTT etc.
                                <br />• Generating maintenance and update plans for systems in production.
                                <br />• Support - remote and on-site nationwide - both for deployments and maintenance of Operating Assistance Systems (SAE – Sistema de ayuda a la explotación) developed in the transport area.
                                <br />• Managing, preparing and Transferring products to group companies.
                                <br />• Training users for both applications and management of installed systems.
                                <br />• Documentation of different products and systems (application user manuals, software technical documentation, software installation/configuration manuals, application integration manuals), user requirements documents, etc.
                            </p>
                            <p><strong>Tools & Technology used:</strong></p>
                            <div className="skills">
                                <span className="skill-badge">JIRA</span>
                                <span className="skill-badge">Mantis</span>
                                <span className="skill-badge">MRemote</span>
                                <span className="skill-badge">VNC</span>
                                <span className="skill-badge">Putty</span>
                                <span className="skill-badge">FTP</span>
                                <span className="skill-badge">SFTP</span>
                                <span className="skill-badge">TCP/IP</span>
                                <span className="skill-badge">UDP</span>
                                <span className="skill-badge">VOIP (Asterisk PBX)</span>
                                <span className="skill-badge">Postman</span>
                                <span className="skill-badge">SOAP UI</span>
                                <span className="skill-badge">SQL Server</span>
                                <span className="skill-badge">Oracle</span>
                                <span className="skill-badge">Mongo DB</span>
                                <span className="skill-badge">Jenkins</span>
                                <span className="skill-badge">SVN Tortoise</span>
                                <span className="skill-badge">Windows OS</span>
                                <span className="skill-badge">Bash Scripts</span>
                                <span className="skill-badge">XML</span>
                                <span className="skill-badge">JSON</span>
                                <span className="skill-badge">.Config files</span>
                                <span className="skill-badge">txt</span>
                                <span className="skill-badge">Notepad++</span>
                                <span className="skill-badge">Windows Event Viewer</span>
                                <span className="skill-badge">.dmp files</span>
                            </div>
                            <a className="company-link" href="https://www.grupoetra.com" target="_blank" rel="noopener noreferrer">Company site →</a>
                        </div>
                    </div>
                </div>
                <div className="company-section">
                    <h2 className="company-name">Sopra Banking Software</h2>
                    <div className="timeline-item">
                        <div className="timeline-icon"><span role="img" aria-label="calendar">📅</span></div>
                        <div className="timeline-content">
                            <p className="date">May 2021 - Dec 2021</p>
                            <h3 className="title">QA Team Leader</h3>
                            <p className="location">Valencia, Valencian Community, Spain</p>
                            <p className="description">
                                Business Analyst and Application Manager within the framework of Sopra Banking Amplitude payment methods development projects. Responsibilities and procedures:
                                <br />• BA on means of payment projects (Checks / Transfers / Debit Payments / Bills / SWIFT / RTGS / Clearing Systems)
                                <br />• Test strategy, development and implementation of test plans
                                <br />• QA Team Leader of the Means of payment team (monitoring, planning and functional support)
                            </p>
                            <a className="company-link" href="https://www.soprabanking.com" target="_blank" rel="noopener noreferrer">Company site →</a>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><span role="img" aria-label="calendar">📅</span></div>
                        <div className="timeline-content">
                            <p className="date">Jul 2020 - Dec 2021</p>
                            <h3 className="title">QA Automation Engineer</h3>
                            <p className="location">Valencia, Valencian Community, Spain</p>
                            <p className="description">
                                Development & maintenance of automated scenarios in order to reduce the amount of manual regression tests to execute per version with T-Tool Software (Internal Company tool).
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><span role="img" aria-label="calendar">📅</span></div>
                        <div className="timeline-content">
                            <p className="date">Apr 2018 - May 2021</p>
                            <h3 className="title">QA IT Business Analyst</h3>
                            <p className="location">Valencia Area, Spain</p>
                            <p className="description">
                                Sopra Steria, is a European leader in digital transformation, providing one of the most comprehensive portfolios of end-to-end service offerings on the market. Responsibilities and procedures:
                                <br />• Revision of prerequisites, specifications and technical design documents
                                <br />• Development and implementation of test plans with HPQC testsuite.
                                <br />• Follow-up of defects opened during the test validation.
                                <br />• Participate on different meetings during the validation cycle: integration meetings, functional review meetings & preproduction meetings.
                                <br />• Ensure execution and analysis of tests and give final approval for load to Production.
                                <br />• Maintain, improve and plan the evolution of test scripts and scenarios.
                                <br />• Define the test coverage for automation
                            </p>
                            <p><strong>Tools & Technologies Used:</strong></p>
                            <div className="skills">
                                <span className="skill-badge">HPQC</span>
                                <span className="skill-badge">SOAP UI</span>
                                <span className="skill-badge">JIRA</span>
                                <span className="skill-badge">Filezilla</span>
                                <span className="skill-badge">Confluence</span>
                                <span className="skill-badge">Db Visualizer</span>
                                <span className="skill-badge">Oracle DB´s</span>
                                <span className="skill-badge">T-tool (Automation tool)</span>
                                <span className="skill-badge">Bizagi (UML Modelling)</span>
                                <span className="skill-badge">Unix</span>
                                <span className="skill-badge">Notepad ++</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;