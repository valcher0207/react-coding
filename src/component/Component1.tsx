import React from 'react';

interface IProps {
    nama: string;
    umur: number;
    kelas: string;
    pagi: boolean;
}

class Component1 extends React.Component<IProps> {
    render() {
        return (
            <div>
                <h3>Name: {this.props.nama}</h3>
                <h3>Age: {this.props.umur}</h3>
                <h3>Class: {this.props.kelas}</h3>
                <h3>Coding Pagi {this.props.pagi}</h3>
            </div>
        )
    }
}

export default Component1