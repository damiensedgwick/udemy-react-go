import React from "react"

export default class EditMovie extends React.Component {
  state = {
    movie: {},
    isLoaded: false,
    error: null,
  }

  render() {
    let {movie} = this.state

    return (
      <>
        <h2>Add / Edit Movie</h2>
        <hr/>
        <form method={`post`}>
          <div className={`mb-3`}>
            <label htmlFor={`title`} className={`form-label`} style={{fontWeight: "bold"}}>
              Title
            </label>
            <input type="text" className={`form-control`} id={`title`} name={`title`} value={movie.title}/>
          </div>
          <div className={`mb-3`}>
            <label htmlFor={`release_date`} className={`form-label`} style={{fontWeight: "bold"}}>
              Release date
            </label>
            <input type="text" className={`form-control`} id={`release_date`} name={`release_date`} value={movie.release}/>
          </div>
          <div className={`mb-3`}>
            <label htmlFor={`runtime`} className={`form-label`} style={{fontWeight: "bold"}}>
              Runtime
            </label>
            <input type="text" className={`form-control`} id={`runtime`} name={`runtime`} value={movie.runtime}/>
          </div>
          <div className={`mb-3`}>
            <label htmlFor={`mpaa_rating`} className={`form-label`} style={{fontWeight: "bold"}}>
              MPAA Rating
            </label>
            <select className={`form-select`} name={`mpaa_rating`} id={`mpaa_rating`} value={movie.mpaa_rating}>
              <option className={`form-select`}>Choose...</option>
              <option className={`form-select`} value={`G`}>G</option>
              <option className={`form-select`} value={`PG`}>PG</option>
              <option className={`form-select`} value={`PG14`}>PG14</option>
              <option className={`form-select`} value={`R`}>R</option>
              <option className={`form-select`} value={`NC17`}>NC17</option>
            </select>
          </div>
          <div className={`mb-3`}>
            <label htmlFor={`rating`} className={`form-label`} style={{fontWeight: "bold"}}>
              Rating
            </label>
            <input type="text" className={`form-control`} id={`rating`} name={`rating`} value={movie.rating}/>
          </div>
          <div className={`mb-3`}>
            <label htmlFor={`description`} className={`form-label`} style={{fontWeight: "bold"}}>
              Description
            </label>
            <textarea className={`form-control`} name={`description`} id={`description`} rows={`3`}>
              {movie.description}
            </textarea>
          </div>
          <hr/>
          <button className={`btn btn-danger`} type={`button`} style={{minWidth: "100px"}}>Cancel</button>
          <button className={`btn btn-primary mx-3`} type={`submit`} style={{minWidth: "100px"}}>Save</button>
        </form>
      </>
    );
  }
}