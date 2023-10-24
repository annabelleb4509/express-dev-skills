

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
    getOne
  };
	

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }