import React, {Component} from 'react';
import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Auxilary>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Auxilary>
        );
    }
}

export default BurgerBuilder;