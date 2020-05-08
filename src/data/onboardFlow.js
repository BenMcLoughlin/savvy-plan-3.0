export const onboardFlow_data = (user_reducer) => {

  const array = [
    {
        title: "Lets build you a financial Plan",
        subTitle: "We’ll gather some information that will enable us to build a financial plan suited to you.",
        reducer: "ui_reducer",
        label: "continue",
        value: 1,
        name: "progress",
        component: "Button",
    },
    {
        title: "What's your first Name?",
        component: "TextInput",
        reducer: "user_reducer",
        name: "firstName",
        why: "Why we ask",
        ask: "We'll use this to keep your details seperate from a spouse.",
    },
    {
        title: "What's your Birth Year?",
        component: "TextInput",
        reducer: "user_reducer",
        name: "birthYear",
        why: "Why we ask",
        ask: "This forms the basis of our financial calculations.",
    },
    {
        title: "What's your Gender?",
        component: "MultiSelect",
        reducer: "user_reducer",
        name: "gender",
        array: ["male", "female", "prefer not to say", "write below"],
        why: "Why we ask",
        ask: "We want to ensure our planning is inclusive.",
        
    },
    {
        title: "What's your marital status?",
        component: "MultiSelect",
        reducer: "user_reducer",
        name: "maritalStatus",
        array: ["single", "married", "common-law", "write below"],
        why: "Why we ask",
        ask: "Having a spouse has a large impact on your plan",
    },
    {
        title: "Tell us about your income",
        subTitle: "We need an idea of your earnings to calculate your retirement income",
        component: "Slider",
        why: "Why we ask",
        ask: "We want to estimate your Government Pension income, to do so we need a rough estimate of your earnings.",
        reducer: "main_reducer",
        id: "employmentIncome1",
        name: "employmentIncome",
        topLabel: "I Earn",
        bottomLabel: "Before tax per year",
    },
    {
        title: "Do you own your home or rent?",
        subTitle: "",
        component: "DualSelect",
        why: "Why we ask",
        ask: "We'd like to add your house to your net worth'",
        reducer: "user_reducer",
        name: "housing",
        option1: "own",
        option2: "rent",
    },
    {
      title: "Do you have children?",
      component: "MultiSelect",
      reducer: "user_reducer",
      name: "hasChildren",
      array: ["yes", "no", "hope to eventually", "yes, and they are over 18"],
      why: "Why we ask",
      ask: "We'd like to estimate your government benefits'.",
  },
    
    {
        title: "Do you own a car?",
        subTitle: "",
        component: "DualSelect",
        why: "Why we ask",
        ask: "We'd like to add your house to your net worth'",
        reducer: "user_reducer",
        name: "housing",
        option1: "own",
        option2: "lease",
        option3: "payments",
    },
    {
        title: "Do you have investments?",
        component: "CumulativeSelect",
        name: "investments",
        reducer: "user_reducer",
        array: ["tax free savings account", "registered retirement savings",  "non-registered"],
        why: "Why we ask",
        ask: "We want to ensure our planning is inclusive.",
    },
    {
        title: "Would you like to play with the plan's assumptions?",
        component: "DualSelect",
        name: "changeAssumptions",
        reducer: "user_reducer",
        option1: "Yes",
        option2: "No",
        why: "Why we ask",
        ask: `"Assumptions" refers to things like your rate of return, inflation and your lifespan. We have it pre built with the reccomended values but you're welcome to change them`,
    },
    {
        title: "STOP HERE!",
        component: "TextInput",
        reducer: "user_reducer",
        name: "spouseBirthYear",
   
    },
]
if(user_reducer.maritalStatus === "married" || user_reducer.maritalStatus === "common-law") {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "What's your marital status?") + 1
    array.splice(priorQuestionIndex,0, {
        title: "What's your spouse's first Name?",
        component: "TextInput",
        reducer: "user_reducer",
        name: "spouseFistName",
        why: "Why we ask",
        ask: "We'll use this to keep your details seperate from a spouse.",
    })
    array.splice(priorQuestionIndex + 1,0, {
        title: "What's your spouse's birth Year?",
        component: "TextInput",
        reducer: "user_reducer",
        name: "spouseBirthYear",
        why: "Why we ask",
        ask: "We'll use this to keep your details seperate from a spouse.",
    })
    console.log(array);
    const priorQuestion2Index = array.findIndex(d => d.title ===  "Tell us about your income") + 1
    array.splice(priorQuestion2Index,0, {
        title: "Tell us about your spouse's income",
        subTitle: "We need an idea of your earnings to calculate their retirement income",
        component: "Slider",
        why: "Why we ask",
        ask: "We want to estimate your Government Pension income, to do so we need a rough estimate of your earnings.",
        reducer: "main_reducer",
        id: "spouseEmploymentIncome1",
        name: "spouseEmploymentIncome1",
        topLabel: "My Spouse Earns",
        bottomLabel: "Before tax per year",
    })
}

if(user_reducer.housing === "own") {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you own your home or rent?") + 1


    array.splice(priorQuestionIndex,0,  {
        title: "How Much is your house worth?",
        component: "Slider",
        why: "Why we ask",
        ask: "We want to estimate your Government Pension income, to do so we need a rough estimate of your earnings.",
        reducer: "main_reducer",
        id: "primaryResidenceValue",
        log: true,
        topLabel: "My house is worth about",
        bottomLabel: "",
    })
    array.splice(priorQuestionIndex + 1,0, {
        title: "How much do you owe on your mortgage?",
        component: "Slider",
        why: "Why we ask",
        ask: "We want to estimate your Government Pension income, to do so we need a rough estimate of your earnings.",
        reducer: "main_reducer",
        id: "primaryResidenceValue",
        topLabel: "I have about",
        bottomLabel: "owing on my mortgage",
    })
}
if(user_reducer.housing === "rent") {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you own your home or rent?") + 1
    array.splice(priorQuestionIndex,0,  {
        title: "How Much do you pay per month in rent?",
        component: "Slider",
        why: "Why we ask",
        ask: "We want to estimate your Government Pension income, to do so we need a rough estimate of your earnings.",
        reducer: "main_reducer",
        id: "primaryResidenceValue",
        topLabel: "I Pay",
        bottomLabel: "in rent per month",
    })
}

if(user_reducer.hasChildren === "yes") {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have children?") + 1
     array.splice(priorQuestionIndex,0, {
        title: "How many children?",
        component: "NumberSelect",
        reducer: "user_reducer",
        name: "numberOfChildren",
        why: "Why we ask",
        ask: "We'd like to estimate your government benefits'.",
        
    })
}

if(user_reducer.hasChildren === "hope to eventually") {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have children?") + 1
     array.splice(priorQuestionIndex,0, {
        title: "How many children would you like to have?",
        component: "NumberSelect",
        reducer: "user_reducer",
        name: "numberOfChildren",
        why: "Why we ask",
        ask: "We want to show estimate how much you'd earn in goverment benefits if you have children",
        
    })
}

if(user_reducer["tax free savings account"]) {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have investments?") + 1
     array.splice(priorQuestionIndex,0, {
        title: "We'll need some details about your TFSA",
        component: "twoSliders",
        why: "Why we ask",
        ask: "We'll run a rough calculation to show you how much income you'll be able to draw.",
        props1: {
            id: "TFSAinitialValue",
            name: "TFSAinitialValue",
            topLabel: "I currently have about",
            bottomLabel: "in my TFSA",
            reducer: "main_reducer",
        },
        props2: {
            id: "TFSAcontribution",
            name: "TFSAcontribution",
            topLabel: "I contribute about",
            bottomLabel: "per year",
            max: 6000,
            reducer: "main_reducer",
        },
    })
}
if(user_reducer["registered retirement savings"]) {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have investments?") + 1
     array.splice(priorQuestionIndex,0, {
        title: "We'll need some details about your RRSP",
        component: "twoSliders",
        why: "Why we ask",
        ask: "We'll run a rough calculation to show you how much income you'll be able to draw.",
        props1: {
            id: "RRSPinitialValue",
            name: "RRSPinitialValue",
            topLabel: "I currently have about",
            bottomLabel: "in my RRSP",
            reducer: "main_reducer",
        },
        props2: {
            id: "RRSPcontribution",
            name: "RRSPcontribution",
            topLabel: "I contribute about",
            bottomLabel: "per year",
            max: 24000,
            reducer: "main_reducer",
        },
    })
}
if(user_reducer.changeAssumptions === "yes") {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "Would you like to play with the plan's assumptions?") + 1
     array.splice(priorQuestionIndex,0, {
        title: "We'll need some details about your RRSP",
        component: "twoSliders",
        why: "Why we ask",
        ask: "We'll run a rough calculation to show you how much income you'll be able to draw.",
        props1: {
            id: "RRSPinitialValue",
            name: "RRSPinitialValue",
            topLabel: "I currently have about",
            bottomLabel: "in my RRSP",
            reducer: "main_reducer",
        },
        props2: {
            id: "RRSPcontribution",
            name: "RRSPcontribution",
            topLabel: "I contribute about",
            bottomLabel: "per year",
            max: 24000,
            reducer: "main_reducer",
        },
    })
}

    return array
}