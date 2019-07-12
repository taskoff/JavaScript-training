function gladiatorInventory(arr) {
    let equipment = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let [command, info] = arr[i].split(' ');
        if (command === 'Buy') {
            if (!equipment.includes(info)) {
               addItem(equipment, info); 
            }
        } else if (command === 'Trash') {
            if (equipment.includes(info)) {
                deleteItem(equipment, info);
            }
        } else if (command === 'Repair') {
            if (equipment.includes(info)) {
                repairItem(equipment, info);
            }
        } else if (command === 'Upgrade') {
            let [item, upgrade] = info.split('-');
            if (equipment.includes(item)) {
                upgradeItem(equipment, item, upgrade);
            }
        }
    }
    console.log(equipment.join(' ')); 

    function addItem(equipment, addItem) {
        equipment.push(addItem);
    }
    function deleteItem(equipment, item) {
        let index = equipment.indexOf(item);
        equipment.splice(index, 1);
    }
    function repairItem(equipment, item) {
        let index = equipment.indexOf(item);
        equipment.splice(index, 1);
        equipment.push(item);
    }
    function upgradeItem(equipment, item, upgrade) {
        let index = equipment.indexOf(item);
        equipment.splice(index + 1, 0, `${item}:${upgrade}`);
    }
    
    
}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)