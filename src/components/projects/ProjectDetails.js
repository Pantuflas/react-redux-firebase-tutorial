import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-1">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>Nulla nulla sit voluptate anim velit nostrud cillum aliquip pariatur occaecat. Mollit dolor sunt dolor aliqua duis dolor ad deserunt. Id est exercitation velit cupidatat commodo pariatur nostrud. Ut enim et minim enim occaecat commodo irure consectetur mollit dolore commodo elit proident.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by JASS</div>
                    <div>22nd November, 7:30pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;