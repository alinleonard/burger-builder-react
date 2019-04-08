import React, {Component} from 'react';
import Auxilary from '../../hoc/Auxilary';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxilary>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxilary>
        );
    }
}

export default BurgerBuilder;