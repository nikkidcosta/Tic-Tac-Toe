function Square(props){

	const setStates = () => {
    if (props.finished){
      return null;
    }
    if (props.arr[props.id - 1] === 0){
    props.arr[props.id - 1] = props.currentPlayer
    props.setArr([...props.arr])
		if(props.currentPlayer == 1) {
			props.setCurrentPlayer(2)
		}
		else {
			props.setCurrentPlayer(1)
		}
   }
    props.checkWinner(props.arr);
	}

	return(
		<button className = "btn" onClick={() => setStates()}>{props.arr[props.id - 1] == 0 && "_"}{props.arr[props.id - 1] == 1 && "X"} {props.arr[props.id - 1] == 2 && "O"}</button>
	)

}

function Board(props){
	const [currentPlayer, setCurrentPlayer] = React.useState(1); // 1 is player 1, 2 = player 2
  const [arr, setArr] = React.useState(Array(9).fill(0));
  const [finished, setFinished] = React.useState(false);
  const checkWinner = (arr) => {
    const wins = [
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [1, 4, 7],
    [2, 5, 8],
    [6, 7, 8],
    [0, 3, 6],
  ];
  for (let i = 0; i < wins.length; i++){
    let win = wins[i];
    if (arr[win[0]] == arr[win[1]] && arr[win[0]] == arr[win[2]] && arr[win[0]] != 0){
      setFinished(true);
      return arr[win[0]];
    }
  }
    return 0;
 /**
 
 */
}
  function reset(){
    setArr(new Array(9).fill(0));
    setCurrentPlayer(1);
    setFinished(false);
  }
	return (
    <div>
      <h1>{finished && currentPlayer == 1 && "O Wins!"}{finished && currentPlayer == 2 && "X Wins!"}{currentPlayer == 1 && !finished && "Next Turn: X"}{currentPlayer == 2 && !finished && "Next Turn: O"}</h1>
		<div className = "board">
			<div className = "row">
				<Square currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} arr = {arr} setArr = {setArr} id = {1} checkWinner={checkWinner} finished={finished}/>
				<Square currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} arr = {arr} setArr = {setArr} id = {2} checkWinner={checkWinner} finished={finished}/>
				<Square currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} arr = {arr} setArr = {setArr} id = {3} checkWinner={checkWinner} finished={finished}/>
			</div>
			<div className = "row">
				<Square currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} arr = {arr} setArr = {setArr} id = {4} checkWinner={checkWinner} finished={finished}/>
				<Square currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} arr = {arr} setArr = {setArr} id = {5} checkWinner={checkWinner} finished={finished}/>
				<Square currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} arr = {arr} setArr = {setArr} id = {6} checkWinner={checkWinner} finished={finished}/>
			</div>
			<div className = "row"> 
        <Square currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} arr = {arr} setArr = {setArr} id = {7} checkWinner={checkWinner} finished={finished}/>
				<Square currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} arr = {arr} setArr = {setArr} id = {8} checkWinner={checkWinner} finished={finished}/>
				<Square currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} arr = {arr} setArr = {setArr} id = {9} checkWinner={checkWinner} finished={finished}/>
			</div>
      <button className="restartBtn" onClick={() => reset()}>Restart Game </button>
     </div>
      </div>
     )
   }
      
 ReactDOM.render(
  <Board />,
  document.getElementById('root')
)