import React from 'react';
import StoreContext from "../../store-context";
import Friends from "./friends";

const FriendsContainer = () => {

   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const friends = store.getState().sidebar.users;
               return <Friends friends={friends}/>
            }
         }
      </StoreContext.Consumer>
   );
};

export default FriendsContainer;