import React from "react"

const PostItem = (props) => {
    const {title, body} = props.ofPost
    return (
        <div className="col s12">
        <div className="card-panel teal">
          <h5>{title}</h5>
          <p>{body}</p>
        </div>
      </div>
    )
}

export default PostItem;