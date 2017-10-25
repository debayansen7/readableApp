// const host = `${process.env.REACT_APP_BACKEND}`;
const host = `http://localhost:7001`;
const header = { 'Authorization': 'deb' };
const credentials = '*' ;

class API {

/* ------------------------ API - GET, POST, DELETE Calls ------------------------ */
  static getData(url){
    // console.log('fetching from url', url);
    return fetch(url, { headers: header, credentials: credentials } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        return this.data= data
      });
  }

  // postData(path){
  //   let path =
  // }
  //
  // deleteData(path){
  //   let path =
  // }

/* ------------------------ API Calls--------------------------------------*/

  static fetchCategories(){   // Get all of the categories available for the app.
    const url = `${host}/categories`;
    return this.getData(url);
  };

  static fetchCategoryPosts(categoryID){  //Get all of the posts for a particular category
    const url = `${host}/${categoryID}/posts`;
    return this.getData(url);
  };

  // ---------------- Posts -------------------------------

  static fetchPosts(){  //Get all of the posts.
    const url = `${host}/posts`;
    return this.getData(url);
  };

  static fetchPostByID(postID){    //Get the details of a single post
    const url = `${host}/posts/${postID}`;
    return this.getData(url);
  };

  static fetchCommentsByPost(postID){    //Get all the comments for a single post
    const url = `${host}/posts/${postID}/comments`;
    return this.getData(url);
  };


  // ---------------- Comments -------------------------------

  static fetchCommentByID(commentID){     //Get the details for a single comment
    const url = `${host}/comments/${commentID}`;
    return this.getData(url);
  };

  // GET /comments/:id
  //   USAGE:
  //     Get the details for a single comment
  //
  // POST /posts
  //   USAGE:
  //     Add a new post
  //
  //   PARAMS:
  //     id - UUID should be fine, but any unique id will work
  //     timestamp - timestamp in whatever format you like, you can use Date.now() if you like
  //     title - String
  //     body - String
  //     author - String
  //     category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
  //
  // POST /posts/:id
  //   USAGE:
  //     Used for voting on a post
  //   PARAMS:
  //     option - String: Either "upVote" or "downVote"
  //
  // POST /comments
  //   USAGE:
  //     Add a comment to a post
  //
  //   PARAMS:
  //     id: Any unique ID. As with posts, UUID is probably the best here.
  //     timestamp: timestamp. Get this however you want.
  //     body: String
  //     author: String
  //     parentId: Should match a post id in the database.
  //
  // POST /comments/:id
  //   USAGE:
  //     Used for voting on a comment.
  //
  // PUT /comments/:id
  //   USAGE:
  //     Edit the details of an existing comment
  //
  //   PARAMS:
  //     timestamp: timestamp. Get this however you want.
  //     body: String
  //
  // PUT /posts/:id
  //   USAGE:
  //     Edit the details of an existing post
  //   PARAMS:
  //     title - String
  //     body - String
  //
  // DELETE /comments/:id
  //   USAGE:
  //     Sets a comment's deleted flag to 'true'
  //
  // DELETE /posts/:id
  //   USAGE:
  //     Sets the deleted flag for a post to 'true'.
  //     Sets the parentDeleted flag for all child comments to 'true'.

};

export default API;
