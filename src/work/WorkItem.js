import React from 'react';
import { Link } from 'react-router-dom';
import './WorkItem.css';

class WorkItem extends React.Component {
    render() {
        const { title, coverPhoto, visitBtnPath } = this.props;
        return (
            <div className="work-item">
                <img className="work-cover-photo" src={coverPhoto} alt="preview of website" />
                <div className="work-content">
                    <h2 className="title">{title}</h2>
                    <Link to={visitBtnPath} className="work-btn-visit-website">Visit Website</Link>
                </div>
            </div>
        )
    }
}
 
export default WorkItem