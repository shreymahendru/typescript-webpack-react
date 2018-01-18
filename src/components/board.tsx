import * as React from "react";
import Square from "./square";

interface BoardState
{
    squares: Array<string>;
    xIsNext: boolean;
}

interface BoardProps
{
    squares: Array<string>,
    handleClick: Function
}    

export default class Board extends React.Component<BoardProps, BoardState>
{   
    public render()
    {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>  
        );
    }

    private renderSquare(i: number)
    {
        return <Square
            value={this.props.squares[i]}
            handleClick={() => this.props.handleClick(i)} />
    }
}