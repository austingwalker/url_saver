import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {

  getFiles: function() {
    return axios.get("/api/files");
  },

  addURL: function(urlData) {
    return axios.post("/api/url", urlData);
  },

  addFile: function(fileData) {
    console.log(fileData)
    return axios.post("/api/files", fileData);
  },


};
