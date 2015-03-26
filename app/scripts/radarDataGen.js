var dataA = {
  categories: ['Tools', 'Platforms', 'Languages & Frameworks', 'Techniques'],
  rings:      ['Adopt', 'Trial', 'Assess', 'Hold'],
  technologies: [
    {label: "Health check pages", category: "Techniques", ring: "Adopt"},
    {label: "Work-in-Progress limits", category: "Techniques", ring: "Adopt"},
    {label: "Automated deployment pipeline", category: "Techniques", ring: "Adopt"},
    {label: "In process acceptance testing", category: "Techniques", ring: "Adopt"},
    {label: "Out-of-container functional testing", category: "Techniques", ring: "Trial"},
    {label: "Micro-services", category: "Techniques", ring: "Trial"},
    {label: "Infrastructure automation of development workstations", category: "Techniques", ring: "Trial"},
    {label: "Logs as data", category: "Techniques", ring: "Trial"},
    {label: "Responsive web design", category: "Techniques", ring: "Trial"},
    {label: "Deployment and scripting test tools", category: "Techniques", ring: "Assess"},
    {label: "Feature branching", category: "Techniques", ring: "Hold"},
    {label: "Test recorders", category: "Techniques", ring: "Hold"},
    {label: "Exhaustive browser-based testing", category: "Techniques", ring: "Hold"},
    {label: "Infrastructure as code", category: "Tools", ring: "Adopt"},
    {label: "Embedded servlet containers", category: "Tools", ring: "Adopt"},
    {label: "Jasmine paired with Node.js", category: "Tools", ring: "Adopt"},
    {label: "Immutable servers", category: "Tools", ring: "Adopt"},
    {label: "Gradle", category: "Tools", ring: "Trial"},
    {label: "PSake", category: "Tools", ring: "Trial"},
    {label: "JavaScript micro frameworks", category: "Tools", ring: "Trial"},
    {label: "Jade", category: "Tools", ring: "Trial"},
    {label: "D3", category: "Tools", ring: "Trial"},
    {label: "SaaS performance testing tools", category: "Tools", ring: "Trial"},
    {label: "Dependency Structure Matrices", category: "Tools", ring: "Trial"},
    {label: "Locust", category: "Tools", ring: "Trial"},
    {label: "Clojure", category: "Languages & Frameworks", ring: "Adopt"},
    {label: "Scala", category: "Languages & Frameworks", ring: "Adopt"},
    {label: "Care about languages", category: "Languages & Frameworks", ring: "Adopt"},
    {label: "SASS, SCSS, LESS, and Stylus", category: "Languages & Frameworks", ring: "Adopt"},
    {label: "Domain-Specific Languages", category: "Languages & Frameworks", ring: "Trial"},
    {label: "Twitter Bootstrap", category: "Languages & Frameworks", ring: "Trial"},
    {label: "Sinatra", category: "Languages & Frameworks", ring: "Trial"},
    {label: "AngularJS and Knockout", category: "Languages & Frameworks", ring: "Trial"},
    {label: "Require.js", category: "Languages & Frameworks", ring: "Trial"},
    {label: "Backbone.js", category: "Languages & Frameworks", ring: "Hold"},
    {label: "Logic in stored procedures", category: "Languages & Frameworks", ring: "Hold"},
    {label: "Linux containers", category: "Platforms", ring: "Trial"},
    {label: "Private clouds", category: "Platforms", ring: "Trial"},
    {label: "MongoDB", category: "Platforms", ring: "Trial"},
    {label: "Continuous integration in the cloud", category: "Platforms", ring: "Trial"},
    {label: "Vert.x", category: "Platforms", ring: "Assess"},
    {label: "Open source IaaS", category: "Platforms", ring: "Assess"},
    {label: "Meteor.js", category: "Platforms", ring: "Hold"}
  ]};

var newData = [
  {
    label: "Adopt",
    categories: [
      { label: 'Tools', technologies: []},
      { label: 'Techniques', technologies: []},
      { label: 'Platforms', technologies: []},
      { label: 'Languages & Frameworks', technologies: []},
    ]
  },
  {
    label: "Trial",
    categories: [
      { label: 'Tools', technologies: []},
      { label: 'Techniques', technologies: []},
      { label: 'Platforms', technologies: []},
      { label: 'Languages & Frameworks', technologies: []},
    ]
  },
  {
    label: "Assess",
    categories: [
      { label: 'Tools', technologies: []},
      { label: 'Techniques', technologies: []},
      { label: 'Platforms', technologies: []},
      { label: 'Languages & Frameworks', technologies: []},
    ]
  },
  {
    label: "Hold",
    categories: [
      { label: 'Tools', technologies: []},
      { label: 'Techniques', technologies: []},
      { label: 'Platforms', technologies: []},
      { label: 'Languages & Frameworks', technologies: []},
    ]
  }
];

_.each(dataA.technologies, function(data) {
  var ring = _.findWhere(newData, {label: data.ring});
  var slice = _.findWhere(ring.categories, {label: data.category});
  slice.technologies.push({label: data.label});
});

console.log(JSON.stringify(newData));
