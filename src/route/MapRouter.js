import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

const MapRouter = ({ route }) => (
    <Switch>
        {
            route.map(item => (
                item.path ?
                    item.children ?
                        <Route key={item.path}
                            path={item.path}
                            render={(props) => <item.component {...props} route={item.children}>
                                <MapRouter {...props} route={item.children} />
                            </item.component>}
                        /> :
                        <Route key={item.path}
                            path={item.path}
                            render={(props) => <item.component {...props} />}
                        /> :
                    <Redirect {...item} key={item.from} />
            ))
        }
    </Switch>
)
export default MapRouter