import React, { Component } from 'react'

export class Planets extends Component {
    constructor() {
        super()

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/planets/1/')
            .then(response => response.json())
            .then(data => this.setPlanet(data));
    }

    setPlanet(planet) {
        this.setState({
            isLoading: false,
            planet: planet
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoading ? 'Loading' : null
                }
                {
                    this.state.planet ?
                        <div>
                            <div>Planet Name {this.state.planet.name}</div>
                            <div>Diameter {this.state.planet.diameter}</div>
                        </div>
                        : null
                }
            </div>
        )
    }
}

export default Planets
