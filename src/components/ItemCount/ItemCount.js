import React, {Component, Fragment} from "react"
import Button from '@material-ui/core/Button'

class ItemCount extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleCounterUp = () => {
        this.setState({ count: this.state.count + 1})
    }
    handleCounterDown = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1})
        }
        
    }

    render() {
        return (
            <>
                <div>
                    Cantidad:
                    {this.state.count}
                </div>  
                <div>
                    <Button onClick={this.handleCounterUp} variant="contained" color="primary">
                        +
                    </Button>
                    <Button onClick={this.handleCounterDown} variant="contained" color="secondary">
                        -
                    </Button>
                </div>
            </>
        );
    }
}

export default ItemCount;