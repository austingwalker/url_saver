import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {

  //Get functions
  getFiles: function() {
    return axios.get("/api/files");
  },

  getFile: function(id) {
    return axios.get("/api/url/" + id);
  },

  //Post functions
  addURL: function(urlData) {
    return axios.post("/api/url", urlData);
  },

  addFile: function(fileData) {
    console.log(fileData)
    return axios.post("/api/files", fileData);
  },

  //Put functions

  //Delete functions


};
