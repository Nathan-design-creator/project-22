function getSum() {
    document.write(arguments[0])
    document.write("<br>");
    document.write(arguments[1]);
    document.write("<br>");
    document.write(arguments[2]);
    document.write("<br>");
    document.write(arguments[3]);
    document.write("<br>");
    document.write(arguments[4]);
    document.write("<br>");
    document.write(arguments[5]);

    var sum = 1;
    for (var index = 0; index <= 5; index = index + 1) {
        sum = sum + arguments[index];
    }
    document.write("<br>");
    document.write(sum);
}


getSum(1, 2, 3, 4, 5, 6);
