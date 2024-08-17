//for checking whether the human has checked the image or not
function check_value_of_human(){
    if(document.getElementById('images_human').src == 'http://127.0.0.1:5500/game/question.jpg' && document.getElementById('images_cpu').src == 'http://127.0.0.1:5500/game/question.jpg'){
        document.getElementById('msg1').innerHTML = "choose an option😕";
    }
    else{
        play();
    }
}


// for play
function play(){
    ask_cpu_choce(); //for choosing scissor, paper or rock for pc
    check_value_of_cpu(); //for image according to the choosed option
    check();
    counter();
    re_play();
}


//inital counter value of the game
let human_value = 0;
let cpu_value = 0;

//inital flag for the winner
let cpu_flag = false;
let human_flag = false;

//for cpu
function ask_cpu_choce(){
    var option = ["scissor", "paper", "rock"]
    cpu_choice = option[Math.trunc(Math.random()*3)];
}

//for cpu image:
function check_value_of_cpu(){
    if(cpu_choice == "rock"){
        rock1();
    }
    else if(cpu_choice == "scissor"){
        scissor1();
    }
    else{
        paper1();
    }
}

function rock1(){
    document.getElementById('images_cpu').src = 'rock.jpg';
}

function scissor1(){
    document.getElementById('images_cpu').src = 'scissor.jpg';
}

function paper1(){
    document.getElementById('images_cpu').src  = 'paper.jpg';
}


//frontend:
//for the image according to the option:
function rock(){
    human_choice = "rock";
    document.getElementById('images_human').src = "rock.jpg";
}

function scissor(){
    human_choice = "scissor";
    document.getElementById('images_human').src = 'scissor.jpg';
}

function paper(){
    human_choice = "paper";
    document.getElementById('images_human').src  = 'paper.jpg';
}


//checking the condition
function check(){
    if(cpu_choice == human_choice){
        document.getElementById('msg1').innerHTML = "Draw";
        cpu_flag = true;
        human_flag = true;
        setTimeout(reset , 1000);
    }
    else if(cpu_choice == "rock" && human_choice == "scissor"){
        document.getElementById('msg1').innerHTML = "AI won😔";
        cpu_flag = true;
        human_flag = false;
        setTimeout(reset , 1000);
    }
    else if(cpu_choice == "rock" && human_choice == "paper"){
        document.getElementById('msg1').innerHTML = "human won😎";
        cpu_flag = false;
        human_flag = true;
        setTimeout(reset , 1000);
    }
    else if(cpu_choice == "scissor" && human_choice == "paper"){
        document.getElementById('msg1').innerHTML = "human won😎";
        cpu_flag = false;
        human_flag = true;
        setTimeout(reset , 1000);
    }
    else if(cpu_choice == "scissor" && human_choice == "rock"){
        document.getElementById('msg1').innerHTML = "AI won😔";
        cpu_flag = true;
        human_flag = false;
        setTimeout(reset , 1000);
    }
    else if(cpu_choice == "paper" && human_choice == "scissor"){
        document.getElementById('msg1').innerHTML = "human won😎";
        cpu_flag = false;
        human_flag = true;
        setTimeout(reset , 1000);
    }
    else if(cpu_choice == "paper" && human_choice == "rock"){
        document.getElementById('msg1').innerHTML = "AI won😔";
        cpu_flag = true;
        human_flag = false;
        setTimeout(reset , 1000);
    }
    else{
        document.getElementById('msg1').innerHTML = "Something is wrong🤨"
    }
}

function counter(){
    if(human_flag  == true && cpu_flag == true){
    }
    else if(human_flag == true && cpu_flag == false){
        human_value++;
        document.getElementById('human_values').innerHTML = human_value;
        document.getElementById('cpu_values').innerHTML = cpu_value;
    }
    else if(human_flag == false && cpu_flag == true){
        cpu_value++;
        document.getElementById('human_values').innerHTML = human_value;
        document.getElementById('cpu_values').innerHTML = cpu_value;
        
    }
}


// function change_counter_value(){
//     document.getElementById('human_values').innerHTML = human_value;
//     document.getElementById('cpu_values').innerHTML = cpu_value;
// }

function re_play(){
    if(human_value == 3){
            human_value = 0;
            cpu_value = 0;
            document.getElementById('msg1').innerHTML = "3!Human wins🥳";
            setTimeout(reset, 1000);
        }
    else if(cpu_value == 3){
            human_value = 0;
            cpu_value = 0;
            document.getElementById('msg1').innerHTML = "3!AI wins😫";
            setTimeout(reset, 1000);
    }
}

function reset(){
    x =  document.getElementById('images_human');
    x.src = 'question.jpg';
    z =  document.getElementById('images_cpu');
    z.src = 'question.jpg';
    document.getElementById('msg1').innerHTML = "Start";
}

function reset_btn(){
    human_value = 0;
    cpu_value = 0;
    document.getElementById('human_values').innerHTML = human_value;
    document.getElementById('cpu_values').innerHTML = cpu_value;
}