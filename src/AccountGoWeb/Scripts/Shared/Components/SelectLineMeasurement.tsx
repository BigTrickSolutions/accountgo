﻿import * as React from "react";
import {observer} from "mobx-react";

@observer
export default class SelectLineMeasurement extends React.Component<any, {}>{
    onChangeMeasurement(e) {
        this.props.store.updateLineItem(this.props.row, "measurementId", e.target.value);
    }
    render() {
        var options = [];
        // TODO: replace with real values;
        //options.push(<option key="1" value="1"> Measurement #1 </option>);
        //options.push(<option key="2" value="2"> Measurement #2 </option>);
        //options.push(<option key="3" value="3"> Measurement #3 </option>);
        this.props.store.commonStore.measurements.map(function (measurement) {
            return (
                options.push(<option key={ measurement.id } value={ measurement.id } > { measurement.description } </option>)
            );
        });

        return (
            <select defaultValue={this.props.selected} id={this.props.controlId} onChange={this.onChangeMeasurement.bind(this) }>
                {options}
            </select>
        );
    }
}