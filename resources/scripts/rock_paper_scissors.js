const { result } = require(`lodash`);

class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    const cpuSelection = acceptedValues[Math.floor(Math.random() * acceptedValues.length)];
    return cpuSelection;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    const result = document.querySelector(`.result`);
    if (userSelection === cpuSelection){
      result.textContent = `tie`;
    } 
    else if (userSelection == `rock`){
      if(cpuSelection == `paper`){
        result.textContent = `lose`;
      }else{
        result.textContent = `win`;
      }
    }else if(userSelection == `scissors`){
      if(cpuSelection == `rock`){
        result.textContent = `lose`;
      }else{
        result.textContent = `win`;
      }
    }else if(userSelection == `paper`){
      if(cpuSelection == `scissors`){
        result.textContent = `lose`;
      }else{
        result.textContent = `win`;
      }
    }

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    if (result.textContent === `win`){
      this.score.user ++;
    }else if (result.textContent === `lose`){
      this.score.cpu ++;
    }

  }
}