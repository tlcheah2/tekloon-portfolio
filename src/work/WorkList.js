import React from 'react';
import WorkItem from './WorkItem';
import './WorkList.css';
import minimalismBlogPhoto from '../images/minimalism-blog.png';
import fourCardFeature from '../images/four-card-feature.png';
import bbqRegistration from '../images/bbq-registration.png';
import responsiveCard from '../images/responsive-card.png';
import baseApparel from '../images/base-apparel-coming-soon.jpg';
import huddle from '../images/huddle-landing-page.jpg';
import resume from '../images/resume.png';

const workItems = [
    {
        title: 'Minimalism Blog',
        coverPhoto: minimalismBlogPhoto,
        path: '/works/minimalism-blog',
    }, 
    {
        title: 'Four Card Feature',
        coverPhoto: fourCardFeature,
        path: '/works/four-card-feature',
    },
    {
        title: 'BBQ Registration',
        coverPhoto: bbqRegistration,
        path: '/works/bbq-registration',
    },
    {
        title: 'Responsive Card',
        coverPhoto: responsiveCard,
        path: '/works/responsive-card',
    },
    {
        title: 'Base Apparel',
        coverPhoto: baseApparel,
        path: '/works/base-apparel',
    },
    {
        title: 'Huddle Landing Page',
        coverPhoto: huddle,
        path: '/works/huddle',
    },
    {
        title: 'Resume Design Inspired by Thomas Nguyen',
        coverPhoto: resume,
        path: '/works/resume',
    }
]


class WorkList extends React.Component {
    render() {
       return (
            <div className="work-container">
                {
                    workItems.map((workItem) => 
                        <WorkItem 
                            visitBtnPath={workItem.path}
                            title={workItem.title} 
                            coverPhoto={workItem.coverPhoto}  
                        />)
                }
            </div>
        )
    }
}

export default WorkList