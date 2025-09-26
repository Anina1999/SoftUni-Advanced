//solve 1
function constructionCrew(workerObj) {
    if (workerObj.dizziness === true) {
        let { weight, experience, levelOfHydrated, dizziness } = workerObj;
        let waterNeeded = (weight * 0.1) * experience;
        workerObj.levelOfHydrated += waterNeeded;
        workerObj.dizziness = false;
    }
    return workerObj;
}    

// console.log(constructionCrew({ weight: 80,
// experience: 1,
// levelOfHydrated: 0,
// dizziness: true }));

// console.log(constructionCrew({ weight: 120,
// experience: 20,
// levelOfHydrated: 200,
// dizziness: true }));

// console.log(constructionCrew({ weight: 95,
// experience: 3,
// levelOfHydrated: 0,
// dizziness: false }));

//solve 2
function constructionCrew(worker) {
    if (!worker.dizziness) {
        return worker
    }
    
    worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
    worker.dizziness = false;

    return worker;
}  