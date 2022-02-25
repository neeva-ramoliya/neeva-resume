import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import '../styles/timeline.styl';

const WorkIcon = () => {
  return (
    <FontAwesomeIcon icon={faBriefcase} />
  )
}

const SchoolIcon = () => {
  return (
    <FontAwesomeIcon icon={faUserGraduate} />
  )
}


const TimelineElement = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  console.log(isExpand)
  return (
    <React.Fragment>
      <div className="title text-mosk">{`${props.title} - ${props.subtitle}`}</div>
      {/* <div className="subtitle text-jenthill">{props.subtitle}</div> */}
      <div className="subtitle text-mosk">{props.duration}</div>
      <div className='desc-tagline text-mosk'>{props.tagline}</div>
      {
        props.desc && props.desc.length ? (
          <React.Fragment>
          {
            !isExpand ? (
              <div className='desc-list text-mosk'> <div className='list-item'>{props.desc[0]}</div></div>
            ) : (
              <div className='desc-list text-mosk'>
                {props.desc.map((item) => {
                    return (<div className='list-item'>{item}</div>)
                })}
              </div>
            )
          }
          { props.desc.length > 1 ? <div className='expand-btn text-jenthill' onClick={() => setIsExpand(!isExpand)}>{isExpand ? `Read less` : `Read more`}</div> :''}
        </React.Fragment>
        ) : ''
      }
      
    </React.Fragment>
  )
}

const WorkEduTimeline = () => {
  return (
    <div className='section'>
      <div className='section-title work-edu-title theme-color-text'>
        <span className='text-mosk'>Where I’ve <span className='text-jenthill'>Worked</span> and <span className='text-jenthill'>Studied</span></span>
      </div>
    
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#d2a2d1', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #d2a2d1' }}

        iconStyle={{ background: '#d2a2d1', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <TimelineElement 
            title={'Staff Software Developer'}
            subtitle={'HackerEarth'}
            duration={'Mar 2019 - present'}
            tagline={'Python-Django, Rest APIs, React-Redux, AWS, Docker, SQL, NextJs, Agile,' }
            desc={[
              'Design and establish user-friendly features, including optimized APIs, resulting in a 60-70% reduction on page speed.',
              'Planning, Designing, Architectuing entire end-to-end pipeline of a feature, propose and implemente scalable solutions to issues identified.',
              'Design and Integrate key FrameWorks and Library like Monaco Editor and holds sole ownership of multiple key features.',
              'Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on a daily basis',
              'Administer the full lifecycle of software development for 6M+ hackerearth community with 100% on-time delivery.',
            ]}
        />
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#a2b9d2', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #a2b9d2' }}

        iconStyle={{ background: '#a2b9d2', color: '#fff' }}
        icon={<WorkIcon />}
      >
       <TimelineElement 
            title={'AI/ML Mentor'}
            subtitle={'GreatLearning'}
            duration={'Dec 2021 - present'}
            tagline={'Python, Data structure, Algorithms, Machine Learning, Artificial Intelligence'}
            desc={[
              'Mentoring a Batch of 20 on computer science and machine learning concepts and help them to excel in coding skills.',
              'Provide support and guidance to student and young people who are experiencing difficulties in learning.',
              'Guide a team of 4-5 students on capstone project and help them in research'
            ]}
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#d2a2d1', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #d2a2d1' }}

        iconStyle={{ background: '#d2a2d1', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <TimelineElement 
            title={'Artificial Intelligence & Machine Learning'}
            subtitle={'Great Lakes Executive Learning'}
            duration={'2020 - 2021'}
            tagline={'Python, Pandas, Analysis, SkLearn, Neural Network, Computer Vision, NLP'}
            desc={[
              'Capstone project: Ergonomic in Sports through Human Pose Estimation using Computer Vision.',
              'Human pose estimation algorithms leverage advances in computer vision to track human movement automatically from simple videos recorded using common household devices with relatively low-cost cameras.',
              'Analyzing research papers, building optimized model, developing user interface to integrate human pose estimation model.'
            ]}
            
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#a2b9d2', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #a2b9d2' }}

        iconStyle={{ background: '#a2b9d2', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <TimelineElement 
            title={'Senior Software Developer'}
            subtitle={'Paragyte Technologies'}
            duration={'Nov 2017 - Mar 2019'}
            tagline={'ReactJs, Redux, NodeJs, ExpressJs, Loopback, Microservices, Docker, Deployment, Team Leadning'}
            desc={[
              'Developed and shipped highly interactive web applications for a product named BitPod',
              'Architected and implemented microservices, Developed UI in react-redux and backend services on ExpressJs and Loopback.',
              'Hnalde deployment lifecycles with google cloud, docker and bitbucket pipeline',
              'Interfaced with clients on a weekly basis, providing technological expertise and knowledge',
              'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences'
            ]}
        />
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#d2a2d1', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #d2a2d1' }}

        iconStyle={{ background: '#d2a2d1', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <TimelineElement 
            title={'Software Developer'}
            subtitle={'Zeus Learning'}
            duration={'Jul 2015 - Nov 2017'}
            tagline={'ReactJs, BackboneJs, MySQL, NodeJs, TypeScript, Creative Direction, User Experience'}
            desc={[
              'Write modern, performant, and robust code for a diverse array of client and internal projects',
              'Engineered and maintained major features of LMS (Learning Management System), Discovery Education, E-Learning softwares.',
              'Proposed and implemented scalable solutions to issues identified with application, user interface and designing.'
            ]}
        />
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#a2b9d2', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #a2b9d2' }}

        iconStyle={{ background: '#a2b9d2', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <TimelineElement 
            title={'Computer Science & Engineering'}
            subtitle={'M.S. University'}
            duration={'2011 - 2015'}
            tagline={'Bachelor of Engineering in Computer Science and Engineering is four years (8 Semester) full-time undergraduate engineering program offered by Maharaja Sayajirao University of Baroda, Vadodara.'}
            
        />
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  )
}

export default WorkEduTimeline;