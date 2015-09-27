Template.teams.helpers({
  teams: function() {
    return Teams.find({});
  }
});
Template.teams.events({
  'submit .team-add': function(evt) {
    evt.preventDefault();
    console.log(evt.target);
    var text = evt.target.name.value;

    Teams.insert({
      name: text,
      members: []
    });

    evt.target.name.value = "";
  }
});
