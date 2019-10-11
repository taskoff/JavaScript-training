function systemComponents(data) {
    
    let allSystems = {};
    function makeAllSystems(inputArr) {
        inputArr.forEach(e => {
            let [system, component, subcomponent] = e.split(' | ');
            if (!allSystems.hasOwnProperty(system)) {
                allSystems[system] = {[component]: [subcomponent]}
            } else {
                if (!allSystems[system].hasOwnProperty(component)) {
                    allSystems[system][component] = [subcomponent];
                } else {
                    allSystems[system][component].push(subcomponent);
                }
            }
        });
    }
    makeAllSystems(data);

    function sortAllSystems(obj) {
        let systemsArr = Object.entries(obj);
                                
        let sortedArr = systemsArr.sort((a, b) => a[0].localeCompare(b[0]))
                                .sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length);
                                
        sortedArr.forEach(e => e[1] = Object.entries(e[1]).sort((a,b) => b[1].length - a[1].length));
       allSystems = sortedArr;
    }
    sortAllSystems(allSystems)
    // console.log(allSystems);
    

    function printAllSystem(allSystems) {
        allSystems.forEach(e => {
            console.log(e[0]);
            e[1].forEach(a => {
                console.log(`|||${a[0]}`);
                a[1].forEach(b => console.log(`||||||${b}`))
            })
            // console.log(e[1])
            
        })
    }
    printAllSystem(allSystems)
    
    
}
systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'SULS | Digital Site | Login Page',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)