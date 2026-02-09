function trafficLight(currentColor, action) {
    //first switch is used to find the next action.
    switch(action) {
        case "next": //if user ask next then outpul will be find the which ligh will blow next.
            switch(currentColor) {
                case "red": // if current red means next signal is green
                    return "green";
                case "green": // if signal is green means next signal is yellow 
                    return "yellow";
                case "yellow": //  if signal is yellow means next signal is red
                    return "red";
                default: // current color is not match to this signal is give default output.
                    return "Invalid color";
            }
        case "time":
            //second case is find the time to blow next signal 
            switch(currentColor) {
                case "red": // if it is red time will be 30s
                    return 30;
                case "green":
                    return 45;
                case "yellow":
                    return 5;
                default:
                    return "Invalid color";
            }
        default:
            return "Invalid action";
    }
}
console.log(trafficLight('red', 'next')); //first argument is currentColor / second argument is action output=> green
console.log(trafficLight('red', 'time'));     // 30
console.log(trafficLight('yellow', 'next'));  // red
console.log(trafficLight('green', 'time'));   // 45
