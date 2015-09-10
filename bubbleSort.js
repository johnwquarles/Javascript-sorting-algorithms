var _ = require('lodash'),
    chalk = require('chalk');

module.exports = function (elements) {

  console.log(chalk.blue("\n\
   o            o     o     o       \n\
  O            O     O     O        \n\
  O            O     O     o        \n\
  o            o     o     O        \n\
  OoOo. O   o  OoOo. OoOo. o  .oOo. \n\
  O   o o   O  O   o O   o O  OooO' \n\
  o   O O   o  o   O o   O o  O     \n\
  `OoO' `OoO'o `OoO' `OoO' Oo `OoO' \n\
                       O   \n\
                      oOo  \n\
  .oOo  .oOo. `OoOo.   o   \n\
  `Ooo. O   o  o       O   \n\
      O o   O  O       o   \n\
  `OoO' `OoO'  o       `oO \n"));

  var randomArr = _.shuffle(_.range(elements));
  console.log(chalk.underline.red(`\nStarting array:`) + ` ${JSON.stringify(randomArr)}`);

  var finishedArr = bubbleSort(randomArr);
  console.log(chalk.underline.green(`\nSorted array:`) + ` ${JSON.stringify(finishedArr)}\n`);

  function bubbleSort (arr) {
    var startTime = Date.now();
    var swaps = 1;
    var loops = 1;
    var iterations = 1;
    var finished = false;
    while (finished === false) {
      finished = true;
      console.log(chalk.underline.blue(`\nOuter loop #${loops}`));
      iterations++;
      loops++;
      for (var i = 0; i < arr.length; i++) {
        iterations++;
        if (arr[i] > arr[i+1]) {
          finished = false;
          var firstComma = i === 0 ? "": ",";
          var lastComma = i+1 === arr.length - 1 ? "": ",";
          var numLength = ('' + swaps).length;
          var spacing = numLength === 3 ? "" : numLength === 2 ? " " : "  ";
          console.log(chalk.dim.red(`pre-swap #${swaps}:`) + ` ${spacing}[${arr.slice(0, i)}` + `${firstComma}`+ chalk.red(`${arr.slice(i, i+2)}`) + `${lastComma}${arr.slice(i+2)}]`);
          swaps++;
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          console.log(chalk.dim.green(`post-swap #${swaps}:`) + `${spacing}[${arr.slice(0, i)}` + `${firstComma}`+ chalk.green(`${arr.slice(i, i+2)}`) + `${lastComma}${arr.slice(i+2)}]`);
        }
      }
    }
    var endTime = Date.now();
    var duration = endTime - startTime;
    console.log(chalk.dim.green(`(Sorting done; ${iterations} total iterations)`));
    console.log(chalk.underline.yellow(`\nSorting took:`) + ` ${duration} ms.`);
    return arr;
  }
}
