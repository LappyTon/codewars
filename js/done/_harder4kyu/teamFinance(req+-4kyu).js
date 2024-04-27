
// ^^^^^^ LINK THERE ^^^^^^`

function calculateTeamFinanceReport(salaries, team){
    let teamBudget = 0;
    let unnamedSpecializationBudget= {};
    let specializationBudget = {};
  
    team.forEach(member => {
      if (salaries.hasOwnProperty(member.specialization)) {
        const { salary, tax } = salaries[member.specialization];
        const taxPercentage = parseFloat(tax) / 100;
        const salaryWithTax = (salary / (1 - taxPercentage));
        teamBudget += salaryWithTax;
        unnamedSpecializationBudget[member.specialization] = ((unnamedSpecializationBudget[member.specialization] || 0) + salaryWithTax);
        console.log(unnamedSpecializationBudget[member.specialization]);
      }
    });
    for (let i in unnamedSpecializationBudget) {
      specializationBudget[`totalBudget${i}`] = Math.round(unnamedSpecializationBudget[i])
    }
    return {
      totalBudgetTeam: Math.round(teamBudget),
      ...specializationBudget
    };
  }
  
  
  
  // tasks:
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
   