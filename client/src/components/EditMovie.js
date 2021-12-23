import React from "react"
import {Input} from "./form-components/Input";
import {Textarea} from "./form-components/Textarea";
import {Select} from "./form-components/Select";

export default class EditMovie extends React.Component {
  state = {
    movie: {},
    isLoaded: false,
    error: null,
  }

  constructor(props) {
    super(props);
      this.state = {
        movie: {
          id: 0,
          title: "",
          release_date: "",
          runtime: "",
          mpaa_rating: "",
          rating: "",
          description: ""
        },
        mpaaOptions: [
          {id: "G", value: "G"},
          {id: "PG", value: "PG"},
          {id: "PG13", value: "PG13"},
          {id: "R", value: "R"},
          {id: "NC17", value: "NC17"},
        ],
        isLoaded: false,
        error: null
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    console.log("Form was submitted");
    e.preventDefault();
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    this.setState((prevState) => ({
      movie: {
        ...prevState.movie,
        [name]: value,
      }
    }))
  }

  componentDidMount() {

  }

  render() {
    let {movie} = this.state

    return (
      <>
        <h2>Add / Edit Movie</h2>
        <hr/>

        <form onSubmit={this.handleSubmit}>
          <input type={`hidden`} name={`id`} id={`id`} value={movie.id} onChange={this.handleChange} />

          <Input
            title={`Title`}
            type={`text`}
            id={`title`}
            name={`title`}
            value={movie.title}
            handleChange={this.handleChange}
          />

          <Input
            title={`Release Date`}
            type={`text`}
            id={`release_date`}
            name={`release_date`}
            value={movie.release_date}
            handleChange={this.handleChange}
          />

          <Input
            title={`Runtime`}
            type={`text`}
            id={`runtime`}
            name={`runtime`}
            value={movie.runtime}
            handleChange={this.handleChange}
          />

          <Select
            title={`MPAA Rating`}
            id={`mpaa_rating`}
            name={`mpaa_rating`}
            options={this.state.mpaaOptions}
            value={movie.mpaa_rating}
            handleChange={this.handleChange}
          />

          <Input
            title={`Rating`}
            type={`text`}
            id={`rating`}
            name={`rating`}
            value={movie.rating}
            handleChange={this.handleChange}
          />

          <Textarea
            title={`Description`}
            id={`description`}
            name={`description`}
            value={movie.description}
            rows={3}
            handleChange={this.handleChange}
          />

          <hr/>

          <button className={`btn btn-danger`} type={`button`} style={{minWidth: "100px"}}>Cancel</button>
          <button className={`btn btn-primary mx-3`} type={`submit`} style={{minWidth: "100px"}}>Save</button>
        </form>

        <div className={`mt-3`}>
          <pre>{JSON.stringify(this.state, null, 3)}</pre>
        </div>
      </>
    );
  }
}