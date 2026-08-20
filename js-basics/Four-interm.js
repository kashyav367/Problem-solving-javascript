// 4. Check for permissions from roles

    // - Input: roles={ admin:["read","write"], user:["read"], staff: ["write"]}
    //          checkRole="user",
    //          action="write"

    //   - Output: false       


    const roles = {admin:["read","write"], user:["read"], staff: ["write"]}

    let checkRole="user";

    let action="write"


    const result = roles[checkRole].includes(action)
    console.log(result)