import React, { Component } from "react";
// import ReactPaginate from "react-paginate";
import axios from "axios";
import PostF from "./PostF"
import Paginate from "./Paginate";

import "./App.css";

class App extends Component {
  // const [posts, setPosts] = useState();
  //   const [loading,setloading]= useState();
  //   const [currentPage, setCurrentPage]= useState(1);
  //   const [postsPerPage, setPostsPerPage]= useState(1);

  //   useEffect(() =>{f
  //     const fetchPosts =async () =>{
  //       setloading(true);
  //       const res = await axios.get('http://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5');
  //       setPosts(res.data);
  //       setloading(false);
  //     }

  //     fetchPosts();
  //   }, []);
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }
  
  componentDidMount() {
    document.body.style.backgroundColor = "#29f2ac"
    fetch(
      `https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5`
    ).then((resp) => {
      resp.json().then((result) => {
        // console.warn(result.data);
        this.setState({ users: result.data });
      });
    });
  }

  render() {
    

    // console.log(posts);


    // const handlePage = (data) =>{
    //   console.log(data.selected);
      
    // }
    const postDelete=(id,e) =>{
      e.preventDefault();
      axios.delete(`https://mockrestapi.herokuapp.com/api/employee/${id}`)
      .then(res=>
          console.log("deleted!!",res)).catch(err => console.log(err))
  };
    return (
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Country</th>
              <th>Age</th>
              <th>Delete Data</th>
              {/* <th>About</th>
              <th>Date of Birth</th> */}
            </tr>
          </thead>
          <tbody>
          {this.state.users
            ? this.state.users.map((item, i) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.country}</td>
                    <td>{item.age}</td>
                    <th><button onClick={(e) => postDelete(item._id,e)}>Delete</button></th>
                    {/* <td>{item.about}</td>
                    <td>{item.dob}</td> */}
                  </tr>
              ))
              : null}
          </tbody>
        </table>
        <Paginate />
        <PostF />
      </div>
    );
  }
}

export default App;
