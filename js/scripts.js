// Create a object "Place": location, landmarks, time of year and notes
// When a person clicks om a place name, diplay properties

// Business Logic for Journal
function Journal() {
    this.places = {};
    this.currentId = 0;
}

Journal.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places[place.id] = place;
}

Journal.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

Journal.prototype.findPlace = function(id) {
    if (this.places[id] != undefined) {
        return this.places[id];
    }
    return false
}

Journal.prototype.deletePlace = function (id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
}

// Buisness Logic
function Places (location, landmark, time, notes) {
    this.location = location;
    this.landmark = landmark;
    this.time = time;
    this.notes = notes;
}

//let newPlace = new Places ("France", "Eiffel Tower", "summer", "make sure to drink wine");
//let newPlace2 = new Places ("Italy", "Colosseum", "winter", "pizza and gelatto"); 

