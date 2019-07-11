function systemRegister(data) {
    let systems = {};

    for (const line of data) {
        let [system, component, subcomponent] = line.split(' | ');
        if (!systems.hasOwnProperty(system)) {
            let obj = {[component]: [subcomponent]};
            systems[system] = obj;
        } else {
            if (!systems[system].hasOwnProperty(component)) {
                systems[system][component] = [subcomponent];
            } else {
                systems[system][component].push(subcomponent)
            }
        }
    }
    let systemArr = Object.entries(systems)
                          .sort((a, b) => a[0].localeCompare(b[0]))
                          .sort((a, b) =>Object.entries(b[1]).length - Object.entries(a[1]).length);

    systemArr.forEach(e => {
        console.log(e[0]);
        Object.entries(e[1]).sort((a, b) => b[1].length - a[1].length)
                            .forEach(e => {
                                console.log(`|||${e[0]}`);
                                e[1].forEach(e => console.log(`||||||${e}`))
                            })
    })
    // console.log(systemArr);
    
    
}
systemRegister(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
    ])