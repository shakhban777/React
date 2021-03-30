import React, {Component} from 'react';
import Users from './users';
import * as axios from "axios";
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

class UsersContainer extends Component {
   componentDidMount() {
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
         })
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
         })
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
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