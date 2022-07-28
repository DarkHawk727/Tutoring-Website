import React from 'react'
import {resources} from './resource_data';

const Resources = () => {
  return (
<div className='m-3'>
    <div className="content">
        <h1 className="title">Resources</h1>
        <p>We have curated the following online resources for use by both our students and anyone who visits this site. We have videos, assignments, and other miscellaneous resources for a plethora of subjects.</p>
        </div>
        <br />
        {resources.map((resource) => {
           return ( <div>
                <h3 className="title">{resource.subject}</h3>
                <div class="columns">
                    <div class="column">
                        <h5 className="title is-5">Videos</h5>
                        <ul>
                            {resource.videos.map((video) => {
                                return (
                                    <li>
                                        <a href={video.link}>{video.title}</a>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div class="column">
                        <h5 className="title is-5">Assignments</h5>
                        <ul>
                        {resource.assignments.map((assignment) => {
                                return (
                                    <li>
                                        <a href={assignment.link}>{assignment.title}</a>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div class="column">
                        <h5 className="title is-5">Miscellaneous</h5>
                        <ul>
                        {resource.other.map((misc) => {
                                return (
                                    <li>
                                        <a href={misc.link}>{misc.title}</a>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                </div> 
            </div>
)
        })}
    </div>
  )
}

export default Resources
// The links for assignments and other resources are just links to a google drive or smth.
// The links to videos should just be playlists