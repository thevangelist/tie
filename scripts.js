var ViewModel = function(sample) {
  this.sample = ko.observable(sample);
};
ko.applyBindings(new ViewModel("STOP"));
