var _ = require('underscore'),
    chalk = require('chalk');

module.exports = function (elements) {

  console.log(chalk.green("\n\
  o                    |    o          \n\
  .,---.,---.,---.,---.|--- .,---.,---.\n\
  ||   |`---.|---'|    |    ||   ||   |\n\
  ``   '`---'`---'`    `---'``---'`   '\n\
                   |    \n\
    ,---.,---.,---.|--- \n\
    `---.|   ||    |    \n\
    `---'`---'`    `---'\n"));

  var randomArr = _.shuffle(_.range(elements));
  console.log(chalk.underline.red(`\nStarting array:`) + ` ${JSON.stringify(randomArr)}\n`);

  var finishedArr = insertionSort(randomArr);
  console.log(chalk.underline.green(`\nSorted array:`) + ` ${JSON.stringify(finishedArr)}\n`);

  function insertionSort (arr) {
    console.log(chalk.yellow("Ordered so far (relative to other yellow elements)"));
    console.log(chalk.red.dim("Element to be inserted next"));
    console.log(chalk.green.dim("That element post-insertion\n"));
    var iterations = 0;
    var startTime = Date.now();
    for (var i = 1; i < arr.length; i++) {
      iterations++;
      var j = i-1;
      var k = arr[i];
      var comma = i === arr.length - 1 ? "" : ",";
      console.log(`[` + chalk.yellow(`${arr.slice(0, i)},`) + chalk.dim.red(`${arr[i]}${comma}`) +`${arr.slice(i+1)}]`);
      while (j >= 0 && k < arr[j]) {
        iterations++;
        arr[j+1] = arr[j];
        j--;
      }
      // remember that on the final iteration where the greater value gets
      // moved up, j is still moved down one. So the spot to insert k is j+1.
      arr[j+1] = k;
      var firstComma = j+1 === 0 ? "" : ",";
      var midComma = (j+2 === i+1 && i+1 === arr.length) ? "" : ",";
      var lastComma = (i+1 === arr.length || i+1 === j+2) ? "" : ",";
      console.log(`[` + chalk.yellow(`${arr.slice(0, j+1)}${firstComma}`) + chalk.green(`${arr[j+1]}${midComma}`) + chalk.yellow(`${arr.slice(j+2, i+1)}${lastComma}`) + `${arr.slice(i+1)}]`);
    }
    var endTime = Date.now();
    var duration = endTime - startTime;
    console.log(chalk.dim.green(`(Sorting done; ${iterations} total iterations)`));
    console.log(chalk.underline.yellow(`\nSorting took:`) + ` ${duration} ms.`);
    return arr
  }
}
