function timeForChore(data) {
    let line = data.shift();
    let totallTime = 0;
    let allJob = {};
    while (line != 'wife is happy') {
        let pattern = /<(?<dishes>[a-z0-9]+)>|\[(?<clean>[A-Z0-9]+)]|{(?<loundry>).+}/g;
        let command = pattern.exec(line);
        // console.log(command);
        if (command != null) {
            let numPattern = /[0-9]/g;
            let currentSum = command[0].match(numPattern)
                                                 .map(e => e = Number(e))
                                                 .reduce((a, b) => a+b);
            
            if (command.groups.dishes != null) {
                if (!allJob.hasOwnProperty('Doing the dishes')) {
                    allJob['Doing the dishes'] = currentSum;
                } else {
                    allJob['Doing the dishes'] += currentSum;
                }
            } else if (command.groups.clean != null) {
                if (!allJob.hasOwnProperty('Cleaning the house')) {
                    allJob['Cleaning the house'] = currentSum;
                } else {
                    allJob['Cleaning the house'] += currentSum;
                }
            } else if (command.groups.loundry != null) {
                if (!allJob.hasOwnProperty('Doing the laundry')) {
                    allJob['Doing the laundry'] = currentSum;
                } else {
                    allJob['Doing the laundry'] += currentSum;
                }
            }
            totallTime += currentSum;
        }
        

        line = data.shift();
    }
    // console.log(allJob)
   
    console.log(`Doing the dishes - ${allJob['Doing the dishes']} min.`);
    console.log(`Cleaning the house - ${allJob['Cleaning the house']} min.`);
    console.log(`Doing the laundry - ${allJob['Doing the laundry']} min.`);


    console.log(`Total - ${totallTime} min.`);
}
timeForChore(['-^hr5a65j48<dd6f5h4dhfd>456sga_+',
    'DHdhy4*3[T2HOU87KRC]sA/@',
    'Sda%t]gf{%hjK8f34)!fG1re}-+htG%v',
    'wife is happy',
    ])
// timeForChore(['Vo.|1zps {lo2a}zgVGk{1)N+',
//     'Asdad123zxc{3]',
//     'R[A [F67G9C]6e3C@',
//     'MVo.|1zpshM<9) <d85ifkh59votu>@',
//     '<dm0g2y34mw1kpds2>iD|"p',
//     'wife is happy',
//     ])