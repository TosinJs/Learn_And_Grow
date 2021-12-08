import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromProps(error) {
        return { hasError: true}
    }
    componentDidCatch(error, errorInfo) {
        console.log(error)
    }
    render() {
        if (this.state.hasError) {
            return <h2 className="error-center">Error, Failed to Fetch. Please Check you network and Try again</h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;