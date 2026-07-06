function salaryGrossPromptProcess() {
  let gross = prompt("enter your gross salary");
  if (isNaN(gross) === false) {
    console.log(`you entered this amount ${gross} exiting`);
    return;
  }
  prompt(`invalid gross salary entered. enter aa number for gorss salary`);
  salaryGrossPromptProcess();
}
salaryGrossPromptProcess();
