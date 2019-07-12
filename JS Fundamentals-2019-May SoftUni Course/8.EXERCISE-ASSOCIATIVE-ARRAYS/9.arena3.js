function arenaTier(arr) {
    let gladiatorsList = {};
    let line = arr.shift();

    while (line != 'Ave Cesar') {
        if (!line.includes('vs')) {
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);
            
            if (!gladiatorsList.hasOwnProperty(name)) {
                gladiatorsList[name] = {[technique] : skill, totallSkill : skill};
            } else {
                if (!gladiatorsList[name].hasOwnProperty(technique)) {
                    gladiatorsList[name][technique] = skill;
                    gladiatorsList[name].totallSkill += skill;
                } else {
                    if (gladiatorsList[name][technique] < skill) {
                        gladiatorsList[name].totallSkill += skill - gladiatorsList[name][technique]
                        gladiatorsList[name][technique] = skill;
                    }
                }
            }
           
        } else {
            let [firstGladiator, secondGladiator] = line.split(' vs ');
            if (gladiatorsList.hasOwnProperty(firstGladiator) && secondGladiator) {
                for (const key in gladiatorsList[firstGladiator]) {
                   for (const el in gladiatorsList[secondGladiator]) {
                        if (key === el && key != 'totallSkill') {
                           if (gladiatorsList[firstGladiator].totallSkill > gladiatorsList[secondGladiator].totallSkill) {
                               delete gladiatorsList[secondGladiator];
                           } else if (gladiatorsList[firstGladiator].totallSkill < gladiatorsList[secondGladiator].totallSkill) {
                               delete gladiatorsList[firstGladiator];
                           }
                        }
                       }
                   }
                }
            
        }
        line = arr.shift();
    }
    let arrGladiators = Object.entries(gladiatorsList)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .sort((a, b) => b[1].totallSkill - a[1].totallSkill);
    // console.log(arrGladiators);
    arrGladiators.forEach(e => {
        console.log(`${e[0]}: ${e[1].totallSkill} skill`);
        delete e[1].totallSkill;
        let sorted = Object.entries(e[1])
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .sort((a, b) => b[1] - a[1]);
        sorted.forEach(e => console.log(`- ${e[0]} <!> ${e[1]}`));
    })

}
// arenaTier(['Peter -> Duck -> 400',
// 'Julius -> Shield -> 250',
// 'Gladius -> Heal -> 200',
// 'Gladius -> Support -> 250',
// 'Gladius -> Shield -> 250',
// 'Peter vs Gladius',
// 'Gladius vs Julius',
// 'Gladius vs Maximilian',
// 'Ave Cesar'
// ])
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 250',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    )