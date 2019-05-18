function easterCosinacs(budget, priceForKgFlour) {
    let priceForEgs = priceForKgFlour * 0.75;
    let priceForliterMilk = priceForKgFlour * 1.25;
    let priceForQuarterMilk = priceForliterMilk / 4;
    let priseForCosunac = priceForEgs + priceForQuarterMilk + priceForKgFlour;
    let cosunacs = 0;
    let coloredEgs = 0;

    while (budget >= priseForCosunac ) {
        cosunacs++;
        budget -= priseForCosunac;
        coloredEgs += 3;
        if (cosunacs % 3 == 0) {
            coloredEgs -= (cosunacs - 2)
        }
    }
    console.log(`You made ${cosunacs} cozonacs! Now you have ${coloredEgs} eggs and ${budget.toFixed(2)}BGN left.`);
    
}
easterCosinacs(20.50, 1.25
    )