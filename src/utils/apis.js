// const host = `${process.env.REACT_APP_BACKEND}`;
const host = `http://localhost:7001`;
const header = { 'Authorization': 'deb' };
const updatedHeader = { 'Authorization': 'deb', 'Content-Type': 'application/json' }
const credentials = '*' ;

class API {

/* ------------------------ API - GET, POST, DELETE Calls ------------------------ */

    // GET data API call
    static getData(url){
        return fetch(url, { headers: header, credentials: credentials } )
          .then( (res) => { return(res.text()) })
          .then((data) => {
            return this.data = data
          });
    };

    // POST data API call
    static postData(url, dataBody){
        // console.log(url, JSON.stringify(dataBody));
        return fetch(
            url,
            {
                method: 'POST',
                headers: updatedHeader,
                credentials: credentials,
                body: JSON.stringify(dataBody),
            }
        ).then( (res) => { return(res.text()) })
        .then((data) => {
            return this.data= data
        });
    };

    // PUT data API call
    static putData(url, dataBody){
        return fetch(url,
            {
                method: 'PUT',
                headers: updatedHeader,
                credentials: credentials,
                body: JSON.stringify(dataBody),
            } )
            .then( (res) => { return(res.text()) })
            .then((data) => {
                return this.data = data
            });
    };

    // DELETE data API call
    static deleteData(url){
        return fetch(url, { method: 'DELETE', headers: header, credentials: credentials } )
            .then( (res) => { return(res.text()) })
            .then((data) => {
                return this.data= data
            });
    };

    /* ------------------------ Categories Calls--------------------------------------*/

    // Get all of the categories available for the app.
    static fetchCategories(){
        const url = `${host}/categories`;
        return this.getData(url);
    };

    //Get all of the posts for a particular category
    static fetchCategoryPosts(categoryName){
        const url = `${host}/${categoryName}/posts`;
        return this.getData(url);
    };

    // ---------------- Posts -------------------------------

    //Get all of the posts.
    static fetchPosts(){
        const url = `${host}/posts`;
        return this.getData(url);
    };

    //Get the details of a single post
    static fetchPostByID(postID){
        const url = `${host}/posts/${postID}`;
        // console.log("url:",url);
        return this.getData(url);
    };

    //Get all the comments for a single post
    static fetchCommentsByPost(postID){
        const url = `${host}/posts/${postID}/comments`;
        return this.getData(url);
    };

    //Posting a post
    static postingPost(data){
        const url = `${host}/posts`;
        return this.postData(url, data)
    }

    //Used for voting on a post
    static updatePostScore(id, data){ // Used for voting on a post
        const url = `${host}/posts/${id}`;
        return this.postData(url, data)
    }
    // POST /posts/:id
    //   USAGE:
    //     Used for voting on a post
    //   PARAMS:
    //     option - String: Either "upVote" or "downVote"

    //Used for voting on a post
    static votePost(id, data){
        const url = `${host}/posts/${id}`;
        return this.postData(url, data)
    }

    //Deleting a post
    static deletePost(id){
        const url = `${host}/posts/${id}`;
        return this.deleteData(url)
    }
        // DELETE /posts/:id
        //   USAGE:
        //     Sets the deleted flag for a post to 'true'.
        //     Sets the parentDeleted flag for all child comments to 'true'.

    //Edit the details of an existing post
    static editPost(id, data){
        const url = `${host}/posts/${id}`;
        return this.putData(url, data);
    }
        // PUT /posts/:id
        //   USAGE:
        //     Edit the details of an existing post
        //   PARAMS:
        //     title - String
        //     body - String

    // ---------------- Comments -------------------------------

    //Get the details for a single comment
    static fetchCommentByID(commentID){
        const url = `${host}/comments/${commentID}`;
        return this.getData(url);
    };

    //Post/Add a comment
    static postComment(data){
        const url = `${host}/comments`;
        return this.postData(url, data)
    };
        // POST /comments
    //   USAGE:
    //     Add a comment to a post
    //   PARAMS:
    //     id: Any unique ID. As with posts, UUID is probably the best here.
    //     timestamp: timestamp. Get this however you want.
    //     body: String
    //     author: String
    //     parentId: Should match a post id in the database.

    //Deleting a Comment
    static deleteComment(id){
        const url = `${host}/comments/${id}`;
        return this.deleteData(url)
    };
        // DELETE /comments/:id
    //   USAGE:
    //     Sets a comment's deleted flag to 'true'

    //Edit particular comment - PUT /comments/:id
    static editComment(id, data){
        const url = `${host}/comments/${id}`;
        return this.putData(url, data);
    }
        //   USAGE:
        //     Edit the details of an existing comment
        //   PARAMS:
        //     timestamp: timestamp. Get this however you want.
        //     body: String

    // POST /comments/:id
    static voteComment(id, data){
        const url = `${host}/comments/${id}`;
        return this.postData(url, data)
    }
    //   USAGE:
    //     Used for voting on a comment.
    //



};

export default API;
