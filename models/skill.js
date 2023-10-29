

  const skills = [
    {id: 125223, skill: 'Coding languages', proficient: false},
    {id: 127904, skill: 'Database knowledge', proficient: false},
    {id: 139608, skill: 'Data structures and algorithms', proficient: false},
    {id: 134968, skill: 'Source control', proficient: false},
    {id: 138498, skill: 'Testing procedures', proficient: false},
    {id: 142608, skill: 'Debugging knowledge', proficient: false},
    {id: 151478, skill: 'Operating systems', proficient: false},
    {id: 163848, skill: 'Text editing software', proficient: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
	

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }