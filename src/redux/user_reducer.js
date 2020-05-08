
const initialState = {
    id: "",
    displayName: "",
    email: "",
    firstName: "",
    spouseFistName: "",
    spouseBirthYear: 1990,
    province: "",
    maritalStatus: "",
    housing: "rent",
    vehicle: "own",
    maritalStatusId: "",
    taxAge: false,
    birthYear: 1978,
    currentAge: 32, 
    rrifWithdrawalAge: 65,
    retirementPensionIncome: 0,
    genderId: "",
    hasChildren: false,
    "tax free savings account": false,
    "registered retirement savings": false,
    "changeAssumptions": false,
    "employer savings": false,
    "non-registered": false,
    hasRRSP: false,
    hasOther: false,
    childCount: 1,
    numberOfChildren: 0,
    retirementAge: 65, 
    lifeSpan: 95,       
    cppStartAge: 65,
    oasStartAge: 65,
    rrspStartAge: 65,
    tfsaStartAge: 65, 
    rate1: 0.06,
    rate2: 0.045,
    inflationRate: 0.02,
    MER: 0.02,
    propertyAppreciation: 0.03,
}

const user_reducer = (state = initialState, action) => {
    switch(action.type) {  
        case "user_reducer/SET_KEY_VALUE": return {...state, [action.key]: action.value}            
        default: return state
    }
}

export default user_reducer

