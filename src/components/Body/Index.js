import React, { Component } from 'react';

class Body extends Component {
    render() {
        return(
            <div>
                <article className="container box style3">
                    <header>
                        <h2>My Tasks</h2>
                    </header>

                </article>
                <article className="container box style3">
                    <section>
                        <header>
                            <h3>Task 1</h3>
                            <p>Message</p>
                        </header>
                    </section>
                </article>
                <article className="container box style3">
                    <section>
                        <header>
                            <h3>Task 2</h3>
                            <p>Message</p>
                        </header>
                    </section>
                </article>
            </div>
        )
    }
}

export default Body;