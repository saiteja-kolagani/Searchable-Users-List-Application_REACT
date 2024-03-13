import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', usersList: initialUserDetailsList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {usersList} = this.state
    const resultList = usersList.filter(each => each.uniqueNo !== uniqueNo)
    this.setState({usersList: resultList})
  }

  render() {
    const {searchInput, usersList} = this.state
    const filteredUsersList = usersList.filter(user =>
      user.name.includes(searchInput),
    )

    return (
      <div className="d-flex flex-row justify-content-center align-items-center bg-container">
        <div className="app-container">
          <h1 className="title">Users List</h1>
          <input
            type="search"
            className="mb-3"
            onChange={this.onChangeSearchInput}
          />
          <ul className="list-container">
            {filteredUsersList.map(eachUser => (
              <UserProfile
                userDetails={eachUser}
                key={eachUser.uniqueNo}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
