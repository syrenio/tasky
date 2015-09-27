Meteor.startup(function() {
  Teams.remove({});
  Teams.insert({
    name: "test"
  });
  Teams.insert({
    name: "test 3"
  });

  console.log("users: " + Meteor.users.find({}).count());
  console.log("teams: " + Teams.find({}).count());
  console.log("tasks: " + Tasks.find({}).count());
});
