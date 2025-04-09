function Custom(_id, _location, _address) {
  this.id = _id;
  this.location = _location;
  this.address = _address;
}
Custom.prototype.getSetCen = function () {
  var data = {};
  for (var key in this) {
    if (typeof this[key] !== "function") {
      data[key] = this[key];
    }
  }
  for (let key in this) {
    Object.defineProperty(this, key, {
      set: function (value) {
        data[key] = value;
      },
      get: function () {
        return data[key] + " inside getSetGen";
      },
    });
  }
};
var cust1 = new Custom("SD-10", "SV", "123 st.");
cust1.getSetCen();
cust1.id = "SD-15";
cust1.location = "SM";
cust1.address = "456 st.";
console.log(cust1.id);
console.log(cust1.location);
console.log(cust1.address);

console.log("==================");
var cust2 = new Custom("SD-11", "SV", "125 st.");
cust2.getSetCen();
cust2.id = "SD-12";
console.log(cust2.id);
