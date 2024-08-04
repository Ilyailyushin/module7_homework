const Person = {
    name: 'Olga',
    age: 25,
    fullName: 'carter'
    }
    
    function setFullName(obj, str) {
    obj.fullName = str;
    }
    
    const setPersonFullName = setFullName.bind(null, Person);
    
    setPersonFullName("John Smith");
    
    console.log(Person.fullName);