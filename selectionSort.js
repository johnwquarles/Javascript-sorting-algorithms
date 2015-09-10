var _ = require('lodash'),
    chalk = require('chalk');

module.exports = function (elements) {

  console.log(chalk.red("\n\
    _   _   |   _    _  _|_  o   _   ._  \n\
   _>  (/_  |  (/_  (_   |_  |  (_)  | | \n\
    _   _   ._  _|_ \n\
   _>  (_)  |    |_ \n"));

  var randomArr = _.shuffle(_.range(elements));
  console.log(chalk.underline.red(`\nStarting array:`) + ` ${JSON.stringify(randomArr)}`);

  var finishedArr = selectionSort(randomArr);
  console.log(chalk.underline.green(`\nSorted array:`) + ` ${JSON.stringify(finishedArr)}\n`);

  function selectionSort(arr) {
    var startTime = Date.now();
    var iterations = 0;
    for (var i = 0; i < arr.length; i++) {
      console.log(chalk.underline.blue(`\nOuter Loop #${i+1}`));
      iterations++;
      var low_i = i;
      var comma = i === arr.length - 1 ? "" : ",";
      console.log(chalk.red.dim(`Unsorted portion:`) + ` [${arr.slice(i)}]`);
      console.log(`Current low: ` + chalk.blue(`${arr[low_i]}`) + `${getSpacer()}| [` + chalk.red(`${arr[low_i]}`) + `${comma}${arr.slice(low_i + 1)}]`);
      for (var j = i+1; j < arr.length; j++) {
        iterations++;
        var lastComma = j === arr.length - 1 ? "": ",";
        var numberIsRed = false;
        if (arr[j] < arr[low_i]) {
          low_i = j;
          numberIsRed = true;
        }
        //var spacer = (''+arr[low_i]).length === 1 ? "  " : " ";
        var numberTerm = numberIsRed ? chalk.red(`${arr[j]}`) : chalk.yellow(`${arr[j]}`);
        console.log(`Current low: ` + chalk.blue(`${arr[low_i]}`) + `${getSpacer()}| [${arr.slice(i, j)},` + numberTerm + `${lastComma}${arr.slice(j+1)}]`);
      }
      var temp = arr[i];
      arr[i] = arr[low_i];
      arr[low_i] = temp;
      var firstComma = i === 0 ? "" : ",";
      console.log(chalk.green.dim(`Sorted portion: `) + `[${arr.slice(0, i)}${firstComma}` + chalk.green(`${arr[i]}`) + `]`);
    }
    var endTime = Date.now();
    var duration = endTime - startTime;
    console.log(chalk.dim.green(`(Sorting done; ${iterations} total iterations)`));
    console.log(chalk.underline.yellow(`\nSorting took:`) + ` ${duration} ms.`);
    return arr;

    function getSpacer () {
      return (''+arr[low_i]).length === 1 ? "  " : " ";
    }
  }
}
