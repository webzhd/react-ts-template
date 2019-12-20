import * as React from 'react'
import { Button } from 'antd'

export default class App extends React.Component<any, any> {
    render() {

        return (
            <div>
          hello 12e e
                {
                    this.props.a
                }
                {
                    this.props.b
                }
                <Button>btn</Button>
            </div>
        )
    }
}
