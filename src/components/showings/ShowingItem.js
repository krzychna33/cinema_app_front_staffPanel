import React from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from '../../config/axios';
import {connect} from 'react-redux';
import {startGetShowings} from '../../actions/showings';

export class ShowingItem extends React.Component {

    onRemoveButtonClick = () => {
        axiosInstance.delete(`showings/${this.props.showing.id}`).then((res) => {
            if(res.status == 200){
                this.props.startGetShowings();
            }
        })
    }

    render(){
        return (
            <tr>
                <td>
                    {this.props.showing.id}
                </td>
                <td>
                    {this.props.showing.movieTitle}
                </td>
                <td>
                    {this.props.showing.showingTime}
                </td>
                <td>
                    {this.props.showing.price/100}
                </td>
                <td>
                <Link to={`/edit-showing/${this.props.showing.id}`}><button>Edit</button></Link>
                </td>
                <td>
                    <button onClick={this.onRemoveButtonClick}>Remove</button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGetShowings: () => dispatch(startGetShowings())
    }
}

export default connect(undefined, mapDispatchToProps)(ShowingItem);