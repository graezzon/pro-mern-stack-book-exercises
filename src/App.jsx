const contentNode = document.getElementById('contents');

/*issues array for demo of dynamic passing of values, will eventually be from db*/
const issues = [
    {
      id: 1, status: 'Open', owner: 'Ravan',
      created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
      title: 'Error in console when clicking Add',
    },
    {
      id: 2, status: 'Assigned', owner: 'Eddie',
      created: new Date('2016-08-16'), effort: 14,
      completionDate: new Date('2016-08-30'),
      title: 'Missing bottom border on panel',
    },
  ];

/*this can be used as a wrapper, don't have a use for it yet, but it's cool*/
class BorderWrap extends React.Component{
    render(){
        const borderedStyle = {border: "1px solid silver", background: "#eee", padding:10}
        return (
            <div style={borderedStyle}>
            {this.props.children}
            </div>   
        )
    }
}

class IssueFilter extends React.Component{
    render(){
        return(
            <div>IssueFilter</div>
        )
    }
}

class IssueTable extends React.Component{
    render(){
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
        return(            
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>{issueRows}</tbody>
            </table>
        )
    }
}

class IssueRow extends React.Component {
    render() {
      const issue = this.props.issue;
      return (
        <tr>
          <td>{issue.id}</td>
          <td>{issue.status}</td>
          <td>{issue.owner}</td>
          <td>{issue.created.toDateString()}</td>
          <td>{issue.effort}</td>
          <td>{issue.completionDate ? issue.completionDate.toDateString() : 'OPEN'}</td>
          <td>{issue.title}</td>
        </tr>
      )
    }
  }

IssueRow.defaultProps = {
    issue_title: '-- no title --',
};

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
                <IssueTable issues={issues} />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}


ReactDOM.render(<IssueList />, contentNode);  // Render the component inside the content Node