Teams = new Meteor.Collection("teams");
Tasks = new Meteor.Collection("tasks");

if (Meteor.isClient) {
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
        name: text
      });
    }
  });
}
if (Meteor.isServer) {
  Meteor.startup(function() {
    Teams.remove({});
    Teams.insert({
      name: "test"
    });
    Teams.insert({
      name: "test 3"
    });

    console.log("teams: " + Teams.find({}).count());
    console.log("tasks: " + Tasks.find({}).count());
  });
}



/*
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
