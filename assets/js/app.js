
let ind;

function calc(){

let weight = +weightInput.value;
let growht = +growhtInput.value;
let sant = santInput.checked;

if(sant){

    if(Number.isInteger(growht)){

        growht = growht / 100;

        ind = weight / (growht**2);

        ind = Math.round(ind*100) / 100;

        indexInput.innerHTML = ind;

    }
    else{

        ind = weight / (growht**2);

        ind = Math.round(ind*100) / 100;

        indexInput.innerHTML = ind;
    }
}
else{

    if(Number.isInteger(growht)){

        growht = growht / 100;

        ind = weight / (growht**2);

        ind = Math.round(ind*100) / 100;

        indexInput.innerHTML = ind;

    }
    else{

        ind = weight / (growht**2);

        ind = Math.round(ind*100) / 100;

        indexInput.innerHTML = ind;
    }

}

if(ind <= 16){

    outOutput.innerHTML = "Это выраженный дефицит массы тела.";

}

if(ind <= 18.5 && ind > 16 ){

    outOutput.innerHTML = "Это недостаточная масса тела (дефицит).";

}

if(ind <= 25 && ind > 18.5){

    outOutput.innerHTML = "Это норма.";

}

if(ind <= 30 && ind > 25){

    outOutput.innerHTML = "Это избыточная масса тела (состояние, предшествующее ожирению).";

}

if(ind <= 35 && ind > 30){

    outOutput.innerHTML = "Это ожирение 1-й степени";

}

if(ind <= 40 && ind > 35){

    outOutput.innerHTML = "Это ожирение 2-й степени";

}

if(ind > 40){

    outOutput.innerHTML = "Это ожирение 3-й степени";

}

}
