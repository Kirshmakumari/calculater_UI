var x = document.getElementById("calculator");
    function insert(gum) {
        document.getElementById("calculator").value = document.getElementById("calculator").value + gum
    }
    function equal() {
        x.value = eval(x.value)
    }
    function clean() {
        x.value = ""
    }
    var date = new Date;
    var hour = date.getHours();
    var mint = date.getMinutes();
    console.log(hour, mint)
    document.getElementById("time").innerHTML = hour + ":" + mint;