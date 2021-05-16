
function I(){
    question_turn = "player1";
    answer_turn = "player2";
        player1_name = localStorage.getItem("player1_name");
        player2_name = localStorage.getItem("player2_name");
    
        player1_score = 0;
        player2_score = 0;
    console.log(player1_name);
    console.log(player2_name);
    document.getElementById("player1_name").innerHTML = player1_name + " : ";
    document.getElementById("player2_name").innerHTML = player2_name + " : ";
    
    document.getElementById("player1_score").innerHTML = player1_score ;
    document.getElementById("player2_score").innerHTML = player2_score ;
    
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
    }
    function send(){
        var number1 = document.getElementById("Number_1").value;
        var number2 = document.getElementById("Number_2").value;
    
        actual_answer = parseInt(number1) *  parseInt(number2);
        question_number = "<h4>" + number1 + "x" + number2 + "</h4>" ;
        check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>" ;
        input_box = "<br>Answer:<input type='text' id='input_check_box'> </input>";
        row = question_number + input_box + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = ".";
        document.getElementById("number2").value = ".";
    }
    
    function check()
    {
        get_answer = document.getElementById("input_check_box").value;
        if(get_answer == actual_answer)	
        {
            if(answer_turn == "player1")
            {
                player1_score = player1_score +1;
                document.getElementById("player1_score").innerHTML = player1_score  ;
                document.getElementById("output1").innerHTML = "<<img src='https://img.icons8.com/bubbles/50/000000/checked-2.png'/> Good Job , my dear! I want to congragulate you warmly by hand, "   + player1_name;
                var audio = new Audio('applause2.mp3');
                audio.play();
            }
            else if (answer_turn == "player2")
            {
                player2_score = player2_score +1;
                document.getElementById("player2_score").innerHTML = player2_score ; 
                document.getElementById("output1").innerHTML = "<img src='https://img.icons8.com/bubbles/50/000000/checked-2.png'/> Good Job , my dear! I want to congragulate you warmly by hand, "   + player2_name;
                var audio = new Audio('applause2.mp3');
                audio.play();
            }
        }
            else{
                if(answer_turn == "player1")
                {
    document.getElementById("output1").innerHTML = "<img src ='https://img.icons8.com/dusk/64/000000/wrong-pincode.png'> </image>  wrong!! try again!! you can watch videos and learn at <a href = 'https://www.byjus.com'>BYJUS</a>   My friend, " + player1_name  + "  learn more!";
    var audio = new Audio('WRONG ANSWER.mp3');
                audio.play();
     
                }
    
                if(answer_turn == "player2")
                {
    document.getElementById("output1").innerHTML = "<img src ='https://img.icons8.com/dusk/64/000000/wrong-pincode.png'> </image>  wrong!! try again!! you can watch videos and learn at <a href = 'https://www.byjus.com'>BYJUS</a>   My friend, " + player2_name  + "  learn more!";
    var audio = new Audio('WRONG ANSWER.mp3');
                audio.play();
    
            } }
        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
        }
        else 
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
        }
    
        if(answer_turn == "player1")
        {
            answer_turn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
        }
        else 
        {
            answer_turn = "player1"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
        }
    
        
    
    }