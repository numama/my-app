// Stateを使うためにインポート
import { useState } from 'react';

// マス目一つのモジュール
// propsとしてマスに表示するvalueと、クリックしたときのハンドラ関数を受け取る
function Square({value, onSquareClick}) {
  // returnの中にHTML的なやつを書く キモい
  return (
    // プロパティとしてonClickをつけて、{}の中にjavascriptを書く
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

// 盤面全体のモジュール
// defaultはこのファイルの標準の関数っていう意味らしい
export default function Board() {
  // constとしてステートを持つ
  // useStateはreact独自の関数で、この書き方も独特？ではないと思う
  // ただ書き方があんまり見ない書き方なのでよくわからない
  // squaresがconst名で、setSquaresがset関数として使えるらしい
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Stateを変更するためのハンドラ関数 これをpropsとしてSquareに渡す
  // React では、イベントを表す props には onSomething という名前を使い、
  // それらのイベントを処理するハンドラ関数の定義には handleSomething という名前を使うことが一般的
  function handleClick(i) {
    // 値コピーのためにslice()をつかう？
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    // returnの中に複数要素を並べるときは<></>で囲う キモい
    <>
      <div className="board-row">
        {/* <Square /> って書き方をすると、他のReactモジュールを要素として配置できる
        プロパティとしてpropsを渡す
        ハンドラ関数を引数付きで渡したいが、 handleClick(1) として渡してしまうと、即時実行されてしまいエラーとなる
        -> 無名関数のようなカタチにして () => handleClick(1) とすれば引数付きで渡せる */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
