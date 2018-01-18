import * as React from "react";

interface SquareProps
{
    value: string;
    handleClick: Function
}

interface SquareState
{
    // value: string;
    // number: number;
}

export default class Square extends React.Component<SquareProps, {}>
{
    public constructor(props: SquareProps)
    {
        super(props);   
        
    }
    
    public render()
    {
        return (
            <button className="square" onClick={()=> this.props.handleClick()} >
                {this.props.value}
            </button>    
        );
    }
}
