import React, {Component} from 'react';
import Users from './users';
import {connect} from "react-redux";
import {
   follow,
   setCurrentPage,
   setTotalUsersCount,
   setUsers,
   toggleIsFetching,
   unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/preloader";
import {usersAPI} from '../../api/api';

class UsersContainer extends Component {
   componentDidMount() {
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(pageNumber, this.props.pageSize)
         .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
         });
   }

   render() {
      return (
         <>
            {this.props.isFetching
               ? <Preloader/>
               : null}
            <Users onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
            />
         </>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   };
};

export default connect(mapStateToProps,
   {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow})(UsersContainer);