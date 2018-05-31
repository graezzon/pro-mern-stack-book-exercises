const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component{
    render(){
        return(
            <div>IssueFilter</div>
        )
    }
}

class IssueTable extends React.Component{
    render(){
        const borderedStyle = {border: "1px solid silver", background: "#eee", padding:10}
        return(
            <table style={{borderedCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={borderedStyle}>Id</th>
                        <th style={borderedStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id={1}
                    issue_title="Error in Console when clicking Add" />
                    <IssueRow issue_id={2}
                    issue_title="Missing Panel on bottom" />
                    <IssueRow issue_id={3}
                    issue_title="Misaligned columns" />                     
                </tbody>
            </table>
        )
    }
}

class IssueRow extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver", padding: 8};
        return(            
            <tr>
                <td style={borderedStyle}>{this.props.issue_id}</td>
                <td style={borderedStyle}>{this.props.issue_title}</td>
            </tr>
        )
    }
}

class IssueAdd extends React.Component{
    render(){
        return(
            <div>IssueAdd</div>
        )
    }
}


class IssueList extends React.Component{
    render() {
        return (
            <div>
                <h1>IssueTracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}


ReactDOM.render(<IssueList />, contentNode);  // Render the component inside the content Node