
  
  //filter by any data from input
  advancedSearch(object) {
    //if there is array
    if (object.constructor === Array) {
      //open it
      for (let i = 0; i < object.length; i++) {
        //if there is object
        if (typeof object[i] === "object") {
          //send it back to this function again
          this.advancedSearch(object[i]);
        }
      }
    }
    //if there is object
    else if (typeof object === "object") {
      //open it
      for (let item in object) {
        //if there is array in object
        if (object[item].constructor === Array) {
          //send it back to this function again (it will check on array and open it again)
          this.advancedSearch(object[item]);
        }
        //if there is object
        else if (typeof object[item] === "object") {
          //open it
          this.searchInObject(object[item]);
        } //if there is string
        else if (typeof object[item] === "string") {
          //check values
          this.searchInString(object[item]);
        }
      }
    }
  }
  searchInObject(object) {
    for (let key in object) {
      //if object value and search input value will not return false (also exclude links)
      if (
        object[key].indexOf(this.state.search) !== -1 &&
        !object[key].startsWith("http")
      ) {
        console.log(object);
      }
    }
  }
  searchInString(object) {
    if (
      !object.startsWith("https") &&
      object.indexOf(this.state.search) !== -1
    ) {
      for (let i = 0; i < this.state.student.length; i++) {
        // if (this.state.student[i].includes(object)) {
        // console.log(this.state.student.includes(object));
        // }
      }
    }
  }