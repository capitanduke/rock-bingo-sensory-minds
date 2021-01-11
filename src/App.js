import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [ givenNumber, setGivenNumber ] = useState("");
  const [ flag, setFlag ] = useState(false);
  const [ board2 ] = useState([]);
  const [ boardWin ] = useState([]);
  const [ winCol1, setWinCol1 ] = useState(false);
  const [ winCol2, setWinCol2 ] = useState(false);
  const [ winCol3, setWinCol3 ] = useState(false);
  const [ winCol4, setWinCol4 ] = useState(false);
  const [ winCol5, setWinCol5 ] = useState(false);
  const [ winRow1, setWinRow1 ] = useState(false);
  const [ winRow2, setWinRow2 ] = useState(false);
  const [ winRow3, setWinRow3 ] = useState(false);
  const [ winRow4, setWinRow4 ] = useState(false);
  const [ winRow5, setWinRow5 ] = useState(false);
  const [ dial1, setDial1 ] = useState(false);
  const [ dial2, setDial2 ] = useState(false);
  const [ textWinning, setTextWinning ] = useState("");
  const [ rowsWon, setRowsWon ] = useState(0);
  const [ columnsWon, setColumnsWon ] = useState(0);
  const [ diagonalsWon, setDiagonalsWon ] = useState(0);
  const [ bigRockStar, setBigRockStar ] = useState("");

  

  const modal = document.getElementById("myModal");
  
  let randowm;
  let numbersBoardArray = [];

  let arrayTest = ["AC/DC", "Accept", "Adam Ant", "Alice in Chains", "Angels & Airwaves", "Angel Witch", "The Animals", "April Wine", "The Archies", "Arctic Monkeys", 
                  "Argent", "Art Garfunkel", "Audioslave", "Avenged Sevenfold", "The Avett Brothers", "Bachman Turner Overdrive", "Bad Company", "Bad Religion", "The Band", "Barns Courtney", 
                  "Bastille", "Bathory", "The Beach Boys", "Bee Gees", "Beirut", "Ben Folds", "Ben Folds 5", "Better Than Ezra", "David Bowie", "The Big Bopper", "Big & Rich", "The Beatles", 
                  "Ramones", "Nirvana", "Billy Joel", "Billy Preston", "Billy Squier", "Bjork", "The Black Crowes", "Black Flag", "The Black Keys", "Black Label Society", "Black Sabbath", "Bleachers", 
                  "Blind Guardian", "Blind Melon", "Blink-182", "Blondie", "Blood Sweat & Tears", "Bloodhound Gang", "Nick Drake", "Blues Brothers", "Blues Traveller", "Blur", "Bo Diddley", "Bob Dylan", 
                  "Bob Marley", "Bob Seger", "Bobby Darin", "Bobby Lewis", "Bobby Vee", "Booker T. and the MG's", "Bowling For Soup", "Bon Jovi", "Boston", "The Box Tops", "Boys Like Girls", "Beastie Boys", 
                  "Bread", "Breaking Benjamin", "Brenda Lee", "Brett Young", "Brian Eno", "Buddy Holly", "Buffalo Springfield", "The Buggles", "Bush", "Butthole Surfers", "Buzzcocks", "The Byrds", 
                  "Cage the Elephant", "Cake", "The Calling", "Pnatera", "Candlebox", "Candlemass", "Canned Heat", "Cannibal Corpse", "Caravan", "Carcass", "Carl Perkins", "Carly Simon", "Carole King", 
                  "The Cars", "The Cardigans", "The Carpenters", "Carrie Underwood", "Catfish and the Bottlemen", "Metallica", "Sex Pistols", "The Clash", "The Strokes", "MF Doom", "Bad Brains", "NIN", "Marilyn Manson",
                  "Chemical Brothers", "Radiohead", "Mad Season", "Tom Waits", "Rage Against The Machine", "Pennywise", "Oasis", "Melvins", "Sepultura", "NOFX" ]

  

  const startHandler = () => {

      for(let i = 80; numbersBoardArray.length < i; i--){
        let numbersBoard = Math.floor(Math.random() * 90);
        //numbersBoardArray.push(numbersBoard);
        //if (numbersBoardArray.includes(numbersBoard) === false) numbersBoardArray.push(numbersBoard);

        if(numbersBoardArray.includes(arrayTest[numbersBoard]) === false){
          numbersBoardArray.push(arrayTest[numbersBoard]);
        }
        if(numbersBoardArray.length === 25){
          numbersBoardArray.map( (el, index) =>  
          index !== 12 ? board2.push(<div key={index} className="box" id={el}>{el}</div>) : board2.push(<div key={index} className="box empty-box">ROCK BINGO</div> )
          );
          return board2;
        }
        
        if( numbersBoardArray.length === 24){
          setFlag(true);
        }

      }

  }


  const numberHandler = () => {
    
    randowm = Math.floor(Math.random() * 90);
    setGivenNumber(arrayTest[randowm]);


    for(let i = 0; i < board2.length; i++){
      if(board2[i].props.id === arrayTest[randowm]){
        document.getElementById(board2[i].props.id).className = 'complete';
        boardWin.push(i);
      }
    }

    let bingoOne = board2.slice(0, 5);
    let bingoTwo = board2.slice(5, 10);
    let bingoThree = board2.slice(10, 15);
    let bingoFour = board2.slice(15, 20);
    let bingoFive = board2.slice(20, 25);

    let winRowOne = [];
    bingoOne.map(el => winRowOne.push(parseInt(el.key, 10)) );
    
    let winRowTwo = [];
    bingoTwo.map(el => winRowTwo.push(parseInt(el.key, 10)) );
    
    let winRowThree = [];
    bingoThree.map(el => winRowThree.push(parseInt(el.key, 10)) );
    
    let winRowFour = [];
    bingoFour.map(el => winRowFour.push(parseInt(el.key, 10)) );
    
    let winRowFive = [];
    bingoFive.map(el => winRowFive.push(parseInt(el.key, 10)) );

    let winingRowOne = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < winRowOne.length; j++){
        if( boardWin[i] === winRowOne[j]){
          if (winingRowOne.includes(boardWin[i]) === false) winingRowOne.push(boardWin[i]);
        }
      }
    }


    let winingRowTwo = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < winRowTwo.length; j++){
        if( boardWin[i] === winRowTwo[j]){
          if (winingRowTwo.includes(boardWin[i]) === false) winingRowTwo.push(boardWin[i]);
        }
      }
    }


    let winingRowThree = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < winRowThree.length; j++){
        if( boardWin[i] === winRowThree[j]){
          if (winingRowThree.includes(boardWin[i]) === false) winingRowThree.push(boardWin[i]);
        }
      }
    }

    let winingRowFour = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < winRowFour.length; j++){
        if( boardWin[i] === winRowFour[j]){
          if (winingRowFour.includes(boardWin[i]) === false) winingRowFour.push(boardWin[i]);
        }
      }
    }

    let winingRowFive = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < winRowFive.length; j++){
        if( boardWin[i] === winRowFive[j]){
          if (winingRowFive.includes(boardWin[i]) === false) winingRowFive.push(boardWin[i]);
        }
      }
    }


    if(winingRowOne.length === 5 ){
      if(winRow1 === false){
        setTextWinning("BINGO!!!! You got the first row");
        modal.style.display = "flex";
        setRowsWon( rowsWon +1);
        setWinRow1(true);
      }
    }

    if(winingRowTwo.length === 5 ){
      if(winRow2 === false){
        setTextWinning("BINGO!!!! You got the second row");
        modal.style.display = "flex";
        setRowsWon( rowsWon +1);
        setWinRow2(true);
      }
    }

    if(winingRowThree.length === 4 ){
      if(winRow3 === false){
        setTextWinning("BINGO!!!! You got the third row");
        modal.style.display = "flex";
        setRowsWon( rowsWon +1);
        setWinRow3(true);
      }
    }

    if(winingRowFour.length === 5 ){
      if(winRow4 === false){
        setTextWinning("BINGO!!!! You got the fourth row");
        modal.style.display = "flex";
        setRowsWon( rowsWon +1);
        setWinRow4(true);
      }
    }

    if(winingRowFive.length === 5 ){
      if(winRow5 === false){
        setTextWinning("BINGO!!!! You got the fifth row");
        modal.style.display = "flex";
        setRowsWon( rowsWon +1);
        setWinRow5(true);
      }
    }


    let columnOne = [0,5,10,15,20];
    let columnTwo = [1,6,11,16,21];
    let columnThree = [2,7,17,22];
    let columnFour = [3,8,13,18,23];
    let columnFive = [4,9,14,19,24];

    let winingColOne = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < columnOne.length; j++){
        if( boardWin[i] === columnOne[j]){
          if (winingColOne.includes(boardWin[i]) === false) winingColOne.push(boardWin[i]);
        }
      }
    }
    
    let winingColTwo = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < columnTwo.length; j++){
        if( boardWin[i] === columnTwo[j]){
          if (winingColTwo.includes(boardWin[i]) === false) winingColTwo.push(boardWin[i]);
        }
      }
    }

    let winingColThree = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < columnThree.length; j++){
        if( boardWin[i] === columnThree[j]){
          if (winingColThree.includes(boardWin[i]) === false) winingColThree.push(boardWin[i]);
        }
      }
    }

    let winingColFour = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < columnFour.length; j++){
        if( boardWin[i] === columnFour[j]){
          if (winingColFour.includes(boardWin[i]) === false) winingColFour.push(boardWin[i]);
        }
      }
    }

    let winingColFive = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < columnFive.length; j++){
        if( boardWin[i] === columnFive[j]){
          if (winingColFive.includes(boardWin[i]) === false) winingColFive.push(boardWin[i]);
        }
      }
    }

    if(winingColOne.length === 5 ){
      if(winCol1 === false){
         setTextWinning("BINGO!!!! You got the first column");
        modal.style.display = "flex";
        setColumnsWon( columnsWon +1);
        setWinCol1(true);
      }
    }

    if(winingColTwo.length === 5 ){
      if(winCol2 === false){
         setTextWinning("BINGO!!!! You got the second column");
        modal.style.display = "flex";
        setColumnsWon( columnsWon +1);
        setWinCol2(true);
      }
    }

    if(winingColThree.length === 4 ){
      if(winCol3 === false){
         setTextWinning("BINGO!!!! You got the third column");
        modal.style.display = "flex";
        setColumnsWon( columnsWon +1);
        setWinCol3(true);
      }
    }

    if(winingColFour.length === 5 ){
      if(winCol4 === false){
         setTextWinning("BINGO!!!! You got the fourth column");
        modal.style.display = "flex";
        setColumnsWon( columnsWon +1);
        setWinCol4(true);
      }
    }

    if(winingColFive.length === 5 ){
      if(winCol5 === false){
         setTextWinning("BINGO!!!! You got the fifth column");
        modal.style.display = "flex";
        setColumnsWon( columnsWon +1);
        setWinCol5(true);
      }
    }

    let diagonalOne = [0,6,18,24];
    let diagonalTwo = [4,8,16,20];

    let winingDialOne = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < diagonalOne.length; j++){
        if( boardWin[i] === diagonalOne[j]){
          if (winingDialOne.includes(boardWin[i]) === false) winingDialOne.push(boardWin[i]);
        }
      }
    }
    
    let winingDialTwo = [];
    
    for(let i = 0; i < boardWin.length; i++){
      for(let j = 0; j < diagonalTwo.length; j++){
        if( boardWin[i] === diagonalTwo[j]){
          if (winingDialTwo.includes(boardWin[i]) === false) winingDialTwo.push(boardWin[i]);
        }
      }
    }

    if(winingDialOne.length === 4 ){
      if(dial1 === false){
         setTextWinning("BINGO!!!! You got the Diagonal One");
        modal.style.display = "flex";
        setDiagonalsWon( diagonalsWon +1);
        setDial1(true);
      }
    }

    if(winingDialTwo.length === 4 ){
      if(dial2 === false){
         setTextWinning("BINGO!!!! You got the Diagonal Two");
        modal.style.display = "flex";
        setDiagonalsWon( diagonalsWon +1);
        setDial2(true);
      }
    }

    if( rowsWon > 3 && columnsWon > 3 && diagonalsWon > 1){
      document.getElementsByClassName('given-number')[0].style.display = "none";
      document.getElementsByClassName('gn-button button')[0].style.display = "none";
      document.getElementsByClassName('rock-winner')[0].style.display = "flex";
      setBigRockStar("You are the biggest rock and roll star ever !!!!!!!!");
  
    }
    


  }

  const closeModal = () => {
    modal.style.display = "none";
  }


  useEffect(() => {
        
    startHandler();
    
    return () => {
      
        
    }
  }, [])



  return (

    <div className="game">

      <h1 className="title"> </h1>
     
     
      <div className="hitting">
        <div className="given-number" id="given-number">{givenNumber}</div>
        <button className="gn-button button" onClick={numberHandler}>HIT ME</button>

        <div className="rock-winner">{bigRockStar}</div>
         
        <div className="score">
          <div className="title-score"><b>Rows:</b> <span>{rowsWon}</span></div> 
          <div className="title-score"><b>Columns:</b> <span>{columnsWon}</span></div>
          <div className="title-score"><b>Diagonals:</b> <span>{diagonalsWon}</span></div> 
        </div>
          
          

      </div>



      <div className="table">
        {board2}
      </div>


      

      
      
      
      <div id="myModal" className="modal">

        <div className="modal-content">
          <div className="text-wining">{textWinning}</div>
          <span className="close" onClick={closeModal}>&times;</span>
        </div>

      </div>



    </div>
      
  );
}

export default App;
