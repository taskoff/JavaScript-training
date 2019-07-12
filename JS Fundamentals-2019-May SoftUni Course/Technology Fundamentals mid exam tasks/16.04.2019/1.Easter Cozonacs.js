function easterCosinacs(budget, priceForKgFlour) {

    
    let priceForEgs = priceForKgFlour * 0.75;
    let priceForliterMilk = priceForKgFlour * 1.25;
    let priceForQuarterMilk = priceForliterMilk / 4;
    let priseForCosunac = priceForEgs + priceForQuarterMilk + priceForKgFlour;
    let cosunacs = 0;
    let coloredEggs = 0;

    while (budget >= priseForCosunac ) {
        cosunacs++;
        budget -= priseForCosunac;
        coloredEggs += 3;
        if (cosunacs % 3 == 0) {
            coloredEggs -= (cosunacs - 2)
        }
    }
    
    console.log(`You made ${cosunacs} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
    
}
easterCosinacs(15.75, 1.4 )